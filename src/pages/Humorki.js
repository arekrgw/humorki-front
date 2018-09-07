import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getHumors } from '../actions';

import HumorTile from '../components/HumorTile';
class Humorki extends Component {
  componentDidMount(){
    this.props.getHumors();
  }
  catchVote(user, grade) {
    console.log(user, grade);
  }
  renderTiles(){
    console.log(this.props.humors);
    return this.props.humors.map((humor, key) => {
      return <HumorTile catchVote={this.catchVote} humor={humor} key={key}/>
    });
  }
  //MAIN RENDER METHOD
  render() {
    if(this.props.humors){
      return (
        <div>
          <div className="humorContainer">
            {this.renderTiles()}
          </div>
        </div>
      )
    }
    else{
      return (<h1>Loading data from server...</h1>)
    }
  }
}

//Polaczenie z state
function mapStateToProps(state){
  return {
    humors: state.humors
  }
}
//laczenie actions
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getHumors
  },
    dispatch
  )
}


export default connect(mapStateToProps, matchDispatchToProps)(Humorki);