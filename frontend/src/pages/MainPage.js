import React from 'react';
import GoogleAuth from '../components/GoogleAuth';
import PhotoSlider from '../components/PhotoSlider';
import SubscribeUs from '../components/SubscribeUs.js'

import csssfamily from '../assets/images/csssfamily.JPG';

function MainPage() {
  return (
    <div className="MainPage">
      <PhotoSlider />
      <SubscribeUs />
    </div>
  );
}

export default MainPage;
