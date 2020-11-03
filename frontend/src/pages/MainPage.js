import React from 'react';
import {Button, Menu, Container, Header} from 'semantic-ui-react'
import GoogleAuth from '../components/GoogleAuth';
import PhotoSlider from '../components/PhotoSlider';
import SubscribeUs from '../components/SubscribeUs.js'

import csssfamily from '../assets/images/csssfamily.JPG';

function MainPage() {
  return (
    <div className="MainPage">
      <PhotoSlider />
      <Container text>
          <Header textAlign='center' as='h1'>About Us</Header>
            <p>
              Established in 1998, the Chinese Students and Scholars Society (CSSS) is a cultural organization made of Chinese undergraduate and graduate students committed to fostering the growth of Chinese students community and providing academic and social support to help Chinese students better integrate into American culture.
            </p>
      </Container>
    </div>
  );
}

export default MainPage;
