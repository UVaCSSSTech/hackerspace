import React from 'react';
import logo from '../assets/images/cssslogo.png'

export default class Header extends React.Component {
  render() {
    return (
      <header className="site-navbar pt-3" role="banner">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                  <a class="navbar-brand" href="#">UVACSSS</a>
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Team</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Activities</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Technology</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Latest</a>
                    </li>
                  </ul>
                </div>
              </nav>
            {/* </div> */}
            <div className="social-icons d-inline">
                  <a href=""><span className="icon-facebook"></span></a>
                  <a href="https://www.instagram.com/uvacsss/"><span className="icon-instagram"></span></a>
            </div>
      </header>
    );
  }
}
