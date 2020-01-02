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
    {
      name : "谭嗣俊",
      intro : "我来自广州，大三工院CS&Math专业。最大的爱好是在洗澡的时候唱歌🎤 \
      未来一年要把科技部变成一个很酷的地方，通过科技的力量更好地服务夏村的华人群体。",
      img : ""
    },
    {
      name : "冯家琪",
      intro : "皮卡皮卡 皮卡皮，我是Sara。专业CS，爱好兔子皮卡丘熬夜肝码\
      追剧，爱吃一切可以吃的东西，最喜欢的是ice tea～",
      img : ""
    },
    {
      name : "龙玟君",
      intro : "武汉人，专业CS可能double Psyc，什么都吃。\
      佛系社交，不过在central ground上课之余欢迎顺便来Brown找我玩。\
      愿景？开开心心过好每一天就好了吧。",
      img : ""
    },
    {
      name : "刘辰琳",
      intro : "Hello 我是来自深圳的刘辰琳Maggie，专业是CS＋Stat。\
      我喜欢与好朋友聊天和听音乐，很喜欢吃千层蛋糕和大闸蟹。希望在未来的\
      一年可以与csss的大家一起做更多有趣的事情，交到更多好朋友～",
      img : ""
    },
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
    {
      name : "陶陈成",
      intro : "来自成都，专业建筑设计，爱好篮球高尔夫以及各种，最爱吃ginkgo口水\
      鸡，未来一年希望和CSSS的各位创办高质量的活动！",
      img : ""
    },
    {
      name : "汪文谦",
      intro : "北京土著十八年，左Econ，右Foreign Affairs，不要秃头，文化部冲鸭！",
      img : ""
    },
    {
      name : "曹冕宸",
      intro : "来自北京！Pre-comm. 弹琴 健身 打拳 看电影 拍照片。最爱吃红烧肉！\
      希望未来一年在CSSS能交到一些朋友，互相学习！",
      img : ""
    },
    {
      name : "张笑瑄",
      intro : "hello大家好！我是北京人儿张笑瑄。我今年大一，目前专业是biology和pre-comm。\
      我平时喜欢吃好吃的、弹钢琴、打网球和画画，最喜欢吃火锅和日本料理。希望未来一年和CSSS\
      一起愉快的搞事情，一起成长。",
      img : ""
    },
    {
      name : "苏怡月",
      intro : "大家好是Cecilia 苏怡月， 来自南京，专业也许是Architecture，喜欢画画空中瑜伽健身，\
      最爱吃酸奶。希望未来一年在CSSS和大家吃喝玩乐办活动！",
      img : ""
    },
    {
      name : "倪振邦",
      intro : "沪上改良主义，拥护市场经济，开明改革者。立志经世致用之学，书生意气，尤擅谈笑风生。\
      此后一年坚持格物之理，提升知识水平，承蒙见教。",
      img : ""
    },
    {
      name : "王小皮",
      intro : "大家好我是一个来自深圳的不会说粤语的但什么都吃的广东人，吃饭的时候一定要叫上我！\
      我希望能在CSSS认识好多朋友并且想出很多有趣又搞笑的活动！",
      img : ""
    },
    {
      name : "张丹妍",
      intro : "来自北京，想学econ or math. 特长睡觉 嗜甜 小提琴. 人生理想 可以吃自己一切想吃的 \
      在自己想睡觉的时间睡觉. 巧克力 蛋糕 可乐味棒棒糖 蓝莓 草莓 山竹",
      img : ""
    },
    {
      name : "虞林霏",
      intro : "我是Casey、坐标上海。喜欢旅游和摄影，和吃。大家玩得开心就完事儿了！",
      img : ""
    },
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
            name='Publicity'
            active={activeItem === 'Publicity'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/publicity'
          />
          <Menu.Item
            name='Outreach'
            active={activeItem === 'Outreach'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/outreach'
          />
          <Menu.Item
            name='Technology'
            active={activeItem === 'Technology'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/technology' 
          />
          <Menu.Item
            name='Culture'
            active={activeItem === 'Culture'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/culture' 
          />
        </Menu>
      </div>
    )
  }
}

function TeamPage() {
  return (
      <Container>
        <TeamMenu />
        <TeamInfo />
        <Profile />
      </Container>
  );
}

export default TeamPage;

