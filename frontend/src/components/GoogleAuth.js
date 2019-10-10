import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const responseGoogle = (response) => {
  var csrftoken = getCookie('csrftoken')
  const instance = axios.create({baseURL: 'http://localhost:8000'})
  console.log(response)
  console.log(response.Zi.id_token)
  instance.post('auth/',
    {token : 'abc'}
  )
}

export default class GoogleAuth extends React.Component {
  render() {
    return (
      <GoogleLogin
        clientId="466266907891-5k904n3kaqqnuolsn2269fujv33tn5bf.apps.googleusercontent.com"
        buttonText="Login with your UVa email"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    );
  }
}
