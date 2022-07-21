import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faAward, faBook, faLocationArrow, faPrayingHands, } from '@fortawesome/free-solid-svg-icons';
import './partnerpreferences.css';
import { Button } from 'react-bootstrap';
import DesiredPartnerPopup from "../desired-partner-popup/desired-partner-popup";
import QualificationPopup from '../partner-qualification-popup/partner-qualification-popup ';
import ResidencePopup from '../residence-popup/residence-popup';
import BackgroundPopup from '../partner-background-popup copy/partner-background-popup ';
import LifeStylePopup from '../partner-lifeStyle-popup/partner-lifeStyle-popup';



class PartnerPreferences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: ''
        }
    }
    closeModal = () => {
        this.setState({
            showPartnerModal: false,
            showQualificationModal: false,
            showResidenceModal:false,
            showBackgroundModal:false,
            showLifeStyleModal:false
        })
    }
    openPartnerModal = () => {
        this.setState({
            partnerInfoTitle: "Update Partner Information",
            showPartnerModal: true,
        })
    }
    openQualificationModal = () => {
        this.setState({
            qualicationInfoTitle: "Update Qualification Information",
            showQualificationModal: true,
        })
    }
    openResidenceModal = () => {
        this.setState({
            residenceInfoTitle: "Update Residence Information",
            showResidenceModal: true,
        })
    }
    openBackgroundModal = () => {
        this.setState({
            backgroundInfoTitle: "Update Background Information",
            showBackgroundModal: true,
        })
    }
    openLifeStyleModal = () => {
        this.setState({
            lifeStyleInfoTitle: "Update LifeStyle Information",
            showLifeStyleModal: true,
        })
    }
    setDesiredParnerInfo = (userData) => {
        console.log(userData);
    }
    setQualificationInfo = (userData) => {
        console.log(userData);
    }
    setResidenceInfo = (userData) => {
        console.log(userData);
    }
    setBackgroundInfo = (userData) => {
        console.log(userData);
    }
    setLifeStyleInfo = (userData) => {
        console.log(userData);
    }


    render() {
        const { userData } = this.props
        const { showPartnerModal, partnerInfoTitle, qualicationInfoTitle, showQualificationModal, showResidenceModal,showBackgroundModal,showLifeStyleModal,residenceInfoTitle,backgroundInfoTitle,lifeStyleInfoTitle} = this.state;
        return (
            <>
           
           
                <DesiredPartnerPopup desiredPartnerInfo={userData}
                    title={partnerInfoTitle} show={showPartnerModal} handleClose={this.closeModal}
                    setDesiredParnerInfo={this.setDesiredParnerInfo} />

                <QualificationPopup  qualificationInfo={userData}
                    title={qualicationInfoTitle} show={showQualificationModal} handleClose={this.closeModal}
                    setQualificationInfo={this.setQualificationInfo}/>

                <ResidencePopup  residenceInfo={userData}
                title={residenceInfoTitle} show={showResidenceModal} handleClose={this.closeModal}
                setResidenceInfo={this.setResidenceInfo} />
                
                <BackgroundPopup  backgroundInfo={userData}
                title={backgroundInfoTitle} show={showBackgroundModal} handleClose={this.closeModal}
                setBackgroundInfo={this.setBackgroundeInfo}/>

                <LifeStylePopup  lifeStyleInfo={userData}
                title={lifeStyleInfoTitle} show={showLifeStyleModal} handleClose={this.closeModal}
                setLifeStyleInfo={this.setLifeStyleInfo}/>

                <div className='partner-container'>
                    <FontAwesomeIcon className='iconcard' icon={faAddressCard} />
                    <span className='partner-heading'>Desired Partner</span>
                    <Button className='edit-button' onClick={() => { this.openPartnerModal() }}>Edit</Button>
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
                    <Button className='edit-button' onClick={() => { this.openQualificationModal() }} >Edit</Button>
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
                    <Button className='edit-button' onClick={() => { this.openResidenceModal() }} >Edit</Button>
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
                    <Button className='edit-button' onClick={() => { this.openBackgroundModal() }} >Edit</Button>
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
                    <Button className='edit-button' onClick={() => { this.openLifeStyleModal() }}>Edit</Button>
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
const mapStateToProps = (state) => {
    return { userData: state.user.userData }
}
export default connect(mapStateToProps)(PartnerPreferences);