import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAward, faBook, faLocationArrow,  faPrayingHands,  } from '@fortawesome/free-solid-svg-icons';
import './partnerpreferences.css';


class PartnerPreferences extends Component {
    constructor(props) {
        super(props);
         this.state={
             message:'hello'
        }
    }
    editHandler(){
        this.setState({message:'goodbye'})
        }
        
    render() { 
        const{userData}=this.props
        return (
            <>
 <div className='partner-container'>
                    <FontAwesomeIcon className='iconcard' icon={faAddressCard} />
                    <span className='partner-heading'>Desired Partner</span>
                    <div className='partner-information'>
                        <div className='row'>
                            <div className='col-md-6'>Age</div>
                            <div className='col-md-6'>{userData.age}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Marital Status</div>
                            <div className='col-md-6'>{userData.maritalStatus}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Height</div>
                            <div className='col-md-6'>{userData.height}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Manglik</div>
                            <div className='col-md-6'>{userData.mangalik}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Special Cases</div>
                            <div className='col-md-6'>{userData.specialCases}</div>
                        </div>
                    </div>
                </div>
                <div className='career-container'>
                    <FontAwesomeIcon className='iconcard' icon={faBook} />
                    <span className='partner-heading'> Qualification/Career</span>
                    <div className='career-information'>
                        <div className='row'>
                            <div className='col-md-6'>Annual Income</div>
                            <div className='col-md-6'>{userData.annualIncome}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Educational Qualification</div>
                            <div className='col-md-6'>{userData.qualification}</div>
                        </div>
                       
                    </div>
                </div>
                
                <div className='residence-container'>
                    <FontAwesomeIcon className='iconcard' icon={faLocationArrow} />
                    <span className='partner-heading'>Residence Status</span>
                    <div className='residence-information'>
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
                
                <div className='life-style-container'>
                    <FontAwesomeIcon className='iconcard' icon={faLocationArrow} />
                    <span className='partner-heading'>Lifestyle</span>
                    <div>{this.state.message}</div>
                    <button onClick={()=>this.editHandler()}>Edit</button>
                    <div className='life-style-information'>
                        <div className='row'>
                            <div className='col-md-6'>Smoke</div>
                            <div className='col-md-6'>{userData.smoke}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Drink</div>
                            <div className='col-md-6'>{userData.drink}</div>
                        </div>
                    </div>
                </div>

            </>
          );
    }
}
 const mapStateToProps=(state)=>{
    return{userData:state.user.userData}
 }
export default connect(mapStateToProps) (PartnerPreferences);