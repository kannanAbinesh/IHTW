/* Plugins */
import React from 'react';
import { Button, Form, Col, Row } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

/* Components */
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import ManageAboutImage from '../ManageAboutImage/ManageAboutImage';

/* Helpers and Actions */
import { submit } from './submit';
import { validation } from './validate';

/* Style */
import './siteAdminAbout.css';

class ManageAboutForm extends React.Component {

    handleChange = ({input, label, type, className, meta: { touched, error }}) => {
        return (
            <div className="site_admin_about_form_container">
                <label className="site_admin_about_label">{label}</label>
                <Form.Control
                    {...input}
                    placeholder={label}
                    className={className}
                    type={type}
                />
                {touched && error && <span className="about_error_tag">{error}</span>}
            </div>
        )
    };

    handleChangeTextArea = ({input, label, type, meta: { touched, error }}) => {
        return (
            <div className="site_admin_about_form_container">
                <label className="site_admin_about_label">{label}</label>
                <Form.Control
                    as="textarea"
                    {...input}
                    placeholder={label}
                    className="aboutus_textarea"
                    type={type}
                />
                {touched && error && <span className="about_error_tag">{error}</span>}
            </div>
        )
    };

    render() {
        const { handleSubmit } = this.props;
        const { id, handleGetData, image } = this.props;
        return (
            <div className='admin_page_container'>
                <AdminSideBar />
                <h1 className='admin_headers'>Manage about us</h1>
                <div>
                    <form onSubmit={handleSubmit(submit)}>
                        
                        {/* Headers */}
                        <Row className='about_grid_row_header'>
                            <Col className='about_grid_col_header'>
                                <Field 
                                    type="text"
                                    name='header'
                                    component={this.handleChange}
                                    label='Headers'
                                    className='site_admin_about_field'
                                />
                            </Col>
                            <Col className='about_grid_col_header'></Col>
                            <Col className='about_grid_col_header'></Col>
                        </Row>
                        
                        {/* About us header */}
                        <Row className='about_grid_row'>
                            <Col className='about_grid_col_text_area'>
                                <Field 
                                    type="textArea"
                                    name='aboutus'
                                    component={this.handleChangeTextArea}
                                    label='Enter about us'
                                    className='aboutus_textarea'
                                />
                            </Col>
                        </Row>

                        {/* About icons */}
                        <Row className='about_grid_row'>
                            <Col className='about_grid_col_icons'>
                                <Field 
                                    type="text"
                                    name='projects'
                                    component={this.handleChange}
                                    label='Projects'
                                    className='site_admin_about_field'
                                />
                            </Col>
                            <Col className='about_grid_col_icons'>
                                <Field 
                                    type="text"
                                    name='clients'
                                    component={this.handleChange}
                                    label='Clients'
                                    className='site_admin_about_field'
                                />
                            </Col>
                            <Col className='about_grid_col_icons'>
                                <Field 
                                    type="text"
                                    name='destination'
                                    component={this.handleChange}
                                    label='Destination'
                                    className='site_admin_about_field'
                                />
                            </Col>
                        </Row>

                        {/* Year */}
                        <Row  className='about_grid_row'>
                            <Col className='about_grid_col_story'>
                                <Field 
                                    type="text"
                                    name='year'
                                    component={this.handleChange}
                                    label='Since'
                                    className='site_admin_about_field'
                                />
                            </Col>
                            <Col className='about_grid_col_story'>
                                <Field 
                                    type="text"
                                    name='storyHeader'
                                    component={this.handleChange}
                                    label='Story Header'
                                    className='site_admin_about_field'
                                />
                            </Col>
                            <Col className='about_grid_col_story'></Col>
                        </Row>

                        {/* Story */}
                        <Row className='about_grid_row'>
                            <Col className='about_grid_col_text_area'>
                                <Field 
                                    type="textArea"
                                    name='story'
                                    component={this.handleChangeTextArea}
                                    label='Our story'
                                    className='aboutus_textarea'
                                />
                            </Col>
                        </Row>

                        <Row className='about_grid_row'>
                            <Col className="about_image_uploader_col">
                                <label className="site_admin_about_label">Upload Images</label>
                                <ManageAboutImage 
                                    id={id}
                                    images={image}
                                    handleUpdateImages={handleGetData}
                                />
                            </Col>
                        </Row>
                        <Button className='admin_about_btn' type='submit' variant='danger'>Submit</Button>
                    </form>
                </div>
            </div>
        )
    }
};

ManageAboutForm = reduxForm({
    form: 'SiteAdminAboutLoginForm', /* Site admin about form */
    validate: validation
})(ManageAboutForm)

const mapState = state => ({});

const mapDispatch = {};

export default (connect(mapState, mapDispatch)(ManageAboutForm));