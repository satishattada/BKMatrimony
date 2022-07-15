import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAward, faBook, faLocationArrow,  faPrayingHands,  } from '@fortawesome/free-solid-svg-icons';
import './personaldetails.css';
import { connect } from 'react-redux';



class PersonalDetails extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     // userData:this.props.userData,
        //     userData: {}}
        }
    
    // componentDidMount(){
    //     this.setState({
    //         userData:this.props.userData
    //     })
    // }

    render() {
        // const {userData}=this.state
        const { userData } = this.props
        return (
            <>
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
                <div className='basic-container'>
                    <FontAwesomeIcon className='iconcard' icon={faBook} />
                    <span className='personal-heading'>Basic information</span>
                    <div className='basic-information'>
                        <div className='row'>
                            <div className='col-md-6'>Name</div>
                            <div className='col-md-6'>{userData.name}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Date Of Birth</div>
                            <div className='col-md-6'>{userData.birth}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Age</div>
                            <div className='col-md-6'>{userData.age}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>location</div>
                            <div className='col-md-6'>{userData.location}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Gender</div>
                            <div className='col-md-6'>{userData.gender}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Height</div>
                            <div className='col-md-6'>{userData.height}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Marital Status</div>
                            <div className='col-md-6'>{userData.maritalStatus}</div>
                        </div>
                    </div>
                </div>
                <div className='career-container'>
                    <FontAwesomeIcon className='iconcard' icon={faAward} />
                    <span className='personal-heading'>Qualification/Career information</span>
                    <div className='career-information'>
                        <div className='row'>
                            <div className='col-md-6'>Education</div>
                            <div className='col-md-6'>{userData.education}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>College/university</div>
                            <div className='col-md-6'>{userData.college}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Working </div>
                            <div className='col-md-6'>{userData.working}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Settle Down Abroad</div>
                            <div className='col-md-6'>{userData.settleDownAbroad}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Work After Marriage</div>
                            <div className='col-md-6'>{userData.workAfterMarriage}</div>
                        </div>
                    </div>
                </div>
                
                <div className='location-container'>
                    <FontAwesomeIcon className='iconcard' icon={faLocationArrow} />
                    <span className='personal-heading'>Current Location</span>
                    <div className='location-information'>
                        <div className='row'>
                            <div className='col-md-6'>Country</div>
                            <div className='col-md-6'>{userData.countryOfResidence}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>City/State</div>
                            <div className='col-md-6'>{userData.location}</div>
                        </div>
                    </div>
                </div>
                
                <div className='background-container'>
                    <FontAwesomeIcon className='iconcard' icon={faPrayingHands} />
                    <span className='personal-heading'>Social Background</span>
                    <div className='background-information'>
                        <div className='row'>
                            <div className='col-md-6'>Religion</div>
                            <div className='col-md-6'>{userData.religion}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>MotherTongue</div>
                            <div className='col-md-6'>{userData.motherTongue}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Caste</div>
                            <div className='col-md-6'>{userData.caste}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Manglik</div>
                            <div className='col-md-6'>{userData.manglik}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>gothram</div>
                            <div className='col-md-6'>{userData.gothram}</div>
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
export default connect(mapStateToProps)(PersonalDetails);
