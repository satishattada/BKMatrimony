import React, { Component } from 'react';
import "./profile.css";
import female from '../../../assets/female_large.jpg';
import PersonalDetails from '../../../components/personal-details/personal-details';
import FamilyDetails from '../../../components/family-details/family-details';
import PartnerPreferences from '../../../components/partner-preferences/partner-preferences';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../../redux/actions';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import AddMediaPopup from '../../../components/add-media-popup/add-media-popup';
import MediaDetails from '../../../components/media-details/media-details';
import FamilyInfoDetails from '../../../components/family-detail-info/family-info-details';
import FamilyInfoDetailPopup from '../../../components/family-info-detail-popup/family-info-detail-popup';
import PartnerDetail from '../../../components/partner-details/partner-details';
import PartnerDetailPopup from '../../../components/partner-detail-popup/partner-detail-popup ';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            profilePhoto: {},
            showProfilePhotoModal: false
        }
    }
    componentDidMount = () => {
        this.setState({ userData: this.props.userData });
    }

    updateUserDetails = (userData) => {

        this.props.appAction.updateUser(userData).then((res) => {
            if (res === 'success') {
                this.setState({userData});
                alert('user details updated successfully')
            } else {
                alert(res + 'some issue, please try with valid data')

            }
        })
    }

    updateMedia = (media) => {
        const profilePhoto = {
            image: {
                mime: "image/jpeg",
                data: media
            }
        };
        let { userData } = this.state;
        userData = { ...userData, profilePhoto: profilePhoto };
        this.setState({ userData });
        this.updateUserDetails(userData);
        this.closeModal();
    }

    editProfilePhoto = () => {
        this.setState({ showProfilePhotoModal: true });
    }

    closeModal = () => {
        this.setState({
            showProfilePhotoModal: false,
            showFamilyInfoDetailModal: false,
            showPartnerModal: false

        });
    }

    openEditFamilyInfoDetailModal = () => {
        this.setState({
            familyInfoDetailTitle: 'Update Family Information',
            showFamilyInfoDetailModal: true,

        })
    }

    openEditPartnerlModal = () => {
        this.setState({
            partnerInfoDetailTitle: 'your Partner Information',
            showPartnerModal: true,

        })
    }

    setFamilyInfo=(familyInfo)=>{

            let {userData} = this.state;
            userData = {...userData, ...familyInfo};
            this.updateUserDetails(userData);
            this.closeModal();

        console.log(familyInfo)
    }

    setPartnerDetailInfo=(partnerInfo)=>{

        let {userData} = this.state;
        userData = {...userData, ...partnerInfo};
        this.updateUserDetails(userData);
        this.closeModal();

    console.log(partnerInfo)
}
    render() {
        const { userData, showProfilePhotoModal,
            familyInfoDetailTitle,
            showFamilyInfoDetailModal,
            partnerInfoDetailTitle,
            showPartnerModal,
            // showFamilyModal
            
        } = this.state;
        console.log(userData);
        return (
            <>
                <AddMediaPopup
                    title={'Upload Profile Picture'} show={showProfilePhotoModal}
                    updateMedia={this.updateMedia}
                    handleClose={this.closeModal} />
                 {showFamilyInfoDetailModal && (
                <FamilyInfoDetailPopup familyInfo={userData}
                    title={familyInfoDetailTitle} show={showFamilyInfoDetailModal} handleClose={this.closeModal}
                    setFamilyInfo={this.setFamilyInfo} />
                 )}
                  {showPartnerModal && (
                <PartnerDetailPopup partnerDetailInfo={userData}
                    title={partnerInfoDetailTitle} show={showPartnerModal} handleClose={this.closeModal}
                    setPartnerDetailInfo={this.setPartnerDetailInfo} />
                  )}
                {userData &&
                    <div className='container'>

                        <div className='profile-section'>
                            <div className='profile-image'>
                                <FontAwesomeIcon className='iconcard editIcon' icon={faEdit} onClick={this.editProfilePhoto} />

                                {
                                    (userData?.profilePhoto) ?
                                        <img className="profile-female-image" src={userData?.profilePhoto?.image?.data} alt="" /> :
                                        <img className="profile-female-image" src={female} alt="" />
                                }

                            </div>
                            <div className='profile-data-section'>
                                <h4 className='profile-name'>{userData.firstName + '' + userData.lastName}</h4>

                                <small>
                                    <span className='profile-id'>{userData.id}</span>
                                    <div className='profile-data'>
                                        <div className='row'>
                                            <ul className='col-md-3 col-sm-3'>
                                                <li>Age</li>
                                                <li>Height</li>
                                                <li>Location</li>
                                                <li>Religion</li>
                                                <li>Caste</li>
                                                <li>Mothertongue</li>
                                                <li>Education</li>
                                            </ul>

                                            <ul className='col-md-6 col-sm-6'>
                                                <li>{userData.age}</li>
                                                <li>{userData.height}</li>
                                                <li>{userData.location}</li>
                                                <li>{userData.religion}</li>
                                                <li>{userData.caste}</li>
                                                <li>{userData.motherTongue}</li>
                                                <li>{userData.education}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </small>
                            </div>
                        </div>

                        <Tabs defaultActiveKey="key1" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="key1" title="Personal Details">
                                <PersonalDetails userData={userData} updateUserDetails={this.updateUserDetails} />
                            </Tab>
                            <Tab eventKey="key2" title="Family Details">
                                {/* <FamilyDetails /> */}
                                <FamilyInfoDetails editFamilyInfoDetails={this.openEditFamilyInfoDetailModal} />

                            </Tab>
                            <Tab eventKey="key3" title="Partner Perferences" >
                                {/* <PartnerPreferences /> */}
                                <PartnerDetail editPartnerDetail={this.openEditPartnerlModal} />

                            </Tab>
                            <Tab eventKey="key4" title="Media(videos & photos)" >
                                <MediaDetails />
                            </Tab>
                        </Tabs>
                    </div>
                }
            </>
        );
    }
}

export const mapDispatchToProps = (dispatch) => ({
    appAction: bindActionCreators(appAction, dispatch),
});

const mapStateToProps = (state) => {
    return {
        userData: state.user.selectedProfile,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
