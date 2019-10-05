import React, {PureComponent} from 'react';

export default class Header extends PureComponent() {
  render() {
    return (
      <header className="site-navbar pt-3" role="banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 col-xl-6 logo">
              <img src="{% static 'frontend/images/cssslogo.png' %}", style='height:150px;'>
              <h1 className="mb-0"><a href="index.html" className="text-red h2 mb-0">UVaCSSS</a></h1>
              <div className="social-icons d-inline">
                  <a href=""><span className="icon-facebook"></span></a>
                  <a href="https://www.instagram.com/uvacsss/"><span className="icon-instagram"></span></a>
                </div>
            </div>

            <div className="col-12 d-none d-xl-block border-top">
              <nav className="site-navigation text-center " role="navigation">
                <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block mb-0">
                  <li className="active"><a href="index.html">About</a></li>
                  <li><a href="team">Team</a></li>
                  <li><a href="">Activities</a></li>
                  <li><a href="">Technology</a></li>
                  <li><a href="">Latest</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
