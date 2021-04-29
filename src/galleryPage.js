import './galleryPage.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.css'
import { Row, Col, Container, Card,   ListGroup, ListGroupItem, } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import { Link } from "react-router-dom";
import image from "./img/welcome/welcome1.JPG";
import image2 from "./img/bbq/bbq1.JPG";
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
                <Col lg={{ span: 2, offset: 3 }} md={{ span: 12, offset: 0 }}>
              <Card style={{ width: "35vh" }} className="eventCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Event Name</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          <Col lg={{ span: 2, offset: 5 }} md={{ span: 12, offset: 0 }}>
              <Card style={{ width: "40vh" }} className="eventCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Event Name</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2, offset: 7 }} md={{ span: 12, offset: 0 }}>
              <Card style={{ width: "40vh" }} className="eventCard">
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
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
