
import React, { Component } from "react";
import './styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../../redux/actions';

export class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFood:{}
    }
  }

  componentDidMount = () => {
    this.props.appAction.getUserFood().then(() => {
      console.log('{{{{{{{{{{{data}}}}}}}}}}}');
      console.log(this.props.userFood);
      this.setState({userFood: this.props.userFood})
    })
  }
  render() {
    const { userFood } = this.state;
    return (
      <div className="container">
        <h1>food</h1>
        <h2>{userFood.id}</h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  appAction: bindActionCreators(appAction, dispatch),
});

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    userMatches: state.matches.userMatches,
    userFood: state.food.userFood,

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Food);

