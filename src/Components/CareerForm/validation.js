export const validation = value => {
    const errors = {};

    if(!value?.name) errors.name = "Required";

    if (!value?.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
        errors.email = 'Invalid email address'
    };

    if(!value?.phoneNumber) {
        errors.phoneNumber = 'Required';
    }
    
    return errors;
};