import React, {Component} from 'react';
import { Button, Container, Menu, Image, Header} from 'semantic-ui-react'
import Profile from '../components/Profile.js';
import { Link } from "react-router-dom";

class TeamInfo extends Component {

  presidential_board = [
    {
      name : "张家恺",
      intro : "我是来自北京的张家恺，目前就读于文理学院。很高兴能在新的一学年继续在CSSS \
      为大家服务，在接下来一学年，希望可以为职业发展项目打下坚实的基础，为在UVA的中国留学生 \
      群体提供不同领域的求职帮助。长期人生理想是开一家做粤菜的酒馆。",
      img : "/assets/images/cssslogo.png"
    },
    {
      name : "xxx",
      intro : "",
      img : "/assets/images/cssslogo.png"
    },
  ]

  tech = [

  ]

  publicity = [
    {
      name : "张家恺",
      intro : "",
      img : "/assets/images/cssslogo.png"
    },
  ]

  activity = [

  ]

  outreach = [

  ]

  culture = [

  ]

  career  = [
    {
      name : "张家恺",
      intro : "",
      img : "/assets/images/cssslogo.png"
    }
  ]

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
            as={Link}
            to='/team'
          />
          <Menu.Item
            name='Presidential Board'
            active={activeItem === 'Presidential Board'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/presidential_board'
          />
          <Menu.Item
            name="Publicity"
            active={activeItem === 'Publicity'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/publicity'
          />
          <Menu.Item
            name='Outreach'
            active={activeItem === 'Outreach'}
            onClick={this.handleItemClick}
            to='/team/outreach'
          />
          <Menu.Item
            name='Technology'
            active={activeItem === 'Technology'}
            onClick={this.handleItemClick}
            to='/team/technology'
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
      <TeamInfo />
      <Profile />
      </Container>
  );
}

export default TeamPage;
