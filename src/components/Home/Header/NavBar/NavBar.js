import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../../image/portfolio-logo.png";
import ParticlesContainer from "../../../../ParticlesContainer/ParticlesContainer";

const NavBar = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <ParticlesContainer />
      <div className='container'>
        <Navbar className='navbar-menu' expand="lg">
          <Navbar.Brand href="#home">
            <img className="img-fluid w-75" src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link>
                <Link className='header-menu p-1' to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='header-menu p-1' to="/about-me">About Me</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='header-menu p-1' to="/resume">Resume</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='header-menu p-1' to="/projects">Projects</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='header-menu p-1' to="/blogs">Blogs</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='header-menu p-1' to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </section>
  );
};

export default NavBar;
