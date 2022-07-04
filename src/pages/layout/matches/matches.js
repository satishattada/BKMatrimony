
import React, { Component } from "react";
import matchesService from "../../../services/matches.service";
import './styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../../redux/actions';

export class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: {}
    }
  }

  componentDidMount = () => {
    // matchesService.getMatches().then((data) => {
    //   console.log('{{{{{{{{{{{data}}}}}}}}}}}');
    //   console.log(data);

    // })
    this.props.appAction.getUserMatches().then(() => {
      console.log('{{{{{{{{{{{data}}}}}}}}}}}');
      console.log(this.props.userMatches);
      this.setState({ matches: this.props.userMatches })
    })
  }
  render() {
    const { matches } = this.state;
    return (
      <div className="container">
        <h1>Matches</h1>
        {matches?.brand}

          {matches?.images?.map((image, i) => {
            return (<div key={i}><img src={image} /> </div>)
          })}
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
    userMatches: state.matches.userMatches
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Matches);

