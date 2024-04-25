/* Plugins */
import React from "react";
import { MdPlumbing } from "react-icons/md";
import { GiMechanicalArm } from "react-icons/gi";
import { MdElectricBolt } from "react-icons/md";

/* Style */
import './contactForm.css';
import { Field, reduxForm } from "redux-form";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import img from '../../Images/Whatsapp.png';
import { submit } from "./submit";

class ContactForm extends React.Component {

    CustomImageCheckbox = ({ input, src, alt }) => (
        <Image src={img} alt={alt} onClick={() => input.onChange(!input.value)} />
      );
      
      handleSelect = () => (
        <Field
          component={this.CustomImageCheckbox}
          name="sections"
          {...this.props}
        />
      );

    handleChange = ({input, label, type, className, meta: { touched, error }}) => {
        return (
            <div>
                <div className="contact-form-container">
                    <label className="contact-fomr-label">{label}</label>
                    <Form.Control
                        {...input}
                        placeholder={label}
                        className={className}
                        type={type}
                    />
                    {touched && error && <span className="about_error_tag">{error}</span>}
                </div>
            </div>
        )
    };

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <h3 className="contact-form-header">To get Instant reply</h3>
                <form onSubmit={handleSubmit(submit)}>
                    <Field
                        name="name"
                        component={this.handleChange}
                        label="Enter your name"
                        type="text"
                        className="contact-form-field"
                        />
                    <Field
                        name="email"
                        component={this.handleChange}
                        label="Enter your Mail"
                        className="contact-form-field"
                        type="text"
                        />
                    <Field
                        name="phoneNumber"
                        className="contact-form-field"
                        component={this.handleChange}
                        label="Enter your Phone Number"
                        type="text"
                    />
                    <Field
                        component={this.handleSelect}
                    />
                    {/* <div className="contact_check_box_container">
                        <div className="contact-checkbox-col">
                            <MdPlumbing size={50} className="contact-icon-check-box"/>
                            <p>plumbing</p>
                        </div>
                        <div className="contact-checkbox-col">
                            <GiMechanicalArm size={50} className="contact-icon-check-box" />
                            <p>Mechanical</p>
                        </div>
                        <div className="contact-checkbox-col">
                            <MdElectricBolt size={50} className="contact-icon-check-box" />
                            <p>Electrical</p>
                        </div>
                    </div> */}
                    <Button type='submit' variant='danger'>Submit</Button>
                </form>
            </div>
        )
    }
};

ContactForm = reduxForm({
    form: 'ContactUsForm' /* name for each form */
})(ContactForm);

export default ContactForm;