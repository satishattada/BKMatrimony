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
class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBasicModal: false,
            selectedTab: this.props?.params?.id?  this.props?.params?.id: 'basic'
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

    setTab = (tab) => {
        this.setState({ selectedTab: tab });
    }

    render() {
        const { userData } = this.props
        const { showBasicModal, basicInfoTitle, selectedTab } = this.state;

        return (
            <div>
                <BasicPopup basicInfo={userData}
                    title={basicInfoTitle} show={showBasicModal} handleClose={this.closeModal}
                    setBasicInfo={this.setBasicInfo}
                />
                <div className='basic-container'>
                    <div className='basic-info'>
                        {/* <SideNavBar /> */}
                        <Tab.Container id="left-tabs-example" defaultActiveKey={selectedTab}>
                            <Row>
                                <Col sm={3}>

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

                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="basic" >
                                                Basic Details
                                            </Nav.Link>

                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="education" >
                                            Education and Career
                                            </Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="basic">
                                            <BasicDetails />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="education">
                                            <div> Education and Career</div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <div> third</div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>

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
export default connect(mapStateToProps)(routeParams(UserDetails));

