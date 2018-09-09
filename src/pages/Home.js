import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/HomeStyle.css';

//images
import '../images/humorki-background.jpg';
import '../images/sklep-background.jpg';
import '../images/info-background.jpg';
import '../images/plan-background.jpg';
import '../images/body-background.jpg';
import logo from '../images/mechanik-logo.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({width: window.innerWidth});
  }
  render() {
      return (
        <div className="main-container"> 
          <header className="center-header">
            <div className="logo">
              <img src={logo} alt="Mechanik logo" />
            </div>
            <div className="school-name">
              <h1>"Mechanik"</h1>
              {this.state.width >= 525 ? <p>Zespół Szkół Zawodowych nr 2 w Skierniewicach</p> : ""}
            </div>           
            {this.state.width < 525 ? <p>Zespół Szkół Zawodowych nr 2 w Skierniewicach</p> : ""}
          </header>   
          <nav className="menu-items-container">
            <Link to="/humorki" className="menu-item humorki"><h3>HUMORKI</h3></Link>
            <Link to="/" className="menu-item sklep"><h3>SKLEP KSIĄŻKOWY</h3></Link>
            <Link to="/" className="menu-item info"><h3>SPECJALNE OGŁOSZENIA</h3></Link>
            <Link to="/" className="menu-item plan"><h3>PLAN, ZASTĘPSTWA</h3></Link>
          </nav>
          <footer>
            <div className="author">
              <h4>Twórca</h4>
              <p>Arkadiusz Pawlak</p>
            </div>
            <div className="testers">
              <h4>Testerzy Developerscy</h4>
              <p>Jeszcze nie znani</p>
            </div>              
            <hr />
            <p>Copyright&copy; 2018</p> 
          </footer>
        </div>
      )
  }
}

export default Home;
