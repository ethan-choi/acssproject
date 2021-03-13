import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/animate.css/animate.css'
import { Image, Tab, Tabs, Row, Col, Container, Card } from "react-bootstrap";
import Navigation from "./Navbar.js";
import Footer from "./footer.js"



function Events() {
    return (
        <div className="home">
            {/* Navigation bar */}
            <Navigation> </Navigation>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dd3438" fill-opacity="1" d="M0,128L40,122.7C80,117,160,107,240,122.7C320,139,400,181,480,192C560,203,640,181,720,170.7C800,160,880,160,960,165.3C1040,171,1120,181,1200,197.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
}

export default Events;
