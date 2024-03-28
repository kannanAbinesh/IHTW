/* Plugins */
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

/* Action and Helpers */
import { submit } from './submit';
import { validation } from './validation';

/* Style */
import './siteAdminLogin.css';

class SiteAdminLogin extends React.Component {

    handleChange = ({input, label, type, className, meta: { touched, error }}) => {
        return (
            <div className="site_admin_login_form_container">
                <Form>
                    <label className="site_admin_login_label">{label}</label>
                    <Form.Control
                        {...input}
                        placeholder={label}
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
                        type="text"
                        name='email'
                        component={this.handleChange}
                        label='Email'
                        />
                    <Field
                        type="text"
                        name='password'
                        component={this.handleChange}
                        label='Password'
                    />
                    <div className="site_admin_login_button_container">
                        <Button className="site_admin_login_button" type="submit">Login</Button>
                    </div>
                </form>
            </div>
        )
    }
};

SiteAdminLogin = reduxForm({
    form: 'siteAdminLoginForm', /* Site admin login form */
    validate: validation
})(SiteAdminLogin)

const mapState = () => ({});

const mapDispatch = {};

export default (connect(mapState, mapDispatch)(SiteAdminLogin));