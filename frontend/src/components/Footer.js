import React, {Component} from 'react';
import {Button, Container, Grid} from 'semantic-ui-react'

const ButtonCircularSocial = () => (
  <div>
    <a href="https://www.instagram.com/csssatuva/"><Button circular color='pink' icon='instagram'/></a>
    <a href="https://wemp.app/accounts/6df01c46-2cd0-4e97-9b1c-2c391fdb432e"><Button circular color='green' icon='wechat'/></a>
  </div>
)

export default class Footer extends Component {
  render() {
    return (
      <Container className="App-footer" fluid>
        <Grid centered columns={1}>
          <Grid.Column verticalAlign='middle' className='button-social'>
            <ButtonCircularSocial />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
