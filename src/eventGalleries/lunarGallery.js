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
import lunar1 from "../img/lunarMarkets/lunar1.jpg"
import lunar2 from "../img/lunarMarkets/lunar2.jpg"
import lunar3 from "../img/lunarMarkets/lunar3.jpg"
import lunar4 from "../img/lunarMarkets/lunar4.jpg"



function lunarGallery() {


    return (
        <div class="gallery">
            <Helmet>
                <title> Gallery | Lunar Markets </title>
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


            <h1> Lunar Markets 2021 </h1>
            <Container fluid={true}>
                <Row className="galleryRow">
                    <Col lg={{ span: 4, offset: 2 }} className="galleryCol">
                        <Image className="galleryImage" src={lunar1} fluid />
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} className="galleryCol">
                        <Image className="galleryImage" src={lunar2} fluid />
                    </Col>
                </Row>
                <Row className="galleryRow">
                    <Col lg={{ span: 4, offset: 2 }} className="galleryCol">
                        <Image className="galleryImage" src={lunar2} fluid />
                    </Col>
                    <Col lg={{ span: 4, offset: 0 }} className="galleryCol">
                        <Image className="galleryImage" src={lunar3} fluid />
                    </Col>
                </Row>

                <Row className="galleryRow">
                    <Col lg={{ span: 2, offset: 5 }} className="galleryCol">
                        <a href="https://drive.google.com/drive/folders/1HxryM-vYv5a1PsD2qm8knzizAJqRH3wU" target="_blank" s> <button class="hvr-grow"> View all photos </button> </a>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div >
    );
}

export default lunarGallery;
