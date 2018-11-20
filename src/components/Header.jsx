import React,{ Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavItem, Image, MenuItem, NavDropdown} from 'react-bootstrap';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';



class Header extends Component {
  render() {
    return (
      <div>
        <div className='container header-main-div' >
          <div className='blur-header'></div>
          <div className='header-logo-div'>
            <div>
              <a href="https://www.instagram.com/_puma_diskovic_" style={{visibility:'hidden'}}>
                <FaInstagram className="header-icon"/>
              </a>
            </div>
            <div>
              <Image className='logopic' src="/images/puma disc blaze-836gzy.png" responsive/>
            </div>
            <div>
              {/* <Amazon/> */}
              <a href="https://www.facebook.com/petar.lazarevic.1048">
                <FaFacebookSquare className="header-icon"/>
              </a>
              <a href="https://www.instagram.com/_puma_diskovic_">
                <FaInstagram className="header-icon"/>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div >
          <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              Puma Disk Servis
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">
                Home
              </NavItem>
              <NavItem eventKey={2} href="/galerija">
                Galerija
              </NavItem>
              <NavDropdown eventKey={3} title="Prodaja" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} disabled>Novo</MenuItem>
                <MenuItem eventKey={3.2}>Polovno</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="/cenovnik">
                Cenovnik
              </NavItem>
              <NavItem eventKey={2} href="/kontakt">
                Kontakt
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;