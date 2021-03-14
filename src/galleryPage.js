import './galleryPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.css'
import { Row, Col, Container, Card } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import { Link } from "react-router-dom";
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
