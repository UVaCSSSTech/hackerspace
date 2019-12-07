import React, {Component} from 'react';
import { Button, Container, Menu} from 'semantic-ui-react'
import Header from '../components/Header'

class TeamMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Overview'
            active={activeItem === 'Overview'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Presidential Board'
            active={activeItem === 'Presidential Board'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Publicity"
            active={activeItem === 'Presidential Board'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Outreach'
            active={activeItem === 'Outreach'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Techonology'
            active={activeItem === 'Technology'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    )
  }
}

function TeamPage() {
  return (
      <Container>
      <TeamMenu></TeamMenu>
      </Container>
  );
}
export default TeamPage;
