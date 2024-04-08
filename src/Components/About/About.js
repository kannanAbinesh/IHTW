/* Plugins */
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SlPeople } from "react-icons/sl";

/* Components */
import Footer from '../Footer/Footer';

/* Helpers and Actions */
import store from '../../Reducers';
import { getAbout } from '../../Actions/getAboutAction';

/* Styles and Animations */
import './about.css';

const About = () => {

    const [aboutData, setData] = useState({});

    useEffect(() => {
        (async () => {
            let { data } = await store.dispatch(getAbout());
            setData(data)
        })();
    }, []);

    console.log(aboutData, 'kkkkkkkkk');

    let iconsData = [
        {
            id: 1,
            name: 'Project',
            data: aboutData?.projects
        },
        {
            id: 2,
            name: 'Clients',
            data: aboutData?.clients
        },
        {
            id: 3,
            name: 'Destinantion',
            data: aboutData?.destination
        }
    ];
    
    return (
        <div>
            <div className='about_container'>
                <div className='main_about_container'>
                    <div className='main_about_header_container'>
                        <h2 className='main_about_header_content'>{aboutData?.header}</h2>
                    </div>
                    <div className='main_about_para_container'>
                        <label>{aboutData?.aboutus}</label>
                    </div>
                </div>

                <div className='main_about_container'>
                    <Container>
                        <Row className='about_us_summary_container'>
                            {
                                iconsData?.map((i, index) => {
                                    return (
                                        <Col key={index} className='about_us_summary_images'>
                                            <SlPeople className='summery_icons' />
                                            <div className='summary_content'>
                                                <div className='about_inner_count'>
                                                    {i?.data}
                                                    { i?.name !== 'Destinantion' && <label className='about_sup_label'>+</label>}
                                                </div>
                                                <div className='about_inner_content'>{i?.name}</div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </div>

                <Container>
                    <Row className='about_row_container'>
                        <div className='story_main_container'>
                            <label className='Story_header'>{aboutData?.storyHeader}</label>
                            <label className='story_year'>{aboutData?.year}</label>
                            <div className='story_content'>{aboutData?.story}</div>
                        </div>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
};

export default About;