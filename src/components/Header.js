import React, { Component } from 'react';
import profile from '../assets/profile-avatar.jpg';
import logo from '../assets/logo.jpeg'

class Header extends Component{
  render(){
    return (
      
      <header>
        <div><img src={logo} alt=""/></div>
        <div className="div-perfil">
          <ul className="perfil-link">
            <li><a href="#"><b>Meu Perfil</b></a></li>
            <li>
              <a href="#">
                <img width="30" src={profile} alt=""/>
              </a>				
            </li>
          </ul>  
        </div>        
      </header>
      
    );
  }
}

export default Header;