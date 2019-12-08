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

  render() {
    for (var i = 0; i < this.imgs.length; i++) {
      this.sliderItems.push(<PhotoSliderItem img={this.imgs[i]} active={i == 0} />)
    }

    return (
      <Container>
        <div id="carouselExampleControls" className="carousel slide carousel-size" data-ride="carousel">
          <div className="carousel-inner">
            {this.sliderItems}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Container>
    );
  }
}
