import './CustomNavbar.scss';
import {Navbar, Nav, Container, Anchor} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

function CustomNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand as={Link} to="/">Brendan's Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
                    </Nav>

                    <Nav className="ms-auto custom-navbar-nav-right">
                        <Nav.Link className="custom-navbar-image-nav-link"
                                  as={Anchor}
                                  target="_blank"
                                  href="mailto:brendansaw@gmail.com">
                            <img className="custom-navbar-image" src="/email-icon.png" alt="Email"/>
                            <span className="custom-navbar-image-text"> Email</span>
                        </Nav.Link>
                        <Nav.Link className="custom-navbar-image-nav-link"
                                  as={Anchor}
                                  target="_blank"
                                  href="https://www.youtube.com/channel/UCDEfH4JPTC2ExEtDE_1ii_w">
                            <img className="custom-navbar-image" src="/youtube-icon.png" alt="YouTube"/>
                            <span className="custom-navbar-image-text"> YouTube</span>
                        </Nav.Link>
                        <Nav.Link className="custom-navbar-image-nav-link"
                                  as={Anchor}
                                  target="_blank"
                                  href="https://github.com/brendansaw">
                            <img className="custom-navbar-image" src="/github-icon.png" alt="GitHub"/>
                            <span className="custom-navbar-image-text"> GitHub</span>
                        </Nav.Link>
                        <Nav.Link className="custom-navbar-image-nav-link"
                                  as={Anchor}
                                  target="_blank"
                                  href="https://www.linkedin.com/in/brendan-saw/">
                            <img className="custom-navbar-image" src="/linkedin-icon.png" alt="LinkedIn"/>
                            <span className="custom-navbar-image-text"> LinkedIn</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
