import './gallery.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/animate.css/animate.css'
import { Nav, Image, Tab, Tabs, Carousel, Sonnet, Navbar, Row, Col, Container, Card, Button } from "react-bootstrap";
import Navigation from "../Navbar.js";
import Footer from "../footer.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { odayGalleryPhotos } from "./odayGalleryPhotos.js"
import Gallery from "react-photo-gallery";
import bbq1 from "../img/bbq/bbq1.JPG";
import bbq2 from "../img/bbq/bbq2.JPG";
import bbq3 from "../img/bbq/bbq3.JPG";
import bbq4 from "../img/bbq/bbq4.JPG";

function bbqGallery() {


    return (
        <div class="gallery">

            <Helmet>
                <title> Gallery | Chinese BBQ Night </title>
            </Helmet>

            {/* Navigation */}
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


            <h1> Chinese BBQ Night </h1>
            <Container fluid={true}>
                <Row className="galleryRow">
                    <Col lg={{ span: 4, offset: 2 }} className="galleryCol">
                        <Image className="galleryImage" src={bbq1} fluid />
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} className="galleryCol">
                        <Image className="galleryImage" src={bbq2} fluid />
                    </Col>
                </Row>
                <Row className="galleryRow">
                    <Col lg={{ span: 4, offset: 2 }} className="galleryCol">
                        <Image className="galleryImage" src={bbq3} fluid />
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} className="galleryCol">
                        <Image className="galleryImage" src={bbq4} fluid />
                    </Col>
                </Row>

                <Row className="galleryRow">
                    <Col lg={{ span: 2, offset: 5 }} className="galleryCol">
                        <a href="https://drive.google.com/drive/folders/1H9dDTbR03FyDKKS2NCLQgSWa-lDvcs_j" target="_blank" s> <button class="hvr-grow"> View all photos </button> </a>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div >
    );
}

export default bbqGallery;
