/* Plugins */
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";

/* Components */
import ManageAboutForm from "./ManageAboutForm";

/* Action and Helpers */
import store from '../../Reducers'; // global redux
import { getAbout } from "../../Actions/getAboutAction";

class ManageAbout extends React.Component {
    constructor() {
        super();
        this.state = {
            formData: {},
            imageData: []
        }
    };
    

    handleGetData = async () => {
        let data = await store.dispatch(getAbout());
        this.setState({ formData: data?.data });
        this.setState({ imageData: data?.image });
    };

    componentDidMount() {
        this.handleGetData();
    };

    render() {
        const { formData, imageData } = this.state;
        if(formData) {
            return (
                <ManageAboutForm 
                    initialValues={formData} 
                    id={formData?.id}
                    image={imageData}
                    handleGetData={this.handleGetData}
                />
            );
        }
    }
};

const mapState = () => ({});

const mapDispatch = {
    getAbout
};

export default (connect(mapState, mapDispatch)(ManageAbout));