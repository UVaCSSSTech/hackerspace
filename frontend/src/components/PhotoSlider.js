import React, {Component} from 'react'
import logo from '../assets/images/cssslogo.png'
import image1 from '../assets/images/csssfamily.JPG'

import {Form, Container, Header} from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'
import "../css/PhotoSlider.css"


class PhotoSliderItem extends React.Component {
  render() {
    if (this.props.active) {
      return (
        <div className="carousel-item active">
          <img className="d-block img-slider" src={this.props.img}/>
        </div>
      )
    } else {
      return (
        <div className="carousel-item">
          <img className="d-block img-slider" src={this.props.img}/>
        </div>
      )
    }
  }
}

// TO-Do Reactify this carousel with react-bootstrap
// See https://react-bootstrap.github.io/components/carousel/ for reference


export default class PhotoSlider extends React.Component {
  imgs = [
    '/assets/images/csssfamily.JPG',
    '/assets/images/cssslogo.png'
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
          src={this.imgs[i]}
          width={1000}
          height={500}
        />
      </Carousel.Item>)
    }
    return (
      <Carousel>
        {this.sliderItems}
      </Carousel>
    );
  }
}


