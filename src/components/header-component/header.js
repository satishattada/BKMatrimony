import React, { Component } from 'react';
import bk from '../../assets/bk-logo.png';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-container">
                <img className="bk-logo" src={bk} alt=" " />
    <nav className='header-navbar'>
<a href='#'>Home</a>
<a href='#'>Search</a>
<a href='#'>Discover Matches</a>
<div className='dropdown'>
    
<ul className='dropdown-content'>   
<li><a href='#'>Inbox</a></li>
<li><a href='#'>Interest received</a></li>
<li><a href='#'>Interest sent</a></li>
<li><a href='#'>Viewed</a></li>
<li><a href='#'>connections</a></li>
<li><a href='#'>Blocked</a></li>
<li><a href='#'>Shortlisted</a></li>
</ul>
</div>
<a href='home'>Buy Plan</a>



    </nav>

            </div>
        );
    }
}

export default Header;