import './galleryPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.css'
import { Nav, Image, Tab, Tabs, Carousel, Sonnet, Navbar, Row, Col, Container, Card, Button } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import { Link } from "react-router-dom";
import lunar4 from "./img/lunarMarkets/lunar4.jpg";
function galleryPage() {


    return (
        <div className="galleryPage">

            {/* Navigation */}
            <Navigation> </Navigation>


            {/* Header */}
            <div class="headerContainer">
                <Container fluid={true} className="teamHeader">
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <h1 class="animate__animated animate__fadeInDown"> Gallery </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#dd3438" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,138.7C320,117,400,107,480,101.3C560,96,640,96,720,106.7C800,117,880,139,960,165.3C1040,192,1120,224,1200,208C1280,192,1360,128,1400,96L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>

            {/* Gallery */}
            <div >
                <Container fluid={true} className="galleryContainer">
                    <Row >
                        <Col lg={{ span: 4, offset: 2 }} >
                            <Link to="/odayGallery">
                                <Card style={{ width: '60vh' }} className="galleryCard">
                                    <div class="thumbnailoday">

                                    </div>
                                    <Card.Body>
                                        <h2> O'day Clubs Expo </h2>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col lg={{ span: 4, offset: 0 }} >
                            <Link to="/lunarGallery">
                                <Card style={{ width: '60vh' }} className="galleryCard">
                                    <div class="thumbnaillunar">

                                    </div>
                                    <Card.Body>
                                        <h2> Lunar Markets </h2>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg={{ span: 4, offset: 2 }} >
                            <Link to="/thumbnailwelcome">
                                <Card style={{ width: '60vh' }} className="galleryCard">
                                    <div class="thumbnailwelcome">

                                    </div>
                                    <Card.Body>
                                        <h2> Welcome Day </h2>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div >
    );
}

export default galleryPage;
