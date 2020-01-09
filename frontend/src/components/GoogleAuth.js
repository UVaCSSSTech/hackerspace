import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import querystring from 'querystring';

import { Redirect } from "react-router-dom";
import { Button } from 'semantic-ui-react'

const BASE_URL = 'http://localhost:3000'
const instance = axios.create({baseURL: BASE_URL})

async function onSignIn(googleUser) {
  console.log(googleUser.getAuthResponse())

  var profile = googleUser.getBasicProfile();
  var email = profile.getEmail();
  var comp_id = email.split("@")[0]
  console.log(comp_id)

  // if (auth2.isSignedIn.get()) {
  //   var profile = auth2.currentUser.get().getBasicProfile();
  //   console.log('ID: ' + profile.getId());
  //   console.log('Full Name: ' + profile.getName());
  //   console.log('Given Name: ' + profile.getGivenName());
  //   console.log('Family Name: ' + profile.getFamilyName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail());
  // }

  var access_token = googleUser.getAuthResponse().access_token

  // Get access_token for the REST API, this token will be used for further authentication with backend
  // var data = querystring.stringify({
  //               grant_type : "convert_token",
  //               client_id : "1UBXRhbqCOAzVGCYyVxOplkhi9RZI93rQHQlOgDc",
  //               client_secret : "2DSQXBQPQML7nmyPqhX2IrXOnV32SXpXhQznVa7ruyvYzcgK5DcUvAVCTt1cVYH5QWLwySMb6TD4iohnY4HQykL9XiUKbUYyZrEHl8ijDNWCuMmiZFefKrFMeVXBx2IP",
  //               backend : "google-oauth2",
  //               token: access_token,
  //           });
  //
  // //curl -X POST -d "grant_type=convert_token&client_id=<django-oauth-generated-client_id>&client_secret=<django-oauth-generated-client_secret>&backend=google-oauth2&token=<google_token>" http://localhost:8000/auth/convert-token
  // var auth_token = await instance.post('auth/convert-token/', data).then(
  //   function(response) {
  //     return response.data.access_token
  //     //console.log(instance.get('api/user/')
  //   }
  // )

  instance.defaults.headers.common['Authorization'] = 'Bearer google-oauth2 ' + access_token;
  console.log(instance.defaults.headers.common)

  sessionStorage.setItem('access_token', access_token);

  // Check whether user has signed up. If not, redirect to signup page
  instance.get('api/users/'+comp_id)
    .then(function(response) {
      console.log(response)
      localStorage.setItem('access_token', access_token)
    })
    .catch(function(error) {
      console.log(error)
      //window.location.replace('http://localhost:3000/signup');
    })

  instance.get('api/is_authenticated')
    .then(function (response) {
      console.log(response.status)
  })

    window.location.replace(`${BASE_URL}`)
}

export default class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated : null,
    }
    this.checkAuthentication();
  }

  logout() {
    sessionStorage.removeItem('access_token')
    window.location.replace(`${BASE_URL}/`)
  }

  isAuthenticated() {
    instance.defaults.headers.common['Authorization'] = 'Bearer google-oauth2 ' + sessionStorage.access_token;
    if (!sessionStorage.access_token)
      return false;
    else {
        instance.get('api/is_authenticated')
          .then(function (response) {
            if (response.status === 200) {
              return true
            } else {
              return false
            }
        })
    }
  }

  async checkAuthentication() {
    const authenticated = await this.isAuthenticated();
    console.log(authenticated)
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
      //this.props.history.push('/home')
    }
    return authenticated
  }

  render() {
    if (!sessionStorage.access_token) {
      return (
        <GoogleLogin
          clientId="466266907891-7po98cmg691r0onvv6nvqb7btcrve1tt.apps.googleusercontent.com"
          buttonText="Login with UVa email"
          onSuccess={onSignIn}
          cookiePolicy={'single_host_origin'}
        />
      );
    } else {
      return (
        <Button onClick={this.logout}>Logged Out</Button>
      )
    }
  }
}
