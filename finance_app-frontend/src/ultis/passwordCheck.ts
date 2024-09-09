export const evaluatePasswordStrength = (password: string) => {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[@$!%*?&]/.test(password)) score += 1;
  return score;
};

export const getPasswordStrengthColor = (score: number) => {
  switch (score) {
    case 0:
    case 1:
      return 'red';
    case 2:
      return 'orange';
    case 3:
      return 'yellow';
    case 4:
      return 'lightgreen';
    case 5:
      return 'green';
    default:
      return 'red';
  }
};

export const getPasswordStrengthText = (score: number) => {
  switch (score) {
    case 0:
    case 1:
      return 'Very Weak';
    case 2:
      return 'Weak';
    case 3:
      return 'Fair';
    case 4:
      return 'Good';
    case 5:
      return 'Strong';
    default:
      return 'Very Weak';
  }
};

export const passwordValidator = (_: any, value: string) => {
  if (!value) {
    return Promise.reject('Please input your password!');
  }
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!regex.test(value)) {
    return Promise.reject('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
  }
  const strength = evaluatePasswordStrength(value);
  
  if (strength < 3) {
    return Promise.reject('Password is too weak.');
  }
  return Promise.resolve();
};

export const confirmPasswordValidator = (getFieldValue: (name: string) => any) => ({
  validator(_: any, value: string) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve();
    }
    return Promise.reject('The two passwords that you entered do not match!');
  },
});