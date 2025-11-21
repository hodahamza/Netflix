import { AbstractControl, ValidationErrors } from "@angular/forms";

// =====================================
// 🔵 Digits Only Validator
// =====================================
export function digitsOnlyValidator(control: AbstractControl): ValidationErrors | null {
  const raw = control.value || "";
  const clean = raw.replace(/\s+/g, "");

  if (!/^[0-9]*$/.test(clean)) {
    return { invalidCard: true };
  }

  return null;
}

// =====================================
// 🔵 Card Length 13–19
// =====================================
export function cardLengthValidator(control: AbstractControl): ValidationErrors | null {
  const raw = control.value || "";
  const clean = raw.replace(/\s+/g, "");

  if (clean.length < 13 || clean.length > 19) {
    return { invalidLength: true };
  }

  return null;
}

// =====================================
// 🔵 Luhn Validator
// =====================================
export function luhnValidator(control: AbstractControl): ValidationErrors | null {
  const raw = control.value || "";
  const clean = raw.replace(/\s+/g, "");

  if (!clean) return null;

  if (!luhnCheck(clean)) {
    return { invalidLuhn: true };
  }

  return null;
}

// Internal Luhn Check Function
function luhnCheck(cardNumber: string): boolean {
  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i], 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

// =====================================
// 🔵 Expiration Date MM/YY
// =====================================
export function expirationValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;

  const value = control.value;
  const [monthStr, yearStr] = value.split("/");

  if (!monthStr || !yearStr) return { pattern: true };

  const month = +monthStr;
  if (month < 1 || month > 12) return { pattern: true };

  const year = +("20" + yearStr);

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return { expired: true };
  }

  return null;
}
