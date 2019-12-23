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
                "token": id_token,
            });
  instance.post('auth/', data).then(
    function(response) {
      console.log(response)
      window.location.replace("http://localhost:3000/signup");
    }
  )
}

export default class GoogleAuth extends React.Component {
  render() {
    return (
      <GoogleLogin
        clientId="466266907891-5k904n3kaqqnuolsn2269fujv33tn5bf.apps.googleusercontent.com"
        buttonText="Login with your UVa email"
        onSuccess={onSignIn}
        cookiePolicy={'single_host_origin'}
      />
    );
  }
}
