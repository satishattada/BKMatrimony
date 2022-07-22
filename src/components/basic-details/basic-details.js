import React, { Component } from 'react';
import "./style.css";
import { Button } from 'react-bootstrap';
import BasicPopup from '../basic-popup/basic-popup';
import { connect } from 'react-redux';
class BasicDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBasicModal: false,

        }
    }
    closeModal = () => {
        this.setState({

            showBasicModal: false,

        });
    }
    openBasicModal = () => {
        this.setState({
            basicInfoTitle: 'Update Basic Information',
            showBasicModal: true,

        })
    }
    setBasicInfo = (userData) => {
        console.log(userData)
    }

    render() {
        const { userData } = this.props
        const { showBasicModal, basicInfoTitle } = this.state;
        return (
            <div>
                <BasicPopup basicInfo={userData}
                    title={basicInfoTitle} show={showBasicModal} handleClose={this.closeModal}
                    setBasicInfo={this.setBasicInfo}
                />
                <div className='basic-container'>
                    <div className='basic-info'>

                        <div>

                            <div className='row'>

                                <div className='col-md-12'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <h5 className='basic-details'>Basic Details</h5></div>
                                        <div className='col-md-1'>
                                            <Button className='edit-button' onClick={() => this.openBasicModal()}>Edit</Button>
                                        </div>
                                    </div>
                                    <div className='basic'>
                                        <div className='row'>
                                            <div className='col-md-6'>About Yourself</div>
                                            <textarea className='col-md-6'>{userData.aboutYourself}
                                                {/* <div className='col-md-6'>{userData.aboutYourself}</div> */}
                                            </textarea>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Height</div>
                                            <div className='col-md-6'>{userData.height}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Marital Status</div>
                                            <div className='col-md-6'>{userData.maritalStatus}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Mother Tongue</div>
                                            <div className='col-md-6'>{userData.motherTongue}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Religion</div>
                                            <div className='col-md-6'>{userData.religion}</div>
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
                                            <div className='col-md-6'>Special Cases</div>
                                            <div className='col-md-6'>{userData.specialCases}</div>
                                        </div>
                                        <h5>Location</h5>
                                        <div className='row'>
                                            <div className='col-md-6'>Country</div>
                                            <div className='col-md-6'>{userData.country}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>State</div>
                                            <div className='col-md-6'>{userData.state}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>City</div>
                                            <div className='col-md-6'>{userData.city}</div>
                                        </div>
                                        <h5>Your Horoscope detail</h5>
                                        <div className='row'>
                                            <div className='col-md-6'>Gotra</div>
                                            <div className='col-md-6'>{userData.gothram}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Time of Birth</div>
                                            <div className='col-md-6'>{userData.birth}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Place of Birth</div>
                                            <div className='col-md-6'>{userData.placeOfBirth}</div>
                                        </div>
                                        <h5>Likes and Preferences</h5>
                                        <div className='row'>
                                            <div className='col-md-6'>I am a smoker</div>
                                            <div className='col-md-6'>{userData.smoker}</div>
                                        </div><div className='row'>
                                            <div className='col-md-6'>I drink alcohol</div>
                                            <div className='col-md-6'>{userData.drink}</div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>Diet</div>
                                            <div className='col-md-6'>{userData.diet}</div>
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
export default connect(mapStateToProps)(BasicDetails);

