export const validation = (value) => {
    const errors = {};
    if(!value?.header) {
        errors.header = 'Required';
    };

    if(!value?.contactUs) {
        errors.contactUs = 'Required';
    };
    if (!value?.details) {
        errors.details =  { error: 'At least one member must be added' };
    } else {
      const detailsArrayErrors = [];
      value.details.forEach((data, index) => {
        const detailErrors = {};
        console.log(data, 'datadatadatadatadatadata')
        if (!data?.detail) {
          detailErrors.detail = 'Required';
          detailsArrayErrors[index] = detailErrors;
        };

        if (!data?.select || data?.select == 'select') {
          detailErrors.select = 'Required';
          detailsArrayErrors[index] = detailErrors;
        }
      });
      
      if (detailsArrayErrors.length) {
        errors.details = detailsArrayErrors;
      }
    };

    return errors;
}