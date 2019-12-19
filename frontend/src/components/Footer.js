import React, {Component} from 'react';
import {Button, Menu, Container} from 'semantic-ui-react'

const ButtonExampleCircularSocial = () => (
  <div>
    <Button circular color='white' icon='envelope outline' />
    <Button circular color='pink' icon='instagram' />
    <Button circular color='green' icon='wechat' />
  </div>
)

export default class Footer extends Component {
  render() {
    return (
      <Container className="App-footer" fluid>
        <ButtonExampleCircularSocial />
      </Container>
    );
  }
}
