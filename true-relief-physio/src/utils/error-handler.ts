/**
 * Error Handling Utilities
 *
 * Provides user-friendly error messages and handles rate limiting gracefully
 */

import { ApiError } from '../lib/api-client';

export interface UserFriendlyError {
  title: string;
  message: string;
  action?: string;
  isRecoverable: boolean;
  canRetry: boolean;
  retryAfter?: number;
}

/**
 * Convert API error to user-friendly message
 */
export function handleApiError(error: ApiError): UserFriendlyError {
  // Rate limit errors
  if (error.isRateLimited) {
    const retryMinutes = error.retryAfter ? Math.ceil(error.retryAfter / 60) : null;

    return {
      title: 'Too Many Requests',
      message: retryMinutes
        ? `You've reached the request limit. Please try again in ${retryMinutes} minute${retryMinutes > 1 ? 's' : ''}.`
        : "You've reached the request limit. Please try again later.",
      action: 'Please wait before submitting again, or contact us directly for urgent matters.',
      isRecoverable: true,
      canRetry: true,
      retryAfter: error.retryAfter,
    };
  }

  // Network errors
  if (error.status === 0) {
    return {
      title: 'Connection Error',
      message: 'Unable to connect to the server. Please check your internet connection.',
      action: 'Check your connection and try again.',
      isRecoverable: true,
      canRetry: true,
    };
  }

  // Validation errors (400)
  if (error.status === 400) {
    return {
      title: 'Invalid Information',
      message: error.message || 'Please check the information you entered and try again.',
      action: 'Review your input and make sure all required fields are filled correctly.',
      isRecoverable: true,
      canRetry: false,
    };
  }

  // Unauthorized (401)
  if (error.status === 401) {
    return {
      title: 'Authentication Required',
      message: 'Your session has expired. Please log in again.',
      action: 'You will be redirected to the login page.',
      isRecoverable: true,
      canRetry: false,
    };
  }

  // Forbidden (403)
  if (error.status === 403) {
    return {
      title: 'Access Denied',
      message: 'You don\'t have permission to perform this action.',
      action: 'Please contact support if you believe this is a mistake.',
      isRecoverable: false,
      canRetry: false,
    };
  }

  // Not found (404)
  if (error.status === 404) {
    return {
      title: 'Not Found',
      message: 'The requested resource could not be found.',
      action: 'Please try again or contact support.',
      isRecoverable: false,
      canRetry: false,
    };
  }

  // Server errors (500+)
  if (error.status >= 500) {
    return {
      title: 'Server Error',
      message: 'Something went wrong on our end. We\'re working to fix it.',
      action: 'Please try again in a few minutes, or contact us for urgent matters.',
      isRecoverable: true,
      canRetry: true,
    };
  }

  // Generic error
  return {
    title: 'Oops! Something Went Wrong',
    message: error.message || 'An unexpected error occurred.',
    action: 'Please try again or contact support if the problem persists.',
    isRecoverable: true,
    canRetry: true,
  };
}

/**
 * Format retry countdown
 */
export function formatRetryTime(seconds: number): string {
  if (seconds < 60) {
    return `${seconds} second${seconds > 1 ? 's' : ''}`;
  }

  const minutes = Math.ceil(seconds / 60);
  return `${minutes} minute${minutes > 1 ? 's' : ''}`;
}

/**
 * Get error severity level
 */
export function getErrorSeverity(error: ApiError): 'info' | 'warning' | 'error' | 'critical' {
  if (error.isRateLimited) return 'warning';
  if (error.status === 0) return 'error';
  if (error.status === 400) return 'warning';
  if (error.status === 401 || error.status === 403) return 'warning';
  if (error.status === 404) return 'info';
  if (error.status >= 500) return 'critical';
  return 'error';
}

/**
 * Generate user action recommendation
 */
export function getActionRecommendation(error: ApiError): string[] {
  const recommendations: string[] = [];

  if (error.isRateLimited) {
    recommendations.push('Wait before trying again');
    recommendations.push('Contact us directly for urgent matters');
    recommendations.push('Call: 9625891710 or 8449555400');
  } else if (error.status === 0) {
    recommendations.push('Check your internet connection');
    recommendations.push('Refresh the page');
    recommendations.push('Try again in a moment');
  } else if (error.status === 400) {
    recommendations.push('Review all form fields');
    recommendations.push('Ensure phone number is valid');
    recommendations.push('Check that email address is correct');
    recommendations.push('Verify date is in the future');
  } else if (error.status >= 500) {
    recommendations.push('Wait a few minutes and try again');
    recommendations.push('Contact us if the issue persists');
    recommendations.push('Email: truereliefphysio@gmail.com');
  }

  return recommendations;
}

/**
 * Log error for debugging (in development)
 */
export function logError(error: ApiError, context: string): void {
  if (process.env.NODE_ENV === 'development') {
    console.group(`[Error] ${context}`);
    console.error('Status:', error.status);
    console.error('Message:', error.message);
    if (error.isRateLimited) {
      console.warn('Rate Limited:', true);
      console.warn('Retry After:', error.retryAfter, 'seconds');
    }
    if (error.details) {
      console.error('Details:', error.details);
    }
    console.groupEnd();
  }
}

/**
 * Check if error is retryable
 */
export function isRetryableError(error: ApiError): boolean {
  // Network errors are retryable
  if (error.status === 0) return true;

  // Server errors are retryable
  if (error.status >= 500) return true;

  // Rate limit errors are retryable (after waiting)
  if (error.isRateLimited) return true;

  // Client errors are not retryable
  return false;
}

/**
 * Wait for retry with countdown callback
 */
export async function waitForRetry(
  seconds: number,
  onCountdown?: (remaining: number) => void
): Promise<void> {
  return new Promise((resolve) => {
    let remaining = seconds;

    const interval = setInterval(() => {
      remaining--;
      if (onCountdown) {
        onCountdown(remaining);
      }

      if (remaining <= 0) {
        clearInterval(interval);
        resolve();
      }
    }, 1000);
  });
}

/**
 * Retry API call with exponential backoff
 */
export async function retryWithBackoff<T>(
  apiCall: () => Promise<T>,
  maxRetries: number = 3,
  initialDelay: number = 1000
): Promise<T> {
  let lastError: any;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await apiCall();
    } catch (error) {
      lastError = error;

      if (attempt < maxRetries - 1) {
        // Wait with exponential backoff
        const delay = initialDelay * Math.pow(2, attempt);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}
