import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserFriends, } from '@fortawesome/free-solid-svg-icons';
import './family-details.css';
import { connect } from 'react-redux';
import FamilyPopup from '../family-information-popup/family-information-popup';
import NativePopup from '../native-information-popup/native-information-popup';
import { Button } from 'react-bootstrap';

class FamilyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            familyInfoTitle: '',
            nativeInfoTitle: '',
        }
    }
    closeModal = () => {
        this.setState({
            showFamilyModal: false,
            showNativeModal: false,

        });
    }
    openFamilyModal = () => {
        this.setState({
            familyInfoTitle: 'Update Family Information',
            showFamilyModal: true,

        })
    }
    openNativeModal = () => {
        this.setState({
            nativeInfoTitle: 'Update Native Information',
            showNativeModal: true,

        })
    }
    setFamilyInfo = (userData) => {
        console.log(userData);

    }
    setNativeInfo = (userData) => {
        console.log(userData);

    }


    render() {
        const { userData } = this.props;
        const { showFamilyModal, showNativeModal, familyInfoTitle, nativeInfoTitle } = this.state;
        return (<>
 {showFamilyModal && (
            <FamilyPopup familyInfo={userData}
                title={familyInfoTitle} show={showFamilyModal} handleClose={this.closeModal}
                setFamilyInfo={this.setFamilyInfo}
            />
 )}
            <NativePopup nativeInfo={userData}
                title={nativeInfoTitle} show={showNativeModal} handleClose={this.closeModal}
                setNativeInfo={this.setNativeInfo}
            />

            <div className='family-container'>
                <FontAwesomeIcon className='iconcard' icon={faUserFriends} />
                <span className='family-heading'>Family information</span>
                <Button className='edit-button' onClick={() => this.openFamilyModal()}>Edit</Button>

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
                        <div className='col-md-6'>Married Sister(s)</div>
                        <div className='col-md-6'>{userData.marriedSister}</div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>Unmarried Sister(s)</div>
                        <div className='col-md-6'>{userData.unmarriedSisiter}</div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>Unmarried Brother</div>
                        <div className='col-md-6'>{userData.unmarriedBrother}</div>
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
                <Button className='edit-button' onClick={() => this.openNativeModal()}>Edit</Button>

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
