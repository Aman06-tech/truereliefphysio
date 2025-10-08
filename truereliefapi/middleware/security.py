"""
Security Middleware for True Relief Physio
Implements security headers and protection mechanisms
"""
import logging

logger = logging.getLogger(__name__)


class SecurityHeadersMiddleware:
    """
    Middleware to add security headers to all responses
    Implements OWASP security best practices
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        # Prevent clickjacking
        response['X-Frame-Options'] = 'DENY'

        # Prevent MIME type sniffing
        response['X-Content-Type-Options'] = 'nosniff'

        # Enable XSS protection
        response['X-XSS-Protection'] = '1; mode=block'

        # Strict Transport Security (HTTPS only)
        response['Strict-Transport-Security'] = 'max-age=31536000; includeSubDomains; preload'

        # Content Security Policy
        response['Content-Security-Policy'] = (
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'; "
            "style-src 'self' 'unsafe-inline'; "
            "img-src 'self' data: https:; "
            "font-src 'self' data:; "
            "connect-src 'self' http://localhost:8000 http://localhost:3000; "
            "frame-ancestors 'none';"
        )

        # Referrer Policy
        response['Referrer-Policy'] = 'strict-origin-when-cross-origin'

        # Permissions Policy
        response['Permissions-Policy'] = (
            "geolocation=(), "
            "microphone=(), "
            "camera=(), "
            "payment=()"
        )

        return response


class RequestSizeLimitMiddleware:
    """
    Middleware to limit request body size to prevent DoS attacks
    """
    MAX_REQUEST_SIZE = 10 * 1024 * 1024  # 10 MB

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        content_length = request.META.get('CONTENT_LENGTH', 0)

        if content_length:
            try:
                content_length = int(content_length)
                if content_length > self.MAX_REQUEST_SIZE:
                    logger.warning(
                        f"Request size {content_length} exceeds limit from {request.META.get('REMOTE_ADDR')}"
                    )
                    from django.http import JsonResponse
                    return JsonResponse(
                        {'error': 'Request entity too large. Maximum size is 10MB'},
                        status=413
                    )
            except (ValueError, TypeError):
                pass

        return self.get_response(request)
