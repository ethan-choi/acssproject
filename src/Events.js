import "./Events.css";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/animate.css/animate.css";
import {
  Row,
  Col,
  Container,
  Card,
  Button,
} from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import eventImage from "./img/eventImage.jpeg";


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
              <h1 class="animate__animated animate__fadeInDown">
                {" "}
                Our Events{" "}
              </h1>
            </Col>
          </Row>
        </Container>
      </div>

      <div class="eventsContainer">
        <h1> Come say hi </h1>
        <p class="pageSubtitle"> All are welcome</p>
        <Container fluid={true} className="eventsContainer">
          <Row>
          <Col lg={{ span: 4, offset: 0 }} md={{ span: 12, offset: 0 }}>
              <Card style={{ width: "" }} className="eventCard">
                <Card.Img variant="top" src={eventImage}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="eventCardDescription"> Did someone say food? Count us in! We are excited to announce the 
                  ultimate collab that you’ve been waiting for: ACSS X FOOD SOC. 
                  Come visit us for pork buns, dim sims and more! Vegetarian options are also available  </Card.Text>
                  <Card.Text className="eventCardDetails"><FontAwesomeIcon icon={faCalendarAlt} /> 5th May 2021 </Card.Text>
                  <Card.Text className="eventCardDetails"><FontAwesomeIcon icon={faClock} /> 12-3pm </Card.Text>
                  <Card.Text className="eventCardDetails"><FontAwesomeIcon icon={faMapMarkerAlt} /> Building 1, Concourse </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

          <Col lg={{ span: 4, offset: 0 }} md={{ span: 12, offset: 0 }}>
              <Card style={{ width: "" }} className="eventCard">
                <Card.Img variant="top" src={eventImage}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="eventCardDescription"> Did someone say food? Count us in! We are excited to announce the 
                  ultimate collab that you’ve been waiting for: ACSS X FOOD SOC. 
                  Come visit us for pork buns, dim sims and more! Vegetarian options are also available  </Card.Text>
                  <Card.Text className="eventCardDetails"><FontAwesomeIcon icon={faCalendarAlt} /> 5th May 2021 </Card.Text>
                  <Card.Text className="eventCardDetails"><FontAwesomeIcon icon={faClock} /> 12-3pm </Card.Text>
                  <Card.Text className="eventCardDetails"><FontAwesomeIcon icon={faMapMarkerAlt} /> Building 1, Concourse </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={{ span: 4, offset: 0 }} md={{ span: 12, offset: 0 }}>
              <Card style={{ width: "" }} className="eventCard">
                <Card.Img variant="top" src={eventImage}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="eventCardDescription"> Did someone say food? Count us in! We are excited to announce the 
                  ultimate collab that you’ve been waiting for: ACSS X FOOD SOC. 
                  Come visit us for pork buns, dim sims and more! Vegetarian options are also available  </Card.Text>
                  <Card.Text className="eventCardDetails"><FontAwesomeIcon icon={faCalendarAlt} /> 5th May 2021 </Card.Text>
                  <Card.Text className="eventCardDetails"><FontAwesomeIcon icon={faClock} /> 12-3pm </Card.Text>
                  <Card.Text className="eventCardDetails"><FontAwesomeIcon icon={faMapMarkerAlt} /> Building 1, Concourse </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#dd3438"
          fill-opacity="1"
          d="M0,128L40,122.7C80,117,160,107,240,122.7C320,139,400,181,480,192C560,203,640,181,720,170.7C800,160,880,160,960,165.3C1040,171,1120,181,1200,197.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Events;
