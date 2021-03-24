import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Nav, Image, Navbar, Button } from "react-bootstrap";
import logo from './img/logo.png';
import logotext from './img/logotext.png';
import { Link } from "react-router-dom";

function Navigation() {
    return (

        <div class="nav">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="navigation">
                <Navbar.Brand href="#home" ><Image className="logo" src={logotext} fluid /> </Navbar.Brand>
                <Navbar.Brand href="#home" className="brandName">  </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link href="/home" ><Button className="hvr-underline-from-center navbarButton" variant="Light"> <Link to="/home"> Home </Link></Button> </Nav.Link>
                        <Nav.Link href="/about"><Button className="hvr-underline-from-center navbarButton" variant="Light" > <Link to="/about"> About </Link> </Button></Nav.Link>
                        <Nav.Link href="/team" ><Button className="hvr-underline-from-center navbarButton" variant="Light"> <Link to="/team"> Team </Link> </Button></Nav.Link>
                        <Nav.Link href="/events"><Button className="hvr-underline-from-center navbarButton" variant="Light" > <Link to="/events"> Events  </Link> </Button></Nav.Link>
                        <Nav.Link href="/gallery"><Button className="hvr-underline-from-center navbarButton" variant="Light"> <Link to="/gallery"> Gallery  </Link> </Button></Nav.Link>
                        <Nav.Link href="/join"><Button className="navbarButtonJoin" variant="danger"> <Link to="/join"> Join Us </Link> </Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
