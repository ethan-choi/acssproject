import './Events.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.css'
import { ListGroup, ListGroupItem, Image, Tab, Tabs, Row, Col, Container, Card } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Events() {
    return (
        <div className="home">

            <Helmet>
                <title> Events </title>
            </Helmet>
            {/* Navigation bar */}
            <Navigation> </Navigation>


            {/* Header */}
            <div class="headerContainer">
                <Container fluid={true} className="teamHeader">
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <h1 class="animate__animated animate__fadeInDown"> Our Events </h1>
                        </Col>
                    </Row>
                </Container>
            </div>



            <div class="eventsContainer">

                <h1> Come say hi </h1>
                <p class="pageSubtitle"> All are welcome to join in on the fun.</p>
                <Container fluid={true}>
                    <Row>
                        <Col lg={{ span: 3, offset: 3 }} md={{ span: 12, offset: 0 }}>
                            <Card style={{ width: '26rem' }} className="eventCard">
                                <div class="thumbnailoday">
                                </div>
                                <Card.Body>
                                    <Card.Title>Beginners Mandarin Lesson</Card.Title>
                                    <Card.Text>
                                        Learn greetings, numbers and basic words in an interactive lesson.
                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className="eventSubtext"> <FontAwesomeIcon icon={faCalendarAlt} /> 5th May 2021</ListGroupItem>
                                    <ListGroupItem className="eventSubtext"> <FontAwesomeIcon icon={faClock} /> 3pm - 4pm</ListGroupItem>
                                    <ListGroupItem className="eventSubtext"> <FontAwesomeIcon icon={faMapMarkerAlt} />    UTS CB11.06.107 </ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <button> Learn more </button>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col lg={{ span: 3, offset: 0 }} md={{ span: 12, offset: 0 }}>
                            <Card style={{ width: '26rem' }} className="eventCard">
                                <div class="thumbnailoday">
                                </div>
                                <Card.Body>
                                    <Card.Title>Hotpot</Card.Title>
                                    <Card.Text>
                                        Socialise and catch up with your friends over a hotpot dinner
                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className="eventSubtext"><FontAwesomeIcon icon={faCalendarAlt} /> 11th May 2021</ListGroupItem>
                                    <ListGroupItem className="eventSubtext"> <FontAwesomeIcon icon={faClock} /> 6pm - 9pm</ListGroupItem>
                                    <ListGroupItem className="eventSubtext"> <FontAwesomeIcon icon={faMapMarkerAlt} /> Dolar Hotpot </ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <button> Learn more </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                    <Col lg={{ span: 3, offset: 3 }} md={{ span: 12, offset: 0 }}>
                            <Card style={{ width: '26rem' }} className="eventCard">
                                <div class="thumbnailoday">
                                </div>
                                <Card.Body>
                                    <Card.Title>Yum Cha</Card.Title>
                                    <Card.Text>
                                        Enjoy delicious Yum Cha with your friends                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className="eventSubtext"> <FontAwesomeIcon icon={faCalendarAlt} /> 29th May 2021</ListGroupItem>
                                    <ListGroupItem className="eventSubtext"> <FontAwesomeIcon icon={faClock} /> 11am - 2pm</ListGroupItem>
                                    <ListGroupItem className="eventSubtext"> <FontAwesomeIcon icon={faMapMarkerAlt} />    Rhodes Phoenix </ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <button> Learn more </button>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col lg={{ span: 3, offset: 0 }} md={{ span: 12, offset: 0 }}>
                            <Card style={{ width: '26rem' }} className="eventCard">
                                <div class="thumbnailoday">
                                </div>
                                <Card.Body>
                                    <Card.Title>Games Night</Card.Title>
                                    <Card.Text>
                                        Sit back and relax while playing some Chinese games                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className="eventSubtext"><FontAwesomeIcon icon={faCalendarAlt} /> 1st June 2021</ListGroupItem>
                                    <ListGroupItem className="eventSubtext"> <FontAwesomeIcon icon={faClock} /> 6pm - 9pm</ListGroupItem>
                                    <ListGroupItem className="eventSubtext"> <FontAwesomeIcon icon={faMapMarkerAlt} /> UTS Underground </ListGroupItem>
                                </ListGroup>
                                <Card.Body>
                                    <button> Learn more </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dd3438" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,122.7C320,139,400,181,480,192C560,203,640,181,720,170.7C800,160,880,160,960,165.3C1040,171,1120,181,1200,197.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
}

export default Events;
