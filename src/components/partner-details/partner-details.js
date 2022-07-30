import React, { Component } from 'react';
import "./style.css";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';


class PartnerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPartnerModal: false,

        }
    }

    openPartnerModal = () => {
        this.props.editPartnerDetail();
    }
    render() {
        const { userData } = this.props
        return (
            <div>
                
                <div className='partner-container'>
                    
                    <span className='partner-heading'>Desired Partner</span>
                    <Button className='edit-button' onClick={() => { this.openPartnerModal() }}>Edit</Button>
                    <div className='partner-information'>
                        <div className='row'>
                            <div className='col-md-6'>Age</div>
                            <div className='col-md-6'>{userData.age}</div>
                        </div>
                       
                        <div className='row'>
                            <div className='col-md-6'>Height</div>
                            <div className='col-md-6'>{userData.height}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Manglik</div>
                            <div className='col-md-6'>{userData.manglik}</div>
                        </div>
                       
                        
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
                            <div className='col-md-6'>Annual Income</div>
                            <div className='col-md-6'>{userData.annualIncome}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Gothram</div>
                            <div className='col-md-6'>{userData.gothram}</div>
                        </div>
                       <div className='row'>
                            <div className='col-md-6'>State Of Residence</div>
                            <div className='col-md-6'>{userData.stateOfResidence}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Diet</div>
                            <div className='col-md-6'>{userData.diet}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Educational Qualification</div>
                            <div className='col-md-6'>{userData.qualification}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Special Cases</div>
                            <div className='col-md-6'>{userData.specialCases}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Annual Income</div>
                            <div className='col-md-6'>{userData. annualIncome}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Country Of Residence</div>
                            <div className='col-md-6'>{userData.countryOfResidence}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>City Of Residence</div>
                            <div className='col-md-6'>{userData.cityOfResidence}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Marital Status</div>
                            <div className='col-md-6'>{userData.maritalStatus}</div>
                        </div>
                    </div>
                </div>

            </div>);
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.user.userData
    }
}
export default connect(mapStateToProps)(PartnerDetail);

