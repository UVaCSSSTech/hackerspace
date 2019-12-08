import React, {Component} from 'react';
import {Button, Menu, Container} from 'semantic-ui-react'
<<<<<<< HEAD
import logo from '../assets/images/cssslogo_white.png'
=======
import logo from '../assets/images/cssslogo.png'
>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainPage from '../pages/MainPage'
import TeamPage from '../pages/TeamPage'
import SignupPage from '../pages/SignupPage'


class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
      <Menu>
        <Menu.Item header> UVaCSSS </Menu.Item>
        <Menu.Item
          name='about_us'
          active={activeItem === 'about_us'}
<<<<<<< HEAD
          as={Link}
          to='/'
=======
>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5
          onClick={this.handleItemClick}
        >
          About Us
        </Menu.Item>

        <Menu.Item
          name='our_team'
          active={activeItem === 'our_team'}
<<<<<<< HEAD
          as={Link}
          to='/team'
=======
>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5
          onClick={this.handleItemClick}
        >
          Our Team
        </Menu.Item>
<<<<<<< HEAD
=======

>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5
        <Menu.Item position='right'>
          <Button> Log in with UVa Email </Button>
        </Menu.Item>
      </Menu>
      </Container>
    )
  }
}

export default class Header extends React.Component {
  render() {
    return (
      <header className="site-navbar pt-3" role="banner">
<<<<<<< HEAD
        <Container className="logo-container">
=======
        <Container>
>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5
            <img src={logo} className="App-logo" alt="logo" />
        </Container>

        <Router>
<<<<<<< HEAD
          <Navbar>
          </Navbar>

=======
          <Navbar></Navbar>
          <div class="ui menu">
              <div class="header item"> UVaCSSS </div>
              <a class="item active"> About Us </a>
              <a class="item"> Our Team</a>
              <a class="item"> Login </a>
          </div>
>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5
          <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/team" component={TeamPage}></Route>
            <Route exact path='/signup' component={SignupPage}></Route>
          </Switch>
        </Router>
            {/* </div> */}
            <div className="social-icons d-inline">
                  <a href=""><span className="icon-facebook"></span></a>
                  <a href="https://www.instagram.com/uvacsss/"><span className="icon-instagram"></span></a>
            </div>
      </header>
    );
  }
}
