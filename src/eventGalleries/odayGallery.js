import './gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/animate.css/animate.css'
import { Nav, Image, Tab, Tabs, Carousel, Sonnet, Navbar, Row, Col, Container, Card, Button } from "react-bootstrap";
import Navigation from "../Navbar.js";
import Footer from "../footer.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { odayGalleryPhotos } from "./odayGalleryPhotos.js"
import Gallery from "react-photo-gallery";
import oday1 from "../img/oday/oday1.JPG";
import oday2 from "../img/oday/oday2.JPG";
import oday3 from "../img/oday/oday4.JPG";
import oday4 from "../img/oday/oday3.JPG";

function odayGallery() {


    return (
        <div class="gallery">
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


            <h1> O'Day Clubs Expo </h1>
            <Container fluid={true}>
                <Row className="galleryRow">
                    <Col lg={{ span: 4, offset: 2 }} className="galleryCol">
                        <Image className="galleryImage" src={oday1} fluid />
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} className="galleryCol">
                        <Image className="galleryImage" src={oday2} fluid />
                    </Col>
                </Row>
                <Row className="galleryRow">
                    <Col lg={{ span: 4, offset: 2 }} className="galleryCol">
                        <Image className="galleryImage" src={oday3} fluid />
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} className="galleryCol">
                        <Image className="galleryImage" src={oday4} fluid />
                    </Col>
                </Row>

                <Row className="galleryRow">
                    <Col lg={{ span: 2, offset: 5 }} className="galleryCol">
                        <a href="https://drive.google.com/drive/folders/1--CdvnXP9GjIpZtHcamw7_aZpuyqzUui" target="_blank" s> <button class="hvr-grow"> View all photos </button> </a>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div >
    );
}

export default odayGallery;
