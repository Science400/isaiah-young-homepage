import * as React from 'react'
import { Link } from 'gatsby'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'
import { Button } from 'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <title>{pageTitle}</title>
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand as="span">Isaiah Young</Navbar.Brand>
          </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
              <Nav.Link>
                    <Link to="/about">About</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/resume">Resume</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/projects">Projects</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/digitalGarden">Digital Garden</Link>
                  </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className='align-items-stretch'>
        <Container>
          {children}
        </Container>
      </main>
      <Container fluid className="footer text-muted bg-dark py-3 mt-auto justify-content-between d-flex flex-row">
        <span className='my-auto'>&copy; {new Date().getFullYear()}, Isaiah Young</span>
        <span className='my-auto'><a href='http://www.appleseeds.org/DareRoos.htm' className='text-muted'>Dare Mighty Things</a></span>
        <span class="my-auto">
          <div class="btn-group" role="group" aria-label="social buttons">
            <a href="https://www.linkedin.com/in/isaiah-young/" class="btn btn-outline-secondary"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a href="https://github.com/Science400" class="btn btn-outline-secondary"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
          </div>
      </span>
      </Container>
    </div>
  )
}

export default Layout