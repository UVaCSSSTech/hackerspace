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


function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
      <GoogleAuth />
    </div>
  );
}

export default App;
