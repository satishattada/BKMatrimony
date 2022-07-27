import React, { Component } from 'react';
import "./style.css";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import EducationPopup from '../education-popup/education-popup';


class EducationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEducationModal: false,

        }
    }

    openEducationModal = () => {
        this.props.editEducationDetails();
    }

    render() {
        const { userData } = this.props
        return (
            <div>
               
                <div className='education-container'>
                    <div className='education-info'>
                        <div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h5 className='education-details'>Educational Details</h5></div>
                                        <div className='col-md-1'>
                                            <Button className='edit-button' onClick={() => this.openEducationModal()}>Edit</Button>
                                        </div>
                                    </div>
                                    <div className='education'>
                                        <div className='row'>
                                            <div className='col-md-6'>Educational Qualification </div>
                                            <div className='col-md-6'>{userData.qualification}</div>

                                        
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>College you attended</div>
                                            <div className='col-md-6'>{userData.collegeYouAttended}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Working With</div>
                                            <div className='col-md-6'>{userData.workingWith}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Working As</div>
                                            <div className='col-md-6'>{userData.workingAs}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Annual Income</div>
                                            <div className='col-md-6'>{userData.annualIncome}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Work After Marriage</div>
                                            <div className='col-md-6'>{userData.workAfterMarriage}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Settle Down Abroad</div>
                                            <div className='col-md-6'>{userData.settleDownAbroad}</div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
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
export default connect(mapStateToProps)(EducationDetails);

