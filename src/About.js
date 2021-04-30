import './About.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Row, Col, Container } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import icon1 from './img/makefriends.png';
import icon2 from './img/muchmore.png';
import icon3 from './img/cuisine.png';
import icon4 from './img/funnights.png';
import oday7 from "./img/oday/oday4.JPG"
import oday1 from "./img/oday/oday1.JPG";
import auflag from "./img/auflag.png";
import chflag from "./img/chflag.png";

import makefriendsimage from "./img/makefriendsimage.jpg";
import cuisineimage from "./img/cuisineimage.JPG";
import funnightsimage from "./img/funnightsimage.JPG";
import mandarinimage from "./img/mandarinimage.jpg";

function About() {
  return (
    <div className="about">
      <Helmet>
        <title> About Us </title>
      </Helmet>

    
      {/* Navigation bar */}
      <Navigation> </Navigation>

      {/* Header */}
      <div class="teamHeader">
        <Container fluid={true}>
          <Row>
            <Col lg={{ span: 12 }}>
              <h1 class="animate__animated animate__fadeInDown"> About the ACSS </h1>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Who */}
      <div>
        <h1> What is ACSS? </h1>
        <Container fluid>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="introContainer">
              <p>  Australian Chinese Student Society (ACSS) believe that an understanding of another persons culture is the key to their heart. At ACSS, our mission is to encourage the interaction and unity between international and domestic Chinese Students through the exploration of Chinese culture.
From students that have tasted the exquisite Chinese cuisine, to students that want to dive into the complex yet popular Chinese language, or for students that want to gain an awareness of the music, films and general traditions across China - we see the keen interest across our community as an opportunity to foster cultural competence, appreciation and most importantly, form cross-cultural relationships amongst an Australian Chinese community. </p>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 4, offset: 2 }} className="introContainer">
              <Image className="" src={auflag} fluid />
            </Col>
            <Col lg={{ span: 4, offset: 0 }} className="introContainer">
              <Image className="" src={chflag} fluid />
            </Col>
          </Row>
        </Container>
      </div>


      {/* Benefits */}
      <div class="benefitsContainer">
        <Container fluid={true}>
          <div class="whiteBenefits">
            <Row className="benefitsContainer-row">
              <Col lg={{ span: 4, offset: 2 }}>
                <div class="benefitsText">
                  <Image className="benefitsIcon" src={icon1} fluid />
                  <h2> Make Friends  </h2>
                  <p> From local students to international students, we'll help you find opportunities to connect with awesome people that also love chinese culture.</p>
                </div>
              </Col>
              <Col lg={{ span: 4 }}>
                <div class="">
                  <Image className="benefitsImage" src={makefriendsimage} fluid />
                </div>
              </Col>
            </Row>
          </div>


          <Row className="benefitsContainer-row">
            <Col lg={{ span: 4, offset: 2, order: 1 }} xs={{ span: 12, order: 12 }}>
              <div class="">
                <Image className="benefitsImage" src={mandarinimage} fluid />
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 0, order: 12 }} xs={{ span: 12, order: 1 }}>
              <div class="benefitsText">
                <Image className="benefitsIcon" src={icon2} fluid />
                <h2> Learn Mandarin </h2>
                <p> Want to learn mandarin? We'll be hosting language workshops throughout the year! </p>
              </div>
            </Col>
          </Row>

          <div class="whiteBenefits">
            <Row className="benefitsContainer-row">
              <Col lg={{ span: 4, offset: 2 }}>
                <div class="benefitsText">
                  <Image className="benefitsIcon" src={icon3} fluid />
                  <h2> Chinese Cuisine </h2>
                  <p> Love food? We'll take you to some of the best places to eat and drink! </p>
                </div>
              </Col>
              <Col lg={{ span: 4 }}>
                <div class="">
                  <Image className="benefitsImage" src={cuisineimage} fluid />
                </div>
              </Col>
            </Row>

          </div>
          <Row className="benefitsContainer-row">
            <Col lg={{ span: 4, offset: 2, order: 1 }} xs={{ span: 12, order: 12 }}>
              <div class="">
                <Image className="benefitsImage" src={funnightsimage} fluid />
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 0, order: 12 }} xs={{ span: 12, order: 1 }}>
              <div class="benefitsText">
                <Image className="benefitsIcon" src={icon4} fluid />
                <h2> Fun nights  </h2>
                <p>  From games, watching Chinese movies at the cinemas or heading dwon the nearest karaoke place, we've got plenty of activities you'll enjoy</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      {/* Ready to Join */}
      <div class="readyContainer">
        <Row>
          <Col>
            <h1 class="readyText">Ready to join?</h1>
          </Col>
        </Row>
        <Container fluid={true}>
          <Row>
            <Col lg={{ span: 2, offset: 5 }}>
              <a href="/join"> <button class="hvr-grow"> Join Now </button> </a>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer></Footer>


    </div >
  );
}

export default About;
