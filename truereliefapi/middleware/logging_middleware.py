"""
Logging Middleware for True Relief Physio
Comprehensive request/response logging with security monitoring
"""
import logging
import time
import json
from django.utils import timezone

logger = logging.getLogger('truereliefapi')
security_logger = logging.getLogger('security')


class RequestLoggingMiddleware:
    """
    Middleware to log all API requests and responses
    Includes timing, IP tracking, and suspicious activity detection
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Record start time
        start_time = time.time()

        # Get client IP (handle proxies)
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            client_ip = x_forwarded_for.split(',')[0]
        else:
            client_ip = request.META.get('REMOTE_ADDR')

        # Log request
        request_log = {
            'timestamp': timezone.now().isoformat(),
            'method': request.method,
            'path': request.path,
            'ip': client_ip,
            'user_agent': request.META.get('HTTP_USER_AGENT', 'Unknown'),
            'referer': request.META.get('HTTP_REFERER', 'None'),
        }

        # Detect suspicious patterns
        self._check_suspicious_activity(request, client_ip)

        # Process request
        response = self.get_response(request)

        # Calculate response time
        duration = time.time() - start_time

        # Log response
        response_log = {
            **request_log,
            'status_code': response.status_code,
            'duration_ms': round(duration * 1000, 2)
        }

        # Log based on status code
        if response.status_code >= 500:
            logger.error(f"Server Error: {json.dumps(response_log)}")
        elif response.status_code >= 400:
            logger.warning(f"Client Error: {json.dumps(response_log)}")
        else:
            logger.info(f"Request: {json.dumps(response_log)}")

        # Add response time header
        response['X-Response-Time'] = f"{duration * 1000:.2f}ms"

        return response

    def _check_suspicious_activity(self, request, client_ip):
        """
        Check for suspicious patterns that might indicate malicious activity
        """
        suspicious_patterns = [
            'union', 'select', 'drop', 'insert', 'update', 'delete',  # SQL injection
            '<script', 'javascript:', 'onerror=', 'onclick=',  # XSS
            '../', '..\\',  # Path traversal
            'eval(', 'exec(',  # Code injection
        ]

        # Check query string and POST data
        full_path = request.get_full_path().lower()
        for pattern in suspicious_patterns:
            if pattern in full_path:
                security_logger.warning(
                    f"Suspicious pattern '{pattern}' detected from IP {client_ip} in request: {full_path}"
                )
                break

        # Check for rapid requests (potential DDoS)
        # This would be enhanced with Redis for production
        user_agent = request.META.get('HTTP_USER_AGENT', '')
        if not user_agent or user_agent == 'Unknown':
            security_logger.warning(f"Request without User-Agent from IP {client_ip}")
