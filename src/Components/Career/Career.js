/* Style */
import { Col, Container, Row } from 'react-bootstrap';
import './career.css';
import Footer from '../Footer/Footer';

const Career = () => {
    return (
        <div>
            <div className="career_container">
                <Container>
                    <Row className='career_row_container'>
                        <Col  lg={6} md={6} sm={12} xs={12}>
                        
                        </Col>
                        <Col  lg={6} md={6} sm={12} xs={12} >

                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
};

export default Career;