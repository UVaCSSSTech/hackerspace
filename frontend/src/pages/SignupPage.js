import React, {Component} from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Container, Segment, Icon, Image, Header, Placeholder, Label} from 'semantic-ui-react'

const SegmentExamplePlaceholder = () => (
  <Segment placeholder>
    <Header icon>
      <Icon name='pdf file outline' />
      No documents are listed for this customer.
    </Header>
    <Button primary>Add Document</Button>
  </Segment>
)

class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  // Use axios post to create a post request and send it to the server
  // How should I communicate between port after I deploy it?
  handleFormSubmit() {
    console.log('Click happened');
    // const instance = axios.create({baseURL: 'http://localhost:8000'})
    //
    // var data = querystring.stringify({
    //               "name": id_token,
    //           });
    // instance.post('auth/', data).then(
    //   function(response) {
    //     console.log(response)
    //   }
    // )
    // axios.post()
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label> Profile Picture (optional) </label>
            <Placeholder style={{ height: 150, width: 150 }}>
              <Placeholder.Image circular/>
            </Placeholder>
          </Form.Field>
          <Button>Upload Profile Picture</Button>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='Sijun' />
            <Label pointing prompt> Please enter a value </Label>
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Tan' />
          </Form.Field>
          <Form.Field>
            <label> User Name </label>
            <input placeholder = 'JT' />
          </Form.Field>
          <Form.Field>
            <Checkbox checked label='I want to receive newsletters and updates from UVaCSSS' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default SignupPage;
