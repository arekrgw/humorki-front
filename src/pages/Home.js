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
  render() {
      return (
        <div className="main-container"> 
          <header className="center-header">
            <img src={logo} alt="Mechanik logo" />
            <h1>"Mechanik"</h1>
            <p>Zespół Szkół Zawodowych nr 2 w Skierniewicach</p>
          </header>   
          <nav className="menu-items-container">
            <Link to="/humorki" className="menu-item humorki"><h3>HUMORKI</h3></Link>
            <Link to="/" className="menu-item sklep"><h3>SKLEP KSIĄŻKOWY</h3></Link>
            <Link to="/" className="menu-item info"><h3>SPEJALNE INFO</h3></Link>
            <Link to="/" className="menu-item plan"><h3>PLAN, ZASTĘPSTWA</h3></Link>
          </nav>
          <footer>
            <h4>Twórca</h4>
            <p>Arkadiusz Pawlak</p>
            <h4>Testerzy</h4>
            <p>Paweł Tworkowski</p>
            <p>Daniel Maszynkiewicz</p>
            <p>Igor Tyjewski</p>
            <p>Mateusz Madej</p>
            <hr />
            <p>Copyright&copy; 2018</p> 
          </footer>
        </div>
      )
  }
}

export default Home;
