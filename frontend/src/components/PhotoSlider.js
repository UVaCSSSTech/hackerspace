import React from 'react'
import logo from '../assets/images/cssslogo.png'
import image1 from '../assets/images/csssfamily.JPG'
import "../css/PhotoSlider.css"

export default class PhotoSlider extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide w-100" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="/assets/images/csssfamily.JPG" alt="First slide"/>
            </div>
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
      </div>
    );
  }
}
