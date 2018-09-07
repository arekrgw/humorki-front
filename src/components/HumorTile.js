import React from 'react'

import '../styles/HumorTileStyle.css';


export default (props) => {
    const catchHandler = (e) => {
        props.catchVote(props.humor.id_uzytkownika, e.target.dataset.val);
    }
    const mainGradeString = `assets/faces/oc${Math.round(props.humor.avg_grade)}.png`;
    return (
      <div className="humorTile">
        <div className="teacherInfo">
            <p className="firstName">{props.humor.imie}</p>
            <p className="lastName">{props.humor.nazwisko}</p>
            <p className="subject">{props.humor.przedmiot}</p>
        </div>
        <div className="mainGrade">
            <img src={mainGradeString} alt="mainGrade" />
        </div>
        <div className="allGrades">
            <div className="oc5">
                <img onClick={catchHandler} src="assets/faces/oc5.png" data-val="5" alt="gradeFace" />
                <p>{props.humor.star5}</p>
            </div>
            <div className="oc4">
                <img onClick={catchHandler} src="assets/faces/oc4.png" data-val="4" alt="gradeFace" />
                <p>{props.humor.star4}</p>
            </div>
            <div className="oc3">
                <img onClick={catchHandler} src="assets/faces/oc3.png" data-val="3" alt="gradeFace" />
                <p>{props.humor.star3}</p>
            </div>
            <div className="oc2">
                <img onClick={catchHandler} src="assets/faces/oc2.png" data-val="2" alt="gradeFace" />
                <p>{props.humor.star2}</p>
            </div>
            <div className="oc1">
                <img onClick={catchHandler} src="assets/faces/oc1.png" data-val="1" alt="gradeFace" />
                <p>{props.humor.star1}</p>
            </div>
        
        </div>
        <div className="quote">
            <p>{props.humor.cytat ? `"${props.humor.cytat}"` : "Not yet"}</p>
        </div>
      </div>
    )
  }
