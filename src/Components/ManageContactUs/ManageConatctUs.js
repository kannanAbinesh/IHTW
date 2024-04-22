/* Plugins */
import React from "react";

/* Components */
import ManageContactUsForm from "../ManageContactUsForm/ManageContactUsForm";

/* Helpers and Action */
import store from '../../Reducers';
import { getContact } from "../../Actions/getContact";

/* Stlyes */
import './manageContactUs.css'

class ManageContactUs extends React.Component {

    constructor() {
        super();
        this.state = {
            formData: {},
            contactDetails: []
        }
    };

    handleGet = async () => {
        let data = await store.dispatch(getContact());
        // this.setState({ formData: data?.data });
        // this.setState({ imageData: data?.contactDetails });
        let initialValues = {
            id: data?.data?.id,
            header: data?.data?.header,
            contactUs: data?.data?.contactUs,
            details: data?.contactDetails
        };
        this.setState({fomrData: initialValues});
        console.log(initialValues, "adfdfsfsd" , data, 'datadatadatadata')
    }

    componentDidMount() {
        this.handleGet()
    }

    render() {
        return (
            <div>
                <ManageContactUsForm 
                    initialValues={this.state.fomrData} 
                />
            </div>
        )
    }
};

export default ManageContactUs;