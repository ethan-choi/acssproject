import './galleryPage.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.css'
import { Row, Col, Container, Card,   ListGroup, ListGroupItem, } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import { Link } from "react-router-dom";
import odaythumbnail from "./img/oday/oday1.JPG"
import lunarthumbnail from "./img/lunarMarkets/lunar1.jpg";
import welcomethumbnail from "./img/welcome/welcome1.JPG";
import bbqthumbnail from "./img/bbq/bbq1.JPG";

function galleryPage() {


    return (
        <div className="galleryPage">



            <Helmet>
                <title> Gallery </title>
            </Helmet>


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
                <Row>
                <Col lg={{ span: 4, offset: 0 }} md={{ span: 12, offset: 0 }}>
              <Card style={{ width: "" }} className="galleryCard">
                <Card.Img variant="top" src={odaythumbnail} />
                <Card.Body>
                  <Card.Title>O'Day 2021</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          <Col lg={{ span: 4, offset: 0 }} md={{ span: 12, offset: 0 }}>
              <Card style={{ width: "" }} className="galleryCard">
                <Card.Img variant="top" src={welcomethumbnail} />
                <Card.Body>
                  <Card.Title>Welcome Picnic</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 4, offset: 0 }} md={{ span: 12, offset: 0 }}>
              <Card style={{ width: "" }} className="galleryCard">
                <Card.Img variant="top" src={bbqthumbnail} />
                <Card.Body>
                  <Card.Title>Lunar Markets</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
          <Row>
          <Col lg={{ span: 4, offset: 0 }} md={{ span: 12, offset: 0 }}>
              <Card style={{ width: "" }} className="galleryCard">
                <Card.Img variant="top" src={bbqthumbnail} />
                <Card.Body>
                  <Card.Title>BBQ</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
                </Container>
            </div>

            {/* Footer */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dd3438" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,122.7C320,139,400,181,480,192C560,203,640,181,720,170.7C800,160,880,160,960,165.3C1040,171,1120,181,1200,197.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <Footer></Footer>
        </div >
    );
}

export default galleryPage;
