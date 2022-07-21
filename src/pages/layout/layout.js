import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import './styles.css'; 
import { Header} from '../../components';

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='layout-container'>
        <Header/>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/increase">Blogs</Link>
          </li>

        </ul>
      </nav> 
    
      <div className="page-container">
        <Outlet />
      </div>
    </div>
    );
  }
}

export default Layout;
