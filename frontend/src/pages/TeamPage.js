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
      name : "王艺霖",
      intro : "我来自上海，专业是media studies和econ，喜欢快乐养生，\
      希望新的一年在宣传部继续让CSSS冲出地球登上月球。",
      img : ""
    },
    {
      name : "张馨月",
      intro : "大家好，我来自香港，专业是CS和Economics。\
      最大的爱好就是尝试新鲜的菜谱做饭给大家吃！\
      希望这一年可以和宣传部各位厉害的部员们，向大家呈现更多有趣创新的作品！",
      img : ""
    },
    {
      name : "毕思瑶",
      intro : "来自四川，喜欢小裙子的猛男。日常就是打打架画画弹弹钢琴。\
      接下来的一年希望各位神仙带我打怪升级。",
      img : ""
    },
    {
      name : "郭锦琳",
      intro : "我来自厦门，专业是统计，爱好是韩剧，\
      人生理想是一夜暴富，最爱吃的东西是猪排饭。\
      未来一年在csss希望能更多锻炼自己的工作能力，离一夜暴富更进一步。",
      img : ""
    },
    {
      name : "金荻",
      intro : "我是一个住在广州的北京人，专业暂时是传媒。\
      爱好有唱 rap 篮球 没有跳，还喜欢健身足球跟体育有关的都喜欢！\
      吃麻麻香！这是我第一年加入CSSS的宣传部希望干一票大的！冲！",
      img : ""
    },
    {
      name : "王金益",
      intro : "来自山东，建筑学院的MLA项目研究生。唱歌跳舞画画都喜欢，\
      未来一年希望在这里玩得开心，为社团做一些有价值的事情。",
      img : ""
    },
    {
      name : "张宁欣",
      intro : "深圳人，想学数学，喜欢打篮球网球羽毛球，大家喜欢的我都喜欢吃。\
      希望把csss变得更厉害！大半夜的我文笔不是很好…人生理想就是活得开心，希望你也开心。",
      img : ""
    },
  ]

  activity = [

  ]

  outreach = [
    {
      name : "陈羽芊",
      intro : "来自杭州，major psyc，可能想minor德语或者日语，喜欢看番看剧看电，\
      撸猫撸狗撸猫头鹰。吃这方面还挺随意的，基本啥都吃很好养活，就是不吃洋葱和黑木耳，\
      咖喱里面切成小拇指指甲盖大小的洋葱我也能都挑出来。希望这一年能在CSSS好好工作好好玩。以上。",
      img : ""
    },
    {
      name : "刘舒扬",
      intro : "hi，我是刘舒扬Leon，大二，来自北京，故乡成都。目前打算Econ&Bio Major。\
      人生理想是变得巨厉害。最喜欢吃teriyaki味的东西。未来一年想在CSSS做好外联部本职工作，\
      和夏村的大家过的开开心心顺顺利利 :)",
      img : ""
    },
    {
      name : "Emily Feng",
      intro : "喜欢摄影，喜欢绘画，喜欢零食，喜欢CSSS",
      img : ""
    },
    {
      name : "费爱雯",
      intro : "今年大一 来自北京 专业暂定precomm和psych 什么都爱吃 希望能在CSSS和大家一起成长！",
      img : ""
    },
    {
      name : "吕楚源",
      intro : "北京人，pre-comm或传媒，爱好宅着刷综艺B站。\
      喜欢吃一切辣的和妈妈做的饭。希望在CSSS努力工作，服务大家，自我提升，和大家成为好朋友。",
      img : ""
    },
    {
      name : "仇启贇",
      intro : "来自上海的美高+转学生… 在波士顿呆了四年纽约州呆了一年，\
      东部是我家嘻嘻🤭喜欢音乐，钢琴，唱歌，做饭（欢迎来我家蹭饭）希望世界和平 CSSS继续红红火火(?",
      img : ""
    },
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

