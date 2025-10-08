"""
Custom throttling classes for True Relief Physio API
Implements rate limiting for different endpoints
"""
from rest_framework.throttling import AnonRateThrottle, UserRateThrottle


class AppointmentRateThrottle(AnonRateThrottle):
    """
    Rate limiting for appointment creation
    Prevents spam appointments - 5 per hour per IP
    """
    scope = 'appointments'
    rate = '5/hour'


class ContactRateThrottle(AnonRateThrottle):
    """
    Rate limiting for contact form submissions
    Prevents spam contacts - 3 per hour per IP
    """
    scope = 'contacts'
    rate = '3/hour'


class ListAPIRateThrottle(AnonRateThrottle):
    """
    Rate limiting for list endpoints
    Prevents data scraping - 30 per minute per IP
    """
    scope = 'list'
    rate = '30/min'


class AdminAPIRateThrottle(UserRateThrottle):
    """
    Rate limiting for authenticated admin endpoints
    More generous for authenticated users - 100 per minute
    """
    scope = 'admin'
    rate = '100/min'


class BurstRateThrottle(AnonRateThrottle):
    """
    Global burst protection
    Prevents sudden spikes - 20 per minute per IP
    """
    scope = 'burst'
    rate = '20/min'


class SustainedRateThrottle(AnonRateThrottle):
    """
    Sustained rate limiting
    Prevents long-term abuse - 1000 per hour per IP
    """
    scope = 'sustained'
    rate = '1000/hour'
