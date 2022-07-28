
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bk from '../../assets/bk-logo-flat.png';
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { logout, profile } = this.props;
    return (
      <div className="header-container" >
        <Nav>
          <Link to="/">
            <img className="bk-logo" src={bk} alt=" " />
          </Link>
          <div className='header-navbar'>
            <Link className='nav-link' to="/">{'Home'}</Link>
            <Link className='nav-link' to="/matches">{'Discover Matches'}</Link>
            <NavDropdown title="Input" id="basic-nav-dropdown">
              <NavDropdown.Item href="/interest-received">Interest received</NavDropdown.Item>
              <NavDropdown.Item href="/interest-sent">Interest sent</NavDropdown.Item>
              <NavDropdown.Item href="/connection">connections</NavDropdown.Item>
              <NavDropdown.Item href="/blocked"> Blocked</NavDropdown.Item>
              <NavDropdown.Item href="/shortlisted"> Shortlisted</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/buy">Buy Plan</Nav.Link>  </div>


          <Link className='bell-button' to="">
            <FontAwesomeIcon className='bell-icon' icon={faBell} />
          </Link>

          <Dropdown className='user'>
      <Dropdown.Toggle variant="" id="dropdown-basic">
      <FontAwesomeIcon className='user-logo' icon={faUserCircle} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#" onClick={profile}>My profile</Dropdown.Item>
        <Dropdown.Item href="#" onClick={logout}>Log out</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>

          
        </Nav>
      </div>

    );
  }
}
export default Header;