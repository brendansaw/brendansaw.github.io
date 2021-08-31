import './CustomNavbar.scss';
import {Navbar, Nav, NavDropdown, Container, Anchor} from "react-bootstrap";
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
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}

                    </Nav>
                    <Nav className="ms-auto custom-navbar-nav-right">
                        <Nav.Link className="custom-navbar-image-nav-link"
                                  as={Anchor}
                                  target="_blank"
                                  href="https://github.com/brendansaw">
                            <img className="custom-navbar-image" src="/github-logo.png" alt="GitHub"/>
                        </Nav.Link>
                        <Nav.Link className="custom-navbar-image-nav-link"
                                  as={Anchor}
                                  target="_blank"
                                  href="https://www.linkedin.com/in/brendan-saw/">
                            <img className="custom-navbar-image" src="/linkedin-logo.png" alt="Linkedin"/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
