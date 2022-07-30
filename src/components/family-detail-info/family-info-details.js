import React, { Component } from 'react';
import "./style.css";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { faUserFriends, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FamilyInfoDetailPopup from '../family-info-detail-popup/family-info-detail-popup';
import FamilyPopup from '../family-information-popup/family-information-popup';

class FamilyInfoDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFamilyInfoDetailModal: false,

        }
    }
    saveDetails = () => {

        let { familyInfo } = this.state;
        this.props.setFamilyInfo(familyInfo);
        // this.props.handleClose();
    }
//     setFamilyInfo=(familyInfo)=>{

//         let {userData} = this.state;
//         userData = {...userData, ...familyInfo};
//         this.updateUserDetails(userData);
//         this.closeModal();

//     console.log(familyInfo)
// }

    openFamilyInfoDetailModal = () => {
        this.props.editFamilyInfoDetails();
    }

    render() {
        const { userData } = this.props;
        const { showFamilyModal, showNativeModal, familyInfoTitle, nativeInfoTitle } = this.state;
        return (
            <div>
                {showFamilyModal && (
                    <FamilyInfoDetailPopup familyInfo={userData}
                        title={familyInfoTitle} show={showFamilyModal} handleClose={this.closeModal}
                        setFamilyInfo={this.setFamilyInfo}
                    />
                )}
                <div className='family-container'>
                    <FontAwesomeIcon className='iconcard' icon={faUserFriends} />
                    <span className='family-heading'>Family information</span>
                    <Button className='edit-button' onClick={() => this.openFamilyInfoDetailModal()}>Edit</Button>

                    <div className='family-information'>
                        <div className='row'>
                            <div className='col-md-6'>Father occupation</div>
                            <div className='col-md-6'>{userData.fatherOccupation}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Mother occupation</div>
                            <div className='col-md-6'>{userData.motherOccupation}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'> Sister's</div>
                            <div className='col-md-6'>{userData.sisters}</div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>Brother's</div>
                            <div className='col-md-6'>{userData.brothers}</div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>Native City</div>
                            <div className='col-md-6'>{userData.city}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Native state</div>
                            <div className='col-md-6'>{userData.state}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Native country</div>
                            <div className='col-md-6'>{userData.country}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Family Value</div>
                            <div className='col-md-6'>{userData.value}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Family Status</div>
                            <div className='col-md-6'>{userData.status}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Family Income</div>
                            <div className='col-md-6'>{userData.income}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>About Family</div>
                            <div className='col-md-6'>{userData.aboutFamily}</div>
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
export default connect(mapStateToProps)(FamilyInfoDetails);

