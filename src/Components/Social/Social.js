import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

/* Style */
import './social.css';

/* Images */
import phone from '../../Images/phone.avif';
import message from '../../Images/message.png';
import youtube from '../../Images/youtube.jpg';
import facebook from '../../Images/facebook.jpg';
import { Link } from "react-router-dom";

class Social extends React.Component {

    constructor() {
        super();
        this.state = {
            chatbox: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({chatbox: true});
        }, 1000);
    }

    render() {
        const { chatbox } = this.state;
        return (
            <div className="chatbox-container">
                {
                    !chatbox ? 
                    <MdKeyboardArrowUp size={50} className="chatbox-opener" onClick={() => this.setState({chatbox: !this.state.chatbox})}/>
                    :
                    <MdKeyboardArrowDown size={50} className="chatbox-opener" onClick={() => this.setState({chatbox: !this.state.chatbox})}/>
                }
                {
                    chatbox ? 
                    <div className="contact-details-container">
                        <Link>
                            <img src={message} className="contact-details" onClick={() => alert('hi')}/>
                        </Link>
                        <Link to='https://www.youtube.com/channel/UCdlVR8jpzSzX4OYbS2TIf4g' target="_blank">
                            <img  className="contact-details" src={youtube} />
                        </Link>
                        <a href="tel:+1844411RISE">
                            <img src={phone} className="contact-details" />
                        </a>
                        <Link to="https://www.facebook.com/Rise-Broadband-1575004259448064/" target="_blank">
                            <img className="contact-details" src={facebook} />
                        </Link>
                    </div>
                    :
                    <></>
                }
            </div>
        )   
    }
};

export default Social;