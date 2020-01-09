import React from 'react';
import './App.css';
import {Container} from 'semantic-ui-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GoogleAuth from './components/GoogleAuth';
import PhotoSlider from './components/PhotoSlider';
import logo from './assets/images/cssslogo_white.png';
import Header from './components/Header';
import Routes from './pages/TeamPage';
import csssfamily from './assets/images/csssfamily.JPG';
import axios from 'axios';


const UserContext = React.createContext();

export default class App extends React.Component {
  constructor(prop) {
    super();
    this.state = {
      loggedInStatus : "NOT_LOGGED_IN",
      user : {},
    };
    //this.handleLogin = this.handleLogin.bind(this);
  }

  // checkLoginStatus() {
  //   axios.get('http://localhost:8000/', withCredentials=True)
  // }

  render() {
    return(
      <div className="app">
        <Header />
        <Footer />
        <GoogleAuth />
      </div>
    );
  }
}
