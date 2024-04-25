/* Plugins */
import React from "react";
import { Form } from "react-bootstrap";
import { MdOutlineDeleteOutline } from "react-icons/md";

/* Helpers and Actions */
import { data } from './contactedHelpers';

/* Images */
import searchIcon from '../../Images/searchBarIcon.png';
import emailLogo from '../../Images/emailLogo.png';
import phoneLogo from '../../Images/phoneLogo.png';

/* Style */
import './contactComponent.css';

class ContactComponent extends React.Component {

    handleChange = () => {

    };

    handleDelete = (id) => {

    };

    render() {
        return (
            <div>
                <div className="contacted_container_header">
                    <div>
                        <Form.Control
                            style={{backgroundImage: `url(${searchIcon})`}}
                            className="contacted_search_bar"
                            onChange={() => this.handleChange()}
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <div></div>
                </div>
                <div className="contacted_container_body">
                    {
                        data?.map((i, index) => {
                            return (
                                <div key={index} className="contacted_container_col">
                                    <div className="contacted_delete" onClick={() => this.handleDelete(i?.id)}>
                                        <MdOutlineDeleteOutline />
                                    </div>
                                    <p className="contacted_name">{i?.name}</p>
                                    <div className="contacted_card_display">
                                        <p>email</p>
                                        <p className="contacted_value">{i?.email}</p>
                                    </div>
                                    <div className="contacted_card_display">
                                        <p>Phone</p>
                                        <p className="contacted_value">{i?.phoneNumber}</p>
                                    </div>
                                    <div className="contacted_card_display">
                                        <p>Section</p>
                                        <p className="contacted_value">{i?.section}</p>
                                    </div>
                                    <div className="contacted_footer">
                                        <a href={`mailto:abineshkannan98@gmail.com`}>
                                            <img src={emailLogo} className="contacted_logo" alt="Email Logo"/>
                                        </a>
                                        <a href={`tel:${i?.phoneNumber}`} >
                                            <img src={phoneLogo} alt="Phone Logo" className="contacted_logo" />
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};

export default ContactComponent;