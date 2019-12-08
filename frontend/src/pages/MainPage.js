import React from 'react';
import {Button, Menu, Container} from 'semantic-ui-react'
import GoogleAuth from '../components/GoogleAuth';
import PhotoSlider from '../components/PhotoSlider';
import SubscribeUs from '../components/SubscribeUs.js'

import csssfamily from '../assets/images/csssfamily.JPG';

function MainPage() {
  return (
    <div className="MainPage">
      <PhotoSlider />
<<<<<<< HEAD
=======
      <GoogleAuth />
>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5
      <SubscribeUs />
    </div>
  );
}

export default MainPage;
