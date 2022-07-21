
import React, { Component } from "react";
// import matchesService from "../../../services/matches.service";
import './styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../../redux/actions';

export class Cake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cake: {}
    }
  }

  componentDidMount = () => {
    // matchesService.getMatches().then((data) => {
    //   console.log('{{{{{{{{{{{data}}}}}}}}}}}');
    //   console.log(data);

    // })
    this.props.appAction.getUserCake().then(() => {
      console.log('{{{{{{{{{{{data}}}}}}}}}}}');
      console.log(this.props.userCake);
      this.setState({ cake: this.props.userCake })
    })
  }
  render() {
    const { cake } = this.state;
    return (
      <div className="container">
        <h1>cake</h1>
       <small> {cake.name}</small><br/>
       <span> {cake.ingredients}</span>
        {/* {cake?.brand}

          {cake?.images?.map((image, i) => {
            return (<div key={i}><img src={image} /> </div>)
          })} */}
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
    userCake: state.cake.userCake,

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);

