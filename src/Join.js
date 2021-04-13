import './Join.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Badge, Row, Col, Container, Card } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"
import uts from './img/uts.png';
import globe from './img/globe.png';

function Join() {
    return (

        <div className="join">
            <Helmet>
                <title> Join </title>
            </Helmet>


            {/* Navigation Bar */}
            <Navigation> </Navigation>


            {/* Header */}
            <div class="headerContainer">
                <Container fluid={true} className="teamHeader">
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <h1 class="animate__animated animate__fadeInDown"> Join the ACSS</h1>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* Join Steps */}
            <div class="joinContainer">
                <h3> Join our family in four easy steps</h3>
                <Container fluid={true}>
                    <Row>
                        <Col lg={{ span: 2, offset: 2 }}>
                            <Card body className="joinCard"><h2>
                                <Badge pill variant="primary"> 1 </Badge>{' '}
                            Let's Start </h2>
                                <p> Click the "Let's Start" button below. It will take you to activateuts where you become an ACSS member online. </p></Card>
                        </Col>

                        <Col lg={{ span: 2, offset: 0 }}>
                            <Card body className="joinCard"><h2>
                                <Badge pill variant="danger"> 2 </Badge>{' '}
                            Click "Join" </h2>
                                <p>  It will ask you to register or login first. Please do before proceeding. </p></Card>
                        </Col>

                        <Col lg={{ span: 2, offset: 0 }}>
                            <Card body className="joinCard"><h2>
                                <Badge pill variant="warning"> 3 </Badge>{' '}
                            Click "Buy" </h2>
                                <p>  next to the suitable membership. Prices: $5 for UTS Students/Staff, $25 for Non-UTS  </p></Card>
                        </Col>

                        <Col lg={{ span: 2, offset: 0 }}>
                            <Card body className="joinCard"><h2>
                                <Badge pill variant="success"> 4 </Badge>{' '}
                            Payment </h2>
                                <p> Paypal or Pay with card </p></Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 2, offset: 5 }}>
                            <a href="https://activateuts.com.au/clubs/australian-chinese-student-society" target="_blank" > <button class="hvr-grow animate__animated animate__bounce animate__infinite">  Get started </button> </a>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* Pricing */}
            <div class="priceContainer">

                <Container fluid={true}>

                    <Row>
                        <Col>
                            <h3 class="subtitle"> Full access for one low yearly cost </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{ span: 2, offset: 4 }} >
                            <Card body className="priceCard">
                                <Image src={uts} fluid />
                                <h2> $5 </h2>
                                <p> UTS Students and Staff </p>
                            </Card>
                        </Col>
                        <Col lg={{ span: 2 }}>
                            <Card body className="priceCard">
                                <Image src={globe} fluid />
                                <h2> $25 </h2>
                                <p> Non-UTS </p>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Footer */}

            <Footer></Footer>
        </div >
    );
}

export default Join;
