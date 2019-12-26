import React, {Component} from 'react';
import {Button, Menu, Container} from 'semantic-ui-react'


import {
  Link
} from "react-router-dom";

<<<<<<< HEAD:frontend/src/components/Header.js
import MainPage from '../pages/MainPage'
import TeamPage from '../pages/TeamPage'
import SignupPage from '../pages/SignupPage'

class Navbar extends Component {
=======

export default class Navbar extends Component {
>>>>>>> 3591bc321f71c0218c8f6beb8f97889ded61ef7a:frontend/src/components/Navbar.js
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

