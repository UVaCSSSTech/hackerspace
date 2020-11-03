import React from 'react';
import {Form, Container, Header} from 'semantic-ui-react'

export default class SubscribeUs extends React.Component{
    render() {
        return(
          <Container>
            <Header textAlign='center' as='h1'>Subscribe to our newsletter</Header>
            <Form>
              <Form.Field>
                <input placeholder='Your Email Address'/>
              </Form.Field>
            </Form>
          </Container>
        );
    }
}
