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

    constructor() {
        super();
        this.state = {
            show: false
        };
    };

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

    
    handlePassword = ({input, label, meta: { touched, error }}) => {
        const { show } = this.state;
        return (
            <div className="site_admin_login_form_container">
                <Form>
                    <label className="site_admin_login_label">{label}</label>
                    <Form.Control
                        {...input}
                        placeholder={label}
                        className="site_admin_login_field"
                        type={show ? 'text' : 'password'}
                    />
                    {touched && error && <span className="error_tag">{error}</span>}
                </Form>
            </div>
        )
    };

    handleClick = (e) => {
        if(e.target.checked == true) this.setState({ show: true })
        else this.setState({ show: false })
    }

    render() {
        const { handleSubmit } = this.props;
        const { show } = this.state;
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
                        name='password'
                        component={this.handlePassword}
                        label='Password'
                    />
                    <div className="button-wrapper">
                        <div className="forget_admin_password_btn">Forget Password</div>
                        <div className="show_password_container">
                            <input type="checkbox" value={show} onChange={e => this.handleClick(e)}/><label>Show password</label>
                        </div>
                    </div>
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