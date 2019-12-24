import React from 'react';
import './App.css';
import {Container} from 'semantic-ui-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GoogleAuth from './components/GoogleAuth';
import PhotoSlider from './components/PhotoSlider';
import logo from './assets/images/cssslogo_white.png'

import csssfamily from './assets/images/csssfamily.JPG';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './pages/MainPage'
import TeamPage from './pages/TeamPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
}

export class Header extends React.Component {
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

export default App;
