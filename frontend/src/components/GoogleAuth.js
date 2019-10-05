import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

export default class GoogleAuth extends React.Component {
  render() {
    return (
      <GoogleLogin
        clientId="601159630421-ca7hr3nl904akh5n9qt6aau6clmdfab5.apps.googleusercontent.com"
        buttonText="Login with your UVa email"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    );
  }
}
