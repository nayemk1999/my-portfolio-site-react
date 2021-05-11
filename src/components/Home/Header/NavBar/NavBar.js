import React from "react";
import { Nav, Navbar } from "react-bootstrap";
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
      <Navbar className='navbar-menu container' sticky ='top' expand="lg sm">
        <Navbar.Brand className='m-auto text-center' >
          <Link to='/'><img className="img-fluid w-75 " src={Logo} alt="" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle className='ml-auto' style={{ border: '1px solid black' }} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='text-center ' id="basic-navbar-nav">
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
      
    </section>
  );
};

export default NavBar;
