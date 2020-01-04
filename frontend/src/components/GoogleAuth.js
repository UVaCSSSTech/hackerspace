import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import querystring from 'querystring';

import { Redirect } from "react-router-dom";

function onSignIn(googleUser) {
  console.log(googleUser.getAuthResponse())
  var access_token = googleUser.getAuthResponse().access_token
  console.log(access_token)
  //var csrftoken = getCookie('csrftoken')
  const instance = axios.create({baseURL: 'http://localhost:8000'})

  var data = querystring.stringify({
                grant_type : "convert_token",
                client_id : "1UBXRhbqCOAzVGCYyVxOplkhi9RZI93rQHQlOgDc",
                client_secret : "2DSQXBQPQML7nmyPqhX2IrXOnV32SXpXhQznVa7ruyvYzcgK5DcUvAVCTt1cVYH5QWLwySMb6TD4iohnY4HQykL9XiUKbUYyZrEHl8ijDNWCuMmiZFefKrFMeVXBx2IP",
                backend : "google-oauth2",
                token: access_token,
            });

  console.log(data)

  //curl -X POST -d "grant_type=convert_token&client_id=<django-oauth-generated-client_id>&client_secret=<django-oauth-generated-client_secret>&backend=google-oauth2&token=<google_token>" http://localhost:8000/auth/convert-token
  instance.post('auth/convert-token/', data).then(
    function(response) {
      console.log(response)
    }
  )
  // instance.post('auth/complete/google-plus/', data).then(
  //   function(response) {
  //     console.log(response)
  //     window.location.replace("http://localhost:3000/signup");
  //   }
  // )
  //window.open('http://localhost:8000/auth/login/google-oauth2')
}

export default class GoogleAuth extends React.Component {
  render() {
    return (
      <GoogleLogin
        clientId="466266907891-7po98cmg691r0onvv6nvqb7btcrve1tt.apps.googleusercontent.com"
        buttonText="Login with your UVa email"
        onSuccess={onSignIn}
        cookiePolicy={'single_host_origin'}
      />
    );
  }
}
