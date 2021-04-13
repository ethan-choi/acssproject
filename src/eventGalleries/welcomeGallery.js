import './gallery.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/animate.css/animate.css'
import { Nav, Image, Tab, Tabs, Carousel, Sonnet, Navbar, Row, Col, Container, Card, Button } from "react-bootstrap";
import Navigation from "../Navbar.js";
import Footer from "../footer.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import Gallery from "react-photo-gallery";
import welcome1 from "../img/welcome/welcome1.JPG"
import welcome2 from "../img/welcome/welcome2.jpg"
import welcome5 from "../img/welcome/welcome5.JPG"
import welcome4 from "../img/welcome/welcome4.jpg"



function welcomeGallery() {


    return (
        <div class="gallery">

            <Helmet>
                <title> Gallery | Welcome Picnic </title>
            </Helmet>
            <Navigation> </Navigation>
            {/* Header */}

            <div class="headerContainer">
                <Container fluid={true} className="galleryHeader">
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <h1 class="animate__animated animate__fadeInDown"> Gallery </h1>
                        </Col>
                    </Row>
                </Container>
            </div>


            <h1> Welcome Day 2021 </h1>
            <Container fluid={true}>
                <Row className="galleryRow">
                    <Col lg={{ span: 4, offset: 2 }} className="galleryCol">
                        <Image className="galleryImage" src={welcome1} fluid />
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} className="galleryCol">
                        <Image className="galleryImage" src={welcome2} fluid />
                    </Col>
                </Row>
                <Row className="galleryRow">
                    <Col lg={{ span: 4, offset: 2 }} className="galleryCol">
                        <Image className="galleryImage" src={welcome5} fluid />
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} className="galleryCol">
                        <Image className="galleryImage" src={welcome4} fluid />
                    </Col>
                </Row>

                <Row className="galleryRow">
                    <Col lg={{ span: 2, offset: 5 }} className="galleryCol">
                        <a href="https://drive.google.com/drive/folders/1-28YTI9pMH8q8R7IO2NtXdAzeHY8HG2O" target="_blank" s> <button class="hvr-grow"> View all photos </button> </a>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div >
    );
}

export default welcomeGallery;
