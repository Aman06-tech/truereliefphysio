/**
 * Frontend Input Validation Utilities
 *
 * Provides client-side validation to complement server-side security
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Sanitize string input to prevent XSS
 * Note: React already escapes HTML by default, but this provides extra protection
 */
export function sanitizeString(value: string): string {
  if (!value) return '';

  return value
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .substring(0, 5000); // Limit length
}

/**
 * Validate email address
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || !email.trim()) {
    return { isValid: false, error: 'Email is required' };
  }

  // RFC 5322 compliant email regex (simplified)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  if (email.length > 254) {
    return { isValid: false, error: 'Email address is too long' };
  }

  // Check for suspicious patterns
  const suspiciousPatterns = ['script', 'javascript:', 'onerror', 'onclick'];
  const lowerEmail = email.toLowerCase();

  for (const pattern of suspiciousPatterns) {
    if (lowerEmail.includes(pattern)) {
      return { isValid: false, error: 'Email contains invalid characters' };
    }
  }

  return { isValid: true };
}

/**
 * Validate phone number
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone || !phone.trim()) {
    return { isValid: false, error: 'Phone number is required' };
  }

  // Remove spaces, dashes, and parentheses
  const cleanedPhone = phone.replace(/[\s\-\(\)]/g, '');

  // Check if it contains only digits and optional + prefix
  const phoneRegex = /^\+?\d{10,15}$/;

  if (!phoneRegex.test(cleanedPhone)) {
    return {
      isValid: false,
      error: 'Please enter a valid phone number (10-15 digits)',
    };
  }

  return { isValid: true };
}

/**
 * Validate name
 */
export function validateName(name: string): ValidationResult {
  if (!name || !name.trim()) {
    return { isValid: false, error: 'Name is required' };
  }

  if (name.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }

  if (name.length > 100) {
    return { isValid: false, error: 'Name is too long (max 100 characters)' };
  }

  // Check for suspicious patterns
  const suspiciousPatterns = ['<script', 'javascript:', 'onerror', 'onclick', 'DROP TABLE'];
  const lowerName = name.toLowerCase();

  for (const pattern of suspiciousPatterns) {
    if (lowerName.includes(pattern)) {
      return { isValid: false, error: 'Name contains invalid characters' };
    }
  }

  return { isValid: true };
}

/**
 * Validate age
 */
export function validateAge(age: number | string): ValidationResult {
  const ageNum = typeof age === 'string' ? parseInt(age) : age;

  if (isNaN(ageNum)) {
    return { isValid: false, error: 'Please enter a valid age' };
  }

  if (ageNum < 1 || ageNum > 120) {
    return { isValid: false, error: 'Age must be between 1 and 120 years' };
  }

  return { isValid: true };
}

/**
 * Validate date (appointment date)
 */
export function validateDate(dateString: string): ValidationResult {
  if (!dateString || !dateString.trim()) {
    return { isValid: false, error: 'Date is required' };
  }

  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Check if date is valid
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Please enter a valid date' };
  }

  // Check if date is in the past
  if (date < today) {
    return { isValid: false, error: 'Cannot book appointments in the past' };
  }

  // Check if date is too far in the future (6 months)
  const sixMonthsFromNow = new Date();
  sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);

  if (date > sixMonthsFromNow) {
    return {
      isValid: false,
      error: 'Cannot book appointments more than 6 months in advance',
    };
  }

  return { isValid: true };
}

/**
 * Validate message/text area
 */
export function validateMessage(message: string, required: boolean = false): ValidationResult {
  if (required && (!message || !message.trim())) {
    return { isValid: false, error: 'Message is required' };
  }

  if (message && message.length > 2000) {
    return { isValid: false, error: 'Message is too long (max 2000 characters)' };
  }

  // Check for suspicious SQL patterns
  const sqlPatterns = ['DROP TABLE', 'DELETE FROM', 'INSERT INTO', 'UPDATE ', 'SELECT *'];
  const upperMessage = message.toUpperCase();

  for (const pattern of sqlPatterns) {
    if (upperMessage.includes(pattern)) {
      return { isValid: false, error: 'Message contains invalid content' };
    }
  }

  return { isValid: true };
}

