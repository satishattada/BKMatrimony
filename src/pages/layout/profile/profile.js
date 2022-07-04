import React, { Component } from 'react';
import userService from '../../../services/user.service';
import "./profile.css";
import female from '../../../assets/female_large.jpg';
import PersonalDetails from '../../../components/personaldetails/personaldetails';
import FamilyDetails from '../../../components/familydetails/familydetails';
import PartnerPreferences from '../../../components/partnerpreferences/partnerpreferences';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { connect } from 'react-redux';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
        }
    }
    componentDidMount = () => {
        this.setState({ userData: this.props.userData });
        // userService.getUser().then(
        //     (data) => {
        //         this.setState({
        //             userData: data
        //         })
        //     },
        //     (error) => {
        //         error.toString();
        //     }
        // )
    }

    render() {
        const { userData, usersData } = this.state;
        return (
            <div className='container'>
                <div className='profile-section'>
                    <div className='profile-image'>
                        <img className="profile-female-image" src={female} alt="" />
                    </div>
                    <div className='profile-data-section'>
                        <h4 className='profile-name'>{userData.name}</h4>
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
                        <PersonalDetails />
                    </Tab>
                    <Tab eventKey="key2" title="Family Details">
                        <FamilyDetails />
                    </Tab>
                    <Tab eventKey="key3" title="Partner Perferences" >
                        <PartnerPreferences />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      userData: state.user.userData,
    };
  };

  export default connect(mapStateToProps)(Profile);
