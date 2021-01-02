import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'



const UserContext = React.createContext();

class App extends React.Component {
  constructor(prop) {
    super();
    this.state = {
      loggedInStatus : "NOT_LOGGED_IN",
      user : {},
    };
    //this.handleLogin = this.handleLogin.bind(this);
  }

  // checkLoginStatus() {
  //   axios.get('http://localhost:8000/', withCredentials=True)
  // }

  render() {
    return(
      <div className="app">
        <Header />
        <Footer />
        <AmplifySignOut />
      </div>
    );
  }
}

export default withAuthenticator(App)