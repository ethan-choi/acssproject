import './announcement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Card } from "react-bootstrap";


function MerchAnnouncement() {
  return (
    <div className="announcement">
      <Container fluid={true}>
        <Row>
          <Col lg={12}>
            <p class="date"> Posted on 1 Mar, 2021 </p>
            <p> dadsadsadsadasdasda </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </Col>
        </Row>
      </Container>    </div >
  );
}

export default MerchAnnouncement;
