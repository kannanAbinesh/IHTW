export const validation = (value) => {
    const errors = {};

    if(!value?.headers) {
        errors.headers = 'Required';
    };

    if(!value?.aboutus) {
        errors.aboutus = 'Required';
    };

    if(!value?.projects) {
        errors.projects = 'Required';
    } else if (isNaN(Number(value?.projects))) {
        errors.year = "Please enter the content in number formats";
    };

    if(!value?.clients) {
        errors.clients = 'Required';
    } else if (isNaN(Number(value?.clients))) {
        errors.year = "Please enter the content in number formats";
    };

    if(!value?.destination) {
        errors.destination = 'Required';
    } else if (value?.destination && /@"^[0-9*#+]+$/.test(value?.destination)) {
        errors.destination = 'Please enter the valid data';
    };

    if(!value?.year) {
        errors.year = 'Required';
    } else if (isNaN(Number(value?.year))) {
        errors.year = "Please enter the content in number formats";
    };

    if(!value?.storyHeader) {
        errors.storyHeader = 'Required';
    }

    if(!value?.story) {
        errors.story = 'Required';
    };

    return errors
}