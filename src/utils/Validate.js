export const checkvalidate = (email, password, fullname = null) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/.test(password);

  if (!isEmailValid) return "Please enter a valid email address.";
  if (!isPasswordValid) return "Please enter a valid password.";

  // ✅ Full name should only be checked if it's SIGN UP (i.e., fullname provided)
  if (fullname !== null) {
    const isFullnameValid = /^[a-zA-Z]{2,}(?: [a-zA-Z]{2,}){0,2}$/.test(fullname.trim());
    if (!isFullnameValid) return "Please enter a valid full name.";
  }

  return null;
};
