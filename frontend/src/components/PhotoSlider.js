import React, {Component} from 'react'

import {Form, Container, Header} from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'
import "../css/PhotoSlider.css"


export default class PhotoSlider extends React.Component {
  imgs = [
    '/assets/images/粉墨.png',
    '/assets/images/舞龙舞狮.png',
    '/assets/images/paradance.jpg',
    '/assets/images/好声音.JPG',
    '/assets/images/csssfamily.JPG',
  ]
  sliderItems = []

  // Avoid duplicate rendering
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    for (var i = 0; i < this.imgs.length; i++) {
      this.sliderItems.push(
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={this.imgs[i]}
          width={1000}
          height={500}
          alt=""
        />
      </Carousel.Item>)
    }
    return (
      <Carousel className='carousel'
        nextIcon={null}
        prevIcon={null}
        >
        {this.sliderItems}
      </Carousel>
    );
  }
}
