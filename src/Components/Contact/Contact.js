/* Components */
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';

/* Component */
import ContactForm from '../ContactForm/ContactForm';
import ContactMap from '../ContactMap/ContactMap';

import { data } from './contactHelper';

/* Styles */
import './contact.css';

const Contact = () => {
    return (
        <div>
            <div className='contact-container'>
                <div className='main-contact-container'>
                    <div className='main-contact-header-container'>
                        <h2 className='main-contact-header-content'>
                            Contact Us
                        </h2>
                    </div>
                    <div className='main-contact-para-container'>
                        <label>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum assumenda iusto maiores perspiciatis minus nisi odio doloribus. 
                            Quam, ipsam! Culpa, veniam ea eligendi nemo in libero laboriosam non? Tenetur, voluptatibus!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum assumenda iusto maiores perspiciatis minus nisi odio doloribus. 
                            Quam, ipsam! Culpa, veniam ea eligendi nemo in libero laboriosam non? Tenetur, voluptatibus!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum assumenda iusto maiores perspiciatis minus nisi odio doloribus. 
                            Quam, ipsam! Culpa, veniam ea eligendi nemo in libero laboriosam non? Tenetur, voluptatibus!
                        </label>
                    </div>
                    <Row className='contact-grid-system-container'>
                        {
                            data?.map((i, index) => {
                                return (
                                    <Col key={index} className='contact-grid-system-col'>
                                        <img src={i?.imgSrc} className='contact-logo' alt="Email Logo" />
                                        <p className='contact-data'>{i?.data}</p>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row  className='contact-grid-system-container'>
                        <ContactForm />
                        <ContactMap />
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Contact;