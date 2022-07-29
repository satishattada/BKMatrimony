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
import FileBase64 from 'react-file-base64';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            profilePhoto: {}
        }
    }
    componentDidMount = () => {
        this.setState({ userData: this.props.userData });
    }

    updateUserDetails = (userData) => {

        this.props.appAction.updateUser(userData).then((res) => {
                if(res === 'success') {
                    alert('user details updated successfully')
                } else {
                    alert(res+ 'some issue, please try with valid data')

                }
        })
    }

      // Callback~
  getFiles(file){
   console.log(file);
   const profilePhoto =  {
    image: {
      mime: "image/jpeg",
      data: file.base64
    }
    };

   this.setState({profilePhoto})
  }

    render() {
        const { userData, profilePhoto } = this.state;

        const photo =  profilePhoto?.image?.data? profilePhoto?.image?.data: '';
        return (
            <div className='container'>
               
                <div className='profile-section'>
                    <div className='profile-image'>
                        {/* <img className="profile-female-image" src={female} alt="" /> */}
                       { profilePhoto?.image?.data && 
                        <img className="profile-female-image" src={photo} alt="" />
                        }

                        <FileBase64
                            multiple={ false }
                            onDone={ this.getFiles.bind(this) } />
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
                        <PersonalDetails userData={userData} updateUserDetails={this.updateUserDetails}/>
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

export const mapDispatchToProps = (dispatch) => ({
    appAction: bindActionCreators(appAction, dispatch),
  });

const mapStateToProps = (state) => {
    return {
      userData: state.user.userData,
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Profile);
