import React, {Component} from 'react';
<<<<<<< HEAD
import { Button, Container, Menu, Image, Header} from 'semantic-ui-react'

import { Link } from "react-router-dom";

class TeamInfo extends Component {

  info = {
    "张家恺" : {
      intro : "我是来自北京的张家恺，目前就读于文理学院。很高兴能在新的一学年继续在CSSS \
      为大家服务，在接下来一学年，希望可以为职业发展项目打下坚实的基础，为在UVA的中国留学生 \
      群体提供不同领域的求职帮助。长期人生理想是开一家做粤菜的酒馆。",
      img : "/assets/images/team/presidential_board.jpg"
    }
  }

  render() {
    return (
      <Container>
        <Image src={this.info["张家恺"].img} />
        <Header as='large'>张家恺</Header>
        <p>{ this.info["张家恺"].intro }</p>
      </Container>
    )
  }
}

=======
import { Button, Container, Menu} from 'semantic-ui-react'
import Header from '../components/Header'

>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5
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
<<<<<<< HEAD
            as={Link}
            to='/team'
=======
>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5
          />
          <Menu.Item
            name='Presidential Board'
            active={activeItem === 'Presidential Board'}
            onClick={this.handleItemClick}
<<<<<<< HEAD
            as={Link}
            to='/team/prediential_board'
          />
          <Menu.Item
            name="Publicity"
            active={activeItem === 'Publicity'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/publicity'
=======
          />
          <Menu.Item
            name="Publicity"
            active={activeItem === 'Presidential Board'}
            onClick={this.handleItemClick}
>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5
          />
          <Menu.Item
            name='Outreach'
            active={activeItem === 'Outreach'}
            onClick={this.handleItemClick}
<<<<<<< HEAD
            to='/team/outreach'
          />
          <Menu.Item
            name='Technology'
            active={activeItem === 'Technology'}
            onClick={this.handleItemClick}
            to='/team/technology'
=======
          />
          <Menu.Item
            name='Techonology'
            active={activeItem === 'Technology'}
            onClick={this.handleItemClick}
>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5
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
<<<<<<< HEAD
      <TeamInfo />
=======
>>>>>>> fe86725630f3b168ca10bc58fd31974435e4a1d5
      </Container>
  );
}

export default TeamPage;
