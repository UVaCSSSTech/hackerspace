import React from 'react';
import './App.css';
import Header from './components/Header'
import GoogleAuth from './components/GoogleAuth';
import PhotoSlider from './components/PhotoSlider';

import csssfamily from './assets/images/csssfamily.JPG'

function App() {
  return (
    <div className="app">
      <Header />
      <PhotoSlider />
      <GoogleAuth />
    </div>
  );
}

export default App;
