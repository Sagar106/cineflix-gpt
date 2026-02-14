export const checkValidation = (email, password) => {
  const errors = {
    email: "",
    password: "",
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );

  if (!isEmailValid) {
    errors.email = "Email is not valid";
  }
  if (!isPasswordValid) {
    errors.password = "Password is not valid";
  }

  return errors;
};
