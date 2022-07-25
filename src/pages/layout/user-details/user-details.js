import React, { Component } from 'react';
import "./style.css";
import { Button } from 'react-bootstrap';
import BasicPopup from '../../../components/basic-popup/basic-popup';
import { connect } from 'react-redux';
import { Outlet, Link, useParams, withRouter } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import BasicDetails from '../../../components/basic-details/basic-details';
import { routeParams } from '../../../components/route-params/route-params';
import EducationDetails from '../../../components/education-details/education-details';
import EducationPopup from '../../../components/education-popup/education-popup';
import MediaDetails from '../../../components/media-details/media-details';
import FamilyInfoDetails from '../../../components/family-detail-info/family-info-details';
import FamilyInfoDetailPopup from '../../../components/family-info-detail-popup/family-info-detail-popup';
import PartnerDetailPopup from '../../../components/partner-detail-popup/partner-detail-popup ';
import PartnerDetail from '../../../components/partner-details/partner-details';
import Verify from '../../../components/verify/verify';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBasicModal: false,
            selectedTab: this.props?.params?.id ? this.props?.params?.id : 'basic'

        }
    }

    closeModal = () => {
        this.setState({

            showBasicModal: false,
            showEducationModal: false,
            showMediaModal: false,
            showFamilyInfoDetailModal: false,
            showPartnerModal:false,
        });
    }
    openEditBasicModal = () => {
        this.setState({
            basicInfoTitle: 'Update Basic Information',
            showBasicModal: true,

        })
    }

    openEditEducationModal = () => {
        this.setState({
            educationInfoTitle: 'Update Education Information',
            showEducationModal: true,

        })
    }
    openEditFamilyInfoDetailModal = () => {
        this.setState({
            familyInfoDetailTitle: 'Update Family Information',
            showFamilyInfoDetailModal: true,

        })
    }
    openEditPartnerlModal = () => {
        this.setState({
            PartnerInfoDetailTitle: 'your Partner Information',
            showPartnerModal: true,

        })
    }

    setBasicInfo = (userData) => {
        console.log(userData)
    }

    setTab = (tab) => {
        this.setState({ selectedTab: tab });
    }

    setEducationInfo = (userData) => {
        console.log(userData)
    }
    setFamilyInfo = (userData) => {
        console.log(userData)
    }
    setPartnerDetailInfo = (userData) => {
        console.log(userData)
    }

    render() {
        const { userData } = this.props
        const { showBasicModal, basicInfoTitle, selectedTab, educationInfoTitle, showEducationModal,showPartnerModal, PartnerInfoDetailTitle,FamilyInfoDetailTitle, showFamilyInfoDetailModal } = this.state;

        return (
            <div>
                
                <BasicPopup basicInfo={userData}
                    title={basicInfoTitle} show={showBasicModal} handleClose={this.closeModal}
                    setBasicInfo={this.setBasicInfo}

                />
                <EducationPopup educationInfo={userData}
                    title={educationInfoTitle} show={showEducationModal} handleClose={this.closeModal}
                    setEducationInfo={this.setEducationInfo} />

                <FamilyInfoDetailPopup familyInfo={userData}
                    title={FamilyInfoDetailTitle} show={showFamilyInfoDetailModal} handleClose={this.closeModal}
                    setFamilyInfo={this.setFamilyInfo} />

               <PartnerDetailPopup partnerDetailInfo={userData}
                    title={PartnerInfoDetailTitle} show={showPartnerModal} handleClose={this.closeModal}
                    setPartnerDetailInfo={this.setPartnerDetailInfo}/>

                <div className='basic-container'>
                    <div className='basic-info'>
                        {/* <SideNavBar /> */}
                        <Tab.Container id="left-tabs-example" defaultActiveKey={selectedTab}>
                            <Row>
                                <Col sm={3}>
                                    <div className='trust-score-main'>
                                        <div className="trust-score">

                                            <div className="trust-meter-dash" >
                                                <span className="dash-trust-meter" >
                                                    <span className="pointer-trust-meter"></span>
                                                    <h5 className="trust-score-text" >Trust Score 20%</h5>
                                                    <p className="text-center" >
                                                        <a href="#">Improve text score</a>
                                                    </p>

                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item className='bar1'>
                                            <Nav.Link className='bar' eventKey="basic" >
                                                Basic Details
                                            </Nav.Link>

                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className='bar' eventKey="education" >
                                                Education and Career
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className='bar' eventKey="media" >
                                                Media(photos/videos)
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className='bar' eventKey="family" >
                                                Family Details
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className='bar' eventKey="partner" >
                                                Partner Preference
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className='bar' eventKey="verify" >
                                                Verify(Facebook/linkedln)
                                            </Nav.Link>
                                        </Nav.Item>

                                    </Nav>


                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="basic">
                                            <BasicDetails editBasicModal={this.openEditBasicModal} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="education">
                                            <EducationDetails editEducationDetails={this.openEditEducationModal} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="media">
                                            <MediaDetails editMediaDetails={this.openEditMediaModal} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="family">
                                            <FamilyInfoDetails editFamilyInfoDetails={this.openEditFamilyInfoDetailModal} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="partner">
                                            
                                            <PartnerDetail editPartnerDetail={this.openEditPartnerlModal}/> 
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="verify">
                                           <Verify/>
                                        </Tab.Pane>
                                    </Tab.Content>

                                </Col>

                            </Row>
                        </Tab.Container>
                    </div>
                </div>

            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.user.userData
    }
}
export default connect(mapStateToProps)(routeParams(UserDetails));

