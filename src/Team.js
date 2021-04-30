import './Team.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Card } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import image from './img/avatar.png';
function Team() {
  return (
    <div className="team">

      <Helmet>
        <title> Team </title>
      </Helmet>
      {/* Navigation */}
      <Navigation> </Navigation>

      {/* Header */}
      <div class="teamHeader">
        <Container fluid={true}>
          <Row>
            <Col lg={{ span: 12 }}>
              <h1 class="animate__animated animate__fadeInDown"> The ACSS Team</h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Team  */}
      <div class="team-container">
        <Container fluid={true}>
          <Row className="team-row" lg="auto">
            <Col lg={{ span: 2, offset: 2 }} md={{ span: 12 }} sm={{ span: 12, offset: 0 }} className="teamCol">
              <Card style={{ width: '' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Steven Lee </h2></Card.Title>
                  <Card.Text>
                    <h3> President </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Rachel Xu </h2> </Card.Title>
                  <Card.Text>
                    <h3> Vice President </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title> <h2> Lewis Smith </h2> </Card.Title>
                  <Card.Text>
                    <h3> Secretary </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2, offset: 0 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Steven Pang </h2> </Card.Title>
                  <Card.Text>
                    <h3> Treasurer </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="team-row" lg="auto" >
            <Col lg={{ span: 2, offset: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Steven Pang </h2> </Card.Title>
                  <Card.Text>
                    <h3> Treasurer </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Tayla Cheng </h2>
                  </Card.Title>
                  <Card.Text>
                    <h3> Marketing Director </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Jessie Rentong </h2> </Card.Title>
                  <Card.Text>
                    <h3> Events Director </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2, offset: 0 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Annie Qi </h2>  </Card.Title>
                  <Card.Text>
                    <h3> Design Director </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="team-row" lg="auto">
            <Col lg={{ span: 2, offset: 4 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Oliver Wen </h2> </Card.Title>
                  <Card.Text>
                    <h3> Language Director </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={{ span: 2 }} sm={{ span: 12, offset: 0 }}>
              <Card style={{ width: '' }} className="teamCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title><h2> Ethan Choi </h2> </Card.Title>
                  <Card.Text>
                    <h3> Technology Director </h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>


      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Team;
