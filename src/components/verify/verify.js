import React, { Component } from 'react';
import "./style.css";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

class Verify extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <div className='verify-container'>
                    <h5 className='verify-heading'>Connect your social Media to increase your Trust Score</h5>
                </div>
                <p>Increase authenticity of your profile by linking with your Social Media accounts. This will give more credibility to your profile.</p>
                <div className='verify'>
                    <div className='row'>
                        <div className='col-md-5'>
                            <div className='facebook-link'>
                                <div>Facebook Verification</div>
                                
                                <p className='para'>Your Trust Score will increase by 10 points on successful Facebook verification.</p>
                              
                                <button className='facebookbtn'>Verify Facebook</button>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='Linkedin-link'>
                                <div  > Linkedin Verification</div>
                                <p className='para'>Your Trust Score will increase by 10 points on successful LinkedIn verification.
                                </p>
                                <button className='facebookbtn'>Verify Linkedin</button>
                            
                               
                            
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
const mapStateToProps = (state) => {
    return {
        userData: state.user.userData
    }
}
export default connect(mapStateToProps)(Verify);

