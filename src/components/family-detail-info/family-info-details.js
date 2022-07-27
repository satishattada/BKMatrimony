import React, { Component } from 'react';
import "./style.css";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { faUserFriends, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FamilyInfoDetailPopup from '../family-info-detail-popup/family-info-detail-popup';

class FamilyInfoDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFamilyInfoDetailModal: false,

        }
    }

    openFamilyInfoDetailModal = () => {
        this.props.editFamilyInfoDetails();
    }

    render() {
        const { userData } = this.props

        return (
            <div>

                <div className='family-container'>
                    <FontAwesomeIcon className='iconcard' icon={faUserFriends} />
                    <span className='family-heading'>Family information</span>
                    <Button className='edit-button' onClick={() => this.openFamilyInfoDetailModal()}>Edit</Button>

                    <div className='family-information'>
                        <div className='row'>
                            <div className='col-md-6'>Father's occupation</div>
                            <div className='col-md-6'>{userData.fatherOccupation}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>Mother's occupation</div>
                            <div className='col-md-6'>{userData.motherOccupation}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'> Sister's</div>
                            <div className='col-md-6'>{userData.Sister}</div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6'>Brother's</div>
                            <div className='col-md-6'>{userData.Brother}</div>
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

