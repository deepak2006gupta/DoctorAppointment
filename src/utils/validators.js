export function validatePhoneNumber(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email === '' || emailRegex.test(email);
}

export function validateRequired(value) {
  return value.trim() !== '';
}

export function validateFutureDate(date) {
  const today = new Date();
  return date > today;
}