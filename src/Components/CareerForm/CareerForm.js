/* Plugins */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

/* Helpers and Actions */
import { submit } from './submit';
import { validation } from './validation';

/* Styles */
import './careerForm.css';

class CareerForm extends React.Component {

    handleChange = ({input, placeholder, type, meta: { touched, error }}) => {
        return (
            <div className="site_admin_login_form_container">
                <Form>
                    <label className="site_admin_login_label">{placeholder}</label>
                    <Form.Control
                        {...input}
                        placeholder={placeholder}
                        className="site_admin_login_field"
                        type={type}
                    />
                    {touched && error && <span className="error_tag">{error}</span>}
                </Form>
            </div>
        )
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <Field 
                        name='name'
                        type='text'
                        placeholder='Name'
                        component={this.handleChange}
                    />
                    <Field 
                        name='email'
                        type='text'
                        placeholder='Email'
                        component={this.handleChange}
                    />
                    <Field
                        name='phoneNumber'
                        type='text'
                        placeholder='Phone Number'
                        component={this.handleChange}
                    />
                    <div>
                        <Button variant='danger'>Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
};


CareerForm = reduxForm({
    form: 'siteAdminLoginForm', /* Site admin login form */
    validate: validation
})(CareerForm)

const mapState = () => ({});

const mapDispatch = {};

export default (connect(mapState, mapDispatch)(CareerForm));