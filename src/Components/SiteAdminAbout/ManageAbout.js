/* Plugins */
import { connect } from "react-redux";
import { useEffect, useState } from "react";

/* Components */
import ManageAboutForm from "./ManageAboutForm";

/* Action and Helpers */
import store from '../../Reducers'; // global redux
import { getAbout } from "../../Actions/getAboutAction";

const ManageAbout = () => {
    
    const [formData, setFormData] = useState({});

    useEffect(() => {
        (async () => {
            let data = await store.dispatch(getAbout());
            setFormData(data);
        })();
    }, []);

    return (
        <ManageAboutForm initialValues={formData?.data} />
    )
};

const mapState = () => ({});

const mapDispatch = {
    getAbout
};

export default (connect(mapState, mapDispatch)(ManageAbout));