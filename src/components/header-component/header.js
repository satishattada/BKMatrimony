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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bk from '../../assets/bk-logo.png';
import './header.css';
import bell from '../../assets/bell-2-64.jpg'


function Header() {
  return (
    
      <div>
          <Nav className="header-container" >
          <img className="bk-logo" src={bk} alt=" " />
          <div className='header-navbar'>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="Search">Search</Nav.Link>
            <Nav.Link href="discover">Discover Matches</Nav.Link>
            <NavDropdown  title="Input" id="basic-nav-dropdown">
              <NavDropdown.Item href="Interest received">Interest received</NavDropdown.Item>
              <NavDropdown.Item href="Interest sent">Interest sent</NavDropdown.Item>
              <NavDropdown.Item href="connections">connections</NavDropdown.Item>
              <NavDropdown.Item href="Blocked"> Blocked</NavDropdown.Item>
              <NavDropdown.Item href="Shortlisted"> Shortlisted</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="buy">Buy Plan</Nav.Link>
            </div>
            <img  className='bell-icon'  src={bell} alt='bell-icon'/>
            <span id='bellIcon'></span>
          </Nav>
          </div>

  );
}

export default Header;