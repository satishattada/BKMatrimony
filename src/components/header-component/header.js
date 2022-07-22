// import React, { Component } from 'react';
// import bk from '../../assets/bk-logo.png';
// import './header.css';
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

// class Header extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div className="header-container">
//                 <img className="bk-logo" src={bk} alt=" " />
//                 <nav className='header-navbar'>
//                     <a href='#'>Home</a>
//                     <a href='#'>Search</a>
//                     <a href='#'>Discover Matches</a>
//                     <a href='input'>Input</a>
//                     <select>
//                         <option>Blocked</option>
//                         <option>Interest received</option>
//                         <option>Interest sent</option>
//                         <option>Viewed</option>
//                         <option>connections</option>
//                         <option>Blocked</option>
//                         <option>Shortlisted</option>
//                     </select>
//                     <a href='home'>Buy Plan</a>

//                 </nav>
//             </div>
//         );
//     }
// }

// export default Header;
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bk from '../../assets/bk-logo-flat.png';
import './header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
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

            <Link className='bell-button' to="/profile">
            <FontAwesomeIcon className='user-logo' icon={faUserCircle} />
            </Link>
             {/* <button className='bell-button' >
            <FontAwesomeIcon className='user-logo' icon={faUserCircle} />
          </button> */}
        </Nav>
      </div>

    );
  }
}
export default Header;