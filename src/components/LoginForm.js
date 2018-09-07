import React, { Component } from 'react';

import '../styles/LoginFormStyle.css';
import NiceInput from './NiceInput';


export default class LoginForm extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={this.props.animationName + " login-form"}>
                <div className="login-box">
                    <div className="login-header">Zaloguj się</div>
                    <div className="login-body">  
                        <NiceInput label="Login" id="login" type="text" />
                        <NiceInput label="Hasło" id="password" type="password" />
                        <div className="actions">
                            <button className="go-button" type="button">Zaczynajmy!</button>
                            <div onClick={this.props.openLoginForm} className="back-button">X</div>     
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
