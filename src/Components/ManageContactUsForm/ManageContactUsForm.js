/* Plugins */
import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MdOutlineDeleteOutline } from "react-icons/md";

/* Components */
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import ContactComponent from "../ContactComponent/ContactComponent";

/* Actions and Helpers */
import { submit } from "./submit";
import { validation } from "./validate";

/* Styles */
import './manageContactUsForm.css';

class ManageContactUsForm extends React.Component {

    handleChange = ({input, label, type, className, meta: { touched, error }}) => {
        return (
            <div>
                <div className="site_admin_contact_form_container">
                    <label className="site_admin_contact_label">{label}</label>
                    <Form.Control
                        {...input}
                        placeholder={label}
                        className={className}
                        type={type}
                    />
                    {touched && error && <span className="contact_error_tag">{error}</span>}
                </div>
            </div>
        )
    };

    handleSelect = ({input, label, type, className, meta: { touched, error }}) => {
        return (
            <div>
                <Form.Select 
                    {...input}
                    className={className}
                >
                    <option value="select">- Select -</option>
                    <option value="whatsApp">Whatsapp</option>
                    <option value="email">Email</option>
                    <option value="fax">Fax</option>
                    <option value="phoneNumber">Phone Number</option>
                    <option value="youtube">Youtube</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                </Form.Select>
                {touched && error && <span className="contact_error_tag">{error}</span>}
            </div>
        )
    }

    handleChangeTextArea = ({input, label, type, meta: { touched, error }}) => {
        return (
            <div className="site_admin_contact_form_container">
                <label className="site_admin_contact_label">{label}</label>
                <Form.Control
                    as="textarea"
                    {...input}
                    placeholder={label}
                    className="contact_textarea"
                    type={type}
                />
                {touched && error && <span className="contact_error_tag">{error}</span>}
            </div>
        )
    };

    handleChangeDetails = ({input, placeholder, type, className, meta: { touched, error }}) => {
        return (
            <div className="site_admin_contact_form_container">
                <Form.Control
                    {...input}
                    placeholder={placeholder}
                    className={className}
                    type={type}
                />
                {touched && error && <span className="contact_error_tag">{error}</span>}
            </div>
        )
    };

    renderSections = ({fields, meta: { error, submitFailed } }) => {
        return(
            <div>
                <div className="section_header_container">
                    <label  className="site_admin_contact_label">Add Contact details</label>
                    <div onClick={() => fields.push()} className="section_add_container" >+</div>
                </div>
                {error && <span className="contact_error_tag">{error.error}</span>}
                <div>
                    <Row className="section_inner_container">
                        {
                            fields?.map((data, index) => {
                                return (
                                    <Col className="section_inner_col" key={index}>
                                        <Field
                                            name={`${data}.detail`}
                                            type="text"
                                            component={this.handleChangeDetails}
                                            placeholder="Enter the contact details"
                                            className="site_admin_contact_field"
                                        />
                                        <Field
                                            name={`${data}.select`}
                                            component={this.handleSelect}
                                            className="site_admin_contact_field"
                                        />
                                        <div className="section_delete_icon" onClick={() => fields.remove(index)}>
                                            <MdOutlineDeleteOutline />
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className='admin_page_container'>
                <AdminSideBar />
                <h1 className='admin_headers'>Manage Contact Us</h1>
                <div>
                    <form onSubmit={handleSubmit(submit)}>

                        {/* Headers */}
                        <Row className='contact_grid_row_header'>
                            <Col className='contact_grid_col_header'>
                                <Field 
                                    component={this.handleChange}
                                    type="text"
                                    name="header"
                                    label='Headers'
                                    className="site_admin_contact_field"
                                />
                            </Col>
                            <Col className='contact_grid_col_header'></Col>
                            <Col className='contact_grid_col_header'></Col>
                        </Row>

                        {/* Contact us header */}
                        <Row className='contact_grid_row'>
                            <Col className='contact_grid_col_text_area'>
                                <Field 
                                    type="textArea"
                                    name='contactUs'
                                    component={this.handleChangeTextArea}
                                    label='Enter contact headers'
                                    className='contact_textarea'
                                />
                            </Col>
                        </Row>

                        {/* Sections */}
                        <Row className='contact_grid_row'>
                            <Col className='contact_grid_col_text_area'>
                                <FieldArray
                                    name="details"
                                    component={this.renderSections}
                                    label="Add contact details"
                                />
                            </Col>
                        </Row>
 
                        <Button className='admin_contact_btn' type='submit' variant='danger'>Submit</Button>
                    </form>
                </div>

                {/* People contacted for enquiry */}
                <div>
                    <Row className="contact_grid_row">
                        {/* <ContactComponent /> */}
                    </Row>
                </div>
            </div>
        )
    }
};

const mapState = state => ({});

const mapDispatch = {};

ManageContactUsForm = reduxForm({
    form: 'ManageContactUsForm', /* admin contact us form */
    validate: validation
})(ManageContactUsForm)

export default (connect(mapState, mapDispatch)(ManageContactUsForm));