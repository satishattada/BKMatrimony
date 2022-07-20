import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAward, faBook, faLocationArrow, faPrayingHands, faUser, faUserFriends, } from '@fortawesome/free-solid-svg-icons';
import './family-details.css';
import { connect } from 'react-redux';

class FamilyDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { userData } = this.props
        return (<>

            <div className='family-container'>
                <FontAwesomeIcon className='iconcard' icon={faUserFriends} />
                <span className='family-heading'>Family information</span>
                <div className='family-information'>
                    <div className='row'>
                        <div className='col-md-6'>Father's occupation</div>
                        <div className='col-md-6'>{userData.fatherOccupation}</div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>Mother's occupation</div>
                        <div className='col-md-6'>{userData.motherOccupation}</div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>Married Sister(s)</div>
                        <div className='col-md-6'>{userData.marriedSister}</div>
                    </div> 
                    <div className='row'>
                        <div className='col-md-6'>Unmarried Sister(s)</div>
                        <div className='col-md-6'>{userData.unmarriedSisiter}</div>
                    </div> 
                    <div className='row'>
                        <div className='col-md-6'>Unmarried Brother</div>
                        <div className='col-md-6'>{userData.unBrother}</div>
                    </div> 
                    <div className='row'>
                        <div className='col-md-6'>Married Brother(s)</div>
                        <div className='col-md-6'>{userData.marriedBrother}</div>
                    </div>
                </div>
            </div>
            <div className='native-container'>
                <FontAwesomeIcon className='iconcard' icon={faUser} />
                <span className='family-heading'>Family Values and Native Information</span>
                <div className='native-information'>
                                        <div className='row'>
                        <div className='col-md-6'>Native Location</div>
                        <div className='col-md-6'>{userData.location}</div>
                    </div> 
                    <div className='row'>
                        <div className='col-md-6'>Family Value</div>
                        <div className='col-md-6'>{userData.familyValue}</div>
                    </div> 
                    <div className='row'>
                        <div className='col-md-6'>Family Status</div>
                        <div className='col-md-6'>{userData.familyStatus}</div>
                    </div> 
                    <div className='row'>
                        <div className='col-md-6'>Family Income</div>
                        <div className='col-md-6'>{userData.familyIncome}</div>
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
