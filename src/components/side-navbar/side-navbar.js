import React, { Component } from 'react';
import "./style.css";
import { connect } from 'react-redux';
import Nav from 'react-bootstrap/Nav';

class SideNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (<>
            <div className='row'>
                <div className='col-md-12'>
                    <div className="trust-score">

                        <div className="trust-meter-dash" >
                            <span className="dash-trust-meter" >
                                <span className="pointer-trust-meter"></span>
                                <h5 className="trust-score-text" >Trust Score 20%</h5>
                                <p className="text-center" >
                                    <a href="#">Improve text score</a>
                                </p>

                            </span>
                        </div>
                    </div>
                    {/* <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/basic-details">Basic Details</Nav.Link>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav> */}

                </div>
                <div className='col-md-6'></div>

            </div>

        </>)
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.user.userData
    }
}
export default connect(mapStateToProps)(SideNavBar);

