import React from 'react';
import GoogleAuth from '../components/GoogleAuth';
import PhotoSlider from '../components/PhotoSlider';

import csssfamily from '../assets/images/csssfamily.JPG';

function MainPage() {
  return (
    <div className="MainPage">
      <PhotoSlider />
      <GoogleAuth />
    </div>
  );
}

export default MainPage;
