import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAward, faBook, faLocationArrow,  faPrayingHands,  } from '@fortawesome/free-solid-svg-icons';
import './family-details.css';
import { connect } from 'react-redux';

class FamilyDetails extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        const{userData}=this.props
        return (<>
        
        <div className='contact-container'>
                    <FontAwesomeIcon className='iconcard' icon={faAddressCard} />
                    <span className='personal-heading'>Contact information</span>
                    <div className='contact-information'>
                        <div className='row'>
                            <div className='col-md-6'>Email</div>
                            <div className='col-md-6'>{userData.email}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Phone</div>
                            <div className='col-md-6'>{userData.phoneNumber}</div>
                        </div>
                    </div>
                </div>
        
        </>
          );
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.user.userData
    }
}
 export default connect(mapStateToProps)(FamilyDetails);
