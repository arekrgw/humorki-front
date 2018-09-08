import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getHumors, postVote } from '../actions';

import HumorTile from '../components/HumorTile';
class Humorki extends Component {
  constructor(props){
    super(props);
    this.state = {
      showError: false,
    }
    this.catchVote = this.catchVote.bind(this);
    this.checkVotedPeople = this.checkVotedPeople.bind(this);
  }
  componentDidMount(){
    this.props.getHumors();
  }
  checkVotedPeople(userId){
    //Sprawdzenie czy juz glosowalismy na danego uzytkownika dzis
    let flag = true;
    if(localStorage.getItem('voting') !== null){

      let list = Array.from(localStorage.getItem("voting"));

      list.find((person) =>{
        if(person == userId) {
          flag = false;
          return false;
        }
      });
    }
    return flag;
  }
  catchVote(user, grade) {
    let currentDate = new Date();
    if(localStorage.getItem("expiry") < Date.parse(currentDate)){
      localStorage.removeItem("voting");
    }
    //W tym miejscu czek jesli czas przekroczony to nastepuje reste listy zaglosowan
    if(this.checkVotedPeople(user) == true){

      //Post vote to the backend api
      this.props.postVote(user, grade, this.props.getHumors);

      // Ustawianie daty na dzien pozniej
      let nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate()+1);
      nextDay.setHours(6,0,0);


      if(localStorage.getItem('voting') === null){
        localStorage.setItem('voting', user);
      }
      else{
        let list = localStorage.getItem('voting');
        list = list.split(",");
        list.push(user);
        localStorage.setItem('voting', list);
      }
      localStorage.setItem("expiry", Date.parse(nextDay));

    }
    else{
      this.setState({showError: true});
    }
    
  }
  renderTiles(){
    // console.log(this.props.humors);
    return this.props.humors.map((humor, key) => {
      return <HumorTile catchVote={this.catchVote} humor={humor} key={key}/>
    });
  }
  //MAIN RENDER METHOD
  render() {
    if(this.props.humors){
      return (
        <div>
          { this.state.showError ? <p>Już zagłosowałeś dziś na tego nauczyciela</p> : "" }
          <h4 className="hint">Kliknij odpowiednią buźkę aby zagłosować!</h4>
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
    getHumors,
    postVote
  },
    dispatch
  )
}


export default connect(mapStateToProps, matchDispatchToProps)(Humorki);