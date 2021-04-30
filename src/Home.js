import './Home.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.css'
import { Image, Tab, Tabs, Row, Col, Container, Card } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import welcome from './img/welcome.jpg';
import WelcomeAnnouncement from "./announcements/WelcomeAnnouncement.js";
import MerchAnnouncement from "./announcements/MerchAnnouncement.js";
import group from "./img/group.JPG";
import groupred from "./img/groupred.JPG";

import logo from "./img/logo.png";

function Home() {
    return (
        <div className="home">
            <Helmet>
                <title> Home </title>
            </Helmet>

            {/* Navigation bar */}
            <Navigation> </Navigation>

            {/* Landing Page */}
            <div className="coverContainer">
                <Container fluid={true}>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <h3 class="animate__animated animate__fadeInDown"> Australian Chinese Students Society </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 6, offset: 3 }}>
                            <p class="animate__animated animate__fadeInDown">  Our mission is to encourage the interaction and unity between international and domestic Chinese Students through the exploration of Chinese culture. </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 2, offset: 4 }}>
                            <a href="/join"> <button class="hvr-grow"> Join Now </button> </a>
                        </Col>
                        <Col lg={{ span: 2 }}>
                            <a href="/about"> <button class="hvr-grow">  Learn More </button>  </a>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* Announcements
            <div class="announcementsContainer">
                <h1> Latest News </h1>
                <Container fluid={true} className="announcements">
                    <Row>
                        <Col lg={{ span: 6 }, { offset: 3 }}>
                            <Tabs className="tabs"
                                id="controlled-tab-example"
                                className="singleTab"
                            >
                                <Tab eventKey="home" title="Welcome Event">
                                    <WelcomeAnnouncement> </WelcomeAnnouncement>
                                </Tab>
                                <Tab eventKey="profile" title="New Merch">
                                    <MerchAnnouncement> </MerchAnnouncement>

                                </Tab>
                                <Tab eventKey="contact" title="AGM">
                                </Tab>
                            </Tabs>
                        </Col>
                        <Col lg={{ span: 3 }}>
                        </Col>
                    </Row>
                </Container>

            </div>  */}

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
}

export default Home;
