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
    }
    

    handleGetData = async () => {
        let { data, image } = await store.dispatch(getAbout());
        this.setState({formData: data});
    }

    componentDidMount() {
        this.handleGetData();
    };

    render() {
        const { formData } = this.state;
        // console.log(imageData)
        return (
            <ManageAboutForm 
                initialValues={formData} 
                id={formData?.id}
            />
        )
    }
};

const mapState = () => ({});

const mapDispatch = {
    getAbout
};

export default (connect(mapState, mapDispatch)(ManageAbout));