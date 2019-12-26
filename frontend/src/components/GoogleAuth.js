import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import querystring from 'querystring';

import { Redirect } from "react-router-dom";

function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token
  //var csrftoken = getCookie('csrftoken')
  const instance = axios.create({baseURL: 'http://localhost:8000'})

  var data = querystring.stringify({
                "id_token": id_token,
            });
  console.log(id_token)
  instance.post('auth/complete/google-plus/', data).then(
    function(response) {
      console.log(response)
      window.location.replace("http://localhost:3000/signup");
    }
  )
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