/**
 * Validate location/address
 */
export function validateLocation(location: string): ValidationResult {
  if (!location || !location.trim()) {
    return { isValid: false, error: 'Location is required' };
  }

  if (location.length < 5) {
    return { isValid: false, error: 'Please enter a complete address' };
  }

  if (location.length > 200) {
    return { isValid: false, error: 'Location is too long (max 200 characters)' };
  }

  return { isValid: true };
}

/**
 * Validate subject line
 */
export function validateSubject(subject: string): ValidationResult {
  if (!subject || !subject.trim()) {
    return { isValid: false, error: 'Subject is required' };
  }

  if (subject.length < 3) {
    return { isValid: false, error: 'Subject is too short (min 3 characters)' };
  }

  if (subject.length > 200) {
    return { isValid: false, error: 'Subject is too long (max 200 characters)' };
  }

  return { isValid: true };
}

/**
 * Comprehensive form validation
 */
export interface AppointmentFormData {
  service: string;
  name: string;
  email: string;
  phone: string;
  age: number | string;
  location: string;
  date: string;
  time: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  concern_type: string;
  subject: string;
  message: string;
}

/**
 * Validate appointment form
 */
export function validateAppointmentForm(
  data: AppointmentFormData
): { isValid: boolean; errors: Partial<Record<keyof AppointmentFormData, string>> } {
  const errors: Partial<Record<keyof AppointmentFormData, string>> = {};

  // Validate each field
  const nameValidation = validateName(data.name);
  if (!nameValidation.isValid) errors.name = nameValidation.error;

  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) errors.email = emailValidation.error;

  const phoneValidation = validatePhone(data.phone);
  if (!phoneValidation.isValid) errors.phone = phoneValidation.error;

  const ageValidation = validateAge(data.age);
  if (!ageValidation.isValid) errors.age = ageValidation.error;

  const locationValidation = validateLocation(data.location);
  if (!locationValidation.isValid) errors.location = locationValidation.error;

  const dateValidation = validateDate(data.date);
  if (!dateValidation.isValid) errors.date = dateValidation.error;

  if (!data.service) errors.service = 'Please select a service';
  if (!data.time) errors.time = 'Please select a time slot';

  if (data.message) {
    const messageValidation = validateMessage(data.message, false);
    if (!messageValidation.isValid) errors.message = messageValidation.error;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validate contact form
 */
export function validateContactForm(
  data: ContactFormData
): { isValid: boolean; errors: Partial<Record<keyof ContactFormData, string>> } {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  const nameValidation = validateName(data.name);
  if (!nameValidation.isValid) errors.name = nameValidation.error;

  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) errors.email = emailValidation.error;

  const phoneValidation = validatePhone(data.phone);
  if (!phoneValidation.isValid) errors.phone = phoneValidation.error;

  const subjectValidation = validateSubject(data.subject);
  if (!subjectValidation.isValid) errors.subject = subjectValidation.error;

  const messageValidation = validateMessage(data.message, true);
  if (!messageValidation.isValid) errors.message = messageValidation.error;

  if (!data.concern_type) errors.concern_type = 'Please select a concern type';

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Detect potentially malicious input
 */
export function detectMaliciousInput(input: string): boolean {
  const maliciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i, // Event handlers like onclick=
    /eval\(/i,
    /expression\(/i,
    /DROP\s+TABLE/i,
    /DELETE\s+FROM/i,
    /INSERT\s+INTO/i,
    /\.\.\//,  // Path traversal
    /%3C/i,    // URL encoded <
    /%3E/i,    // URL encoded >
  ];

  return maliciousPatterns.some(pattern => pattern.test(input));
}

/**
 * Sanitize all form data
 */
export function sanitizeFormData<T extends Record<string, any>>(data: T): T {
  const sanitized: any = {};

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeString(value);
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}
