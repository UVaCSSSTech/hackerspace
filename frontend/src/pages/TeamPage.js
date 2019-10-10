import React from 'react';
import Header from './components/Header'
import GoogleAuth from './components/GoogleAuth';
import PhotoSlider from './components/PhotoSlider';

import csssfamily from './assets/images/csssfamily.JPG'

function TeamPage() {
  return (
    <div className="TeamPage">
      <Header />
      <PhotoSlider />
      <GoogleAuth />
    </div>
  );
}

export default TeamPage;
