import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAuth from './components/GoogleAuth';
import PhotoSlider from './components/PhotoSlider';

import csssfamily from './assets/images/csssfamily.JPG';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
