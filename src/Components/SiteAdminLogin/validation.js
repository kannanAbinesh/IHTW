export const validation = (value) => {
    const errors = {};

    if (!value?.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
      errors.email = 'Invalid email address'
    };

    if (!value?.password) {
      errors.password = 'Required'
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value?.password)) {
      errors.password = 'Invalid password'
    };

    return errors
}