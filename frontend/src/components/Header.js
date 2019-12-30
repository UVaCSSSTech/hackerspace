import React, {Component} from 'react';
import {Button, Menu, Container} from 'semantic-ui-react'
import logo from '../assets/images/cssslogo_white.png'

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

  handleLogin() {
    window.open('http://localhost:8000/auth/login/google-oauth2')
  }

  render() {
    const { activeItem } = this.state

    return (
      <Container>
      <Menu>
        <Menu.Item header> UVaCSSS </Menu.Item>
        <Menu.Item
          name='about_us'
          active={activeItem === 'about_us'}
          as={Link}
          to='/'
          onClick={this.handleItemClick}
        >
          About Us
        </Menu.Item>

        <Menu.Item
          name='our_team'
          active={activeItem === 'our_team'}
          as={Link}
          to='/team'
          onClick={this.handleItemClick}
        >
          Our Team
        </Menu.Item>
        <Menu.Item position='right'>
          <Button onClick={this.handleLogin}> Log in with UVa Email </Button>
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
        <Container className="logo-container" fluid>
            <img src={logo} className="App-logo" alt="logo" />
        </Container>

        <Router>
          <Navbar className='App-navbar'>
          </Navbar>

          <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/team" component={TeamPage}></Route>
            <Route exact path='/signup' component={SignupPage}></Route>
          </Switch>
        </Router>
      </header>
    );
  }
}
