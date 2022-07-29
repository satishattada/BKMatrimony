import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAward, faBook, faLocationArrow, faPrayingHands, } from '@fortawesome/free-solid-svg-icons';
import './personaldetails.css';
import { connect } from 'react-redux';
import Popup from '../popup/popup';
import EditPopup from '../edit-popup/edit-popup';
import CareerPopup from '../qualification-popup/qualification-popup';

import { Button } from 'react-bootstrap';
import LocationPopup from '../location-popup/location-popup';
import BackgroundPopup from '../social-background-popup/social-background-popup';

class PersonalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditModal: false,
            editModalTitle: '',
            editModalValue: '',
            basicInfoTitle: '',
            careerInfoTitle: '',
            locationInfoTitle: '',
            backgroundInfoTitle: '',
            showBasicModal: false,
            showCareerModal: false,
            showLocationModal: false,
            showBackgroundModal: false,

        }
    }



    // componentDidMount(){
    //     this.setState({
    //         userData:this.props.userData
    //     })
    // }

    openEditModal = (type, value) => {
        this.setState({
            showEditModal: true,
            editModalValue: value
        });
        switch (type) {
            case 'email':
                this.setState({ editModalTitle: 'Update Email' });
                break;
            case 'phoneNumber':
                this.setState({ editModalTitle: 'Update Phone Number' });
                break;
        }
    }
    phoneHandler = () => {
        this.setState({ titleEditModal: true });

    }
    closeModal = () => {
        this.setState({
            showEditModal: false,
            showBasicModal: false,
            showCareerModal: false,
            showLocationModal: false,
            showBackgroundModal: false,

        });
    }

    openBasicModal = () => {
        this.setState({
            basicInfoTitle: 'Update Basic Information',
            showBasicModal: true,

        })
    }

    openCareerModal = () => {
        this.setState({
            careerInfoTitle: 'Update Qualification/career Information',
            showCareerModal: true
        })
    }
    openLocationModal = () => {
        this.setState({
            locationInfoTitle: 'Update current location Information',
            showLocationModal: true
        })
    }
    openBackgroundModal = () => {
        this.setState({
            backgroundInfoTitle: 'Update social background Information',
            showBackgroundModal: true
        })
    }


    setBasicInfo = (basicDetails) => {
        let {userData} = this.props;
        userData = {...userData, ...basicDetails};
        this.props.updateUserDetails(userData);
        this.closeModal();

    }
    setCareerInfo = (userData) => {
        console.log('{{{{{{{{{{{{{{{{{{{{{{{{userData}}}}}}}}}}}}}}}}}}}}}}}}');
        console.log(userData);
    }
    setLocationInfo = (userData) => {
        console.log('{{{{{{{{{{{{{{{{{{{{{{{{userData}}}}}}}}}}}}}}}}}}}}}}}}');
        console.log(userData);

    }

    setBackgroundInfo = (userData) => {
        console.log('{{{{{{{{{{{{{{{{{{{{{{{{userData}}}}}}}}}}}}}}}}}}}}}}}}');
        console.log(userData);

    }


    render() {
        // const {userData}=this.state
        const { userData } = this.props;
        const { showEditModal, editModalTitle, editModalValue, showBasicModal, basicInfoTitle, showCareerModal,
            careerInfoTitle, showLocationModal, showBackgroundModal, locationInfoTitle, backgroundInfoTitle } = this.state;
        return (
            <>
                <Popup inputValue={editModalValue}
                    title={editModalTitle} show={showEditModal} handleClose={this.closeModal} />

                <EditPopup basicInfo={userData}
                    title={basicInfoTitle} show={showBasicModal} handleClose={this.closeModal}
                    setBasicInfo={this.setBasicInfo} />

                <CareerPopup careerInfo={userData}
                    title={careerInfoTitle} show={showCareerModal} handleClose={this.closeModal}
                    setCareerInfo={this.setCareerInfo} />

                <LocationPopup locationInfo={userData}
                    title={locationInfoTitle} show={showLocationModal} handleClose={this.closeModal}
                    setLocationInfo={this.setLocationInfo}
                />

                <BackgroundPopup backgroundInfo={userData}
                    title={backgroundInfoTitle} show={showBackgroundModal} handleClose={this.closeModal}
                    setBackgroundInfo={this.setBackgroundInfo}

                />
                <div className='contact-container'>
                    <FontAwesomeIcon className='iconcard' icon={faAddressCard} />
                    <span className='personal-heading'>Contact information</span>
                    {/* <Button className='edit-button' onClick={() => this.editHandler()}>Edit</Button> */}
                    <div className='contact-information'>
                        <div className='row'>
                            <div className='col-md-6'>Email</div>
                            <div className='col-md-3'>{userData.email}</div>
                            <div className='col-md-3'>
                                <Button className='edit-button' onClick={() => this.openEditModal('email', userData.email)}>Edit</Button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Phone</div>
                            <div className='col-md-3'>{userData.phoneNumber}</div>
                            <div className='col-md-3'>
                                <Button className='edit-button' onClick={() => this.openEditModal('phoneNumber', userData.phoneNumber)}>Edit</Button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='basic-container'>
                    <FontAwesomeIcon className='iconcard' icon={faBook} />
                    <span className='personal-heading'>Basic information</span>

                    <Button className='edit-button' onClick={() => this.openBasicModal()}>Edit</Button>

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
                    <Button className='edit-button' onClick={() => this.openCareerModal()}>Edit</Button>

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
                    <Button className='edit-button' onClick={() => this.openLocationModal()}>Edit</Button>

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
                    <Button className='edit-button' onClick={() => this.openBackgroundModal()}>Edit</Button>

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

export default (PersonalDetails);
