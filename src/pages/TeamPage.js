import React, {Component} from 'react';
import { Button, Container, Menu, Image, Header} from 'semantic-ui-react'
// import Profile from '../components/Profile.js';
import "../css/Profile.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import zhangjiakai from "../assets/images/csss2019/主席团/张家恺.jpg"
import xushuhui from "../assets/images/csss2019/主席团/徐书卉.jpg"
import chenqiaohao from "../assets/images/csss2019/主席团/陈翘浩.jpg"
import tongyao from "../assets/images/csss2019/主席团/童瑶.jpg"
import guxinyan from "../assets/images/csss2019/主席团/顾欣妍.jpg"

import wangyilin from "../assets/images/csss2019/宣传部/王艺霖.jpg"
import zhangxinyue from "../assets/images/csss2019/宣传部/张馨月.jpg"
import bisiyao from "../assets/images/csss2019/宣传部/毕思瑶.jpg"
import guojinlin from "../assets/images/csss2019/宣传部/郭锦琳.jpg"
import jindi from "../assets/images/csss2019/宣传部/金荻.jpg"
import wangjinyi from "../assets/images/csss2019/宣传部/王金益.jpg"
import zhangningxin from "../assets/images/csss2019/宣传部/张宁欣.jpg"

import qihongyang from "../assets/images/csss2019/活动部/漆泓阳.jpg"
import xiaozhiyue from "../assets/images/csss2019/活动部/肖芷玥.jpg"
import liyifan from "../assets/images/csss2019/活动部/李一凡.jpg"
import xunyuxin from "../assets/images/csss2019/活动部/郇宇欣.jpg"
import wangyifan from "../assets/images/csss2019/活动部/王逸凡.jpg"
import heyiwei from "../assets/images/csss2019/活动部/贺逸惟.jpg"
import huqiyuan from "../assets/images/csss2019/活动部/胡淇媛.jpg"
import gaoshiyuan from "../assets/images/csss2019/活动部/高诗元.jpg"

import chenyuqian from "../assets/images/csss2019/外联部/陈羽芊.jpg"
import liushuyang from "../assets/images/csss2019/外联部/刘舒扬.jpg"
import emilyfeng from "../assets/images/csss2019/外联部/Emily Feng.jpg"
import feiaiwen from "../assets/images/csss2019/外联部/费爱雯.jpg"
import lvchuyuan from "../assets/images/csss2019/外联部/陈羽芊.jpg"
import chouqiyun from "../assets/images/csss2019/外联部/仇启贇.jpg"

import dumengru from "../assets/images/csss2019/发财部/杜梦如.jpg"
import yangshuai from "../assets/images/csss2019/发财部/杨帅.jpg"
import wangmengchen from "../assets/images/csss2019/发财部/王梦辰.jpg"
import miutianqi from "../assets/images/csss2019/发财部/缪天琪.jpg"
import shaoanqi from "../assets/images/csss2019/发财部/邵安琦.jpg"
import zhoujiayu from "../assets/images/csss2019/发财部/周佳羽.jpg"
import lvyongze from "../assets/images/csss2019/发财部/吕永泽.jpg"

import taochencheng from "../assets/images/csss2019/文化部/陶陈成.jpg"
import wangwenqian from "../assets/images/csss2019/文化部/汪文谦.jpg"
import caomianchen from "../assets/images/csss2019/文化部/曹冕宸.jpg"
import zhangxiaoxuan from "../assets/images/csss2019/文化部/张笑瑄.jpg"
import suyiyue from "../assets/images/csss2019/文化部/苏怡月.jpg"
import nizhenbang from "../assets/images/csss2019/文化部/倪振邦.jpg"
import wangxiaopi from "../assets/images/csss2019/文化部/王小皮.jpg"
import zhangdanyan from "../assets/images/csss2019/文化部/张丹妍.jpg"
import yulinfei from "../assets/images/csss2019/文化部/虞林霏.jpg"

import tansijun from "../assets/images/csss2019/科技部/谭嗣俊.jpg"
import liuchenlin from "../assets/images/csss2019/科技部/刘辰琳.jpg"
import longwenjun from "../assets/images/csss2019/科技部/龙玟君.jpg"
import fengjiaqi from "../assets/images/csss2019/科技部/冯家琪.jpg"

class PresidentialTeam extends Component{
  presidential_boardProfile = []
  render(){
    const presidential_board = [
      {
        name : "张家恺",
        intro : "我是来自北京的张家恺，目前就读于文理学院。很高兴能在新的一学年继续在CSSS \
        为大家服务，在接下来一学年，希望可以为职业发展项目打下坚实的基础，为在UVA的中国留学生 \
        群体提供不同领域的求职帮助。长期人生理想是开一家做粤菜的酒馆。",
        img : zhangjiakai,
      },
      {
        name : "徐书卉",
        intro : "我是来自北京的张家恺，目前就读于文理学院。很高兴能在新的一学年继续在CSSS \
        为大家服务，在接下来一学年，希望可以为职业发展项目打下坚实的基础，为在UVA的中国留学生 \
        群体提供不同领域的求职帮助。长期人生理想是开一家做粤菜的酒馆。",
        img : xushuhui,
      },
      {
        name : "陈翘浩",
        intro : "Hi大家好！我来自广州，专业是Statistics和Economics，喜欢唱歌，篮球，做饭，\
        投资，看书。人生理想是创业并拥有属于自己的公司，然后不仅仅周游世界，还要体验太空旅游。\
        最爱喝各种老火靓汤和吃早茶。未来一年想带领CSSS变得更好，为夏村的华人群体带来更多有趣并难忘的经历！",
        img : chenqiaohao
      },
      {
        name : "童瑶",
        intro : "大家好我是徐书卉Daisy，来自南京，专业Commerce和Statistics. 喜欢足球，\
        喜欢C罗和皇马，喜欢看电影美剧韩剧，喜欢逛博物馆水族馆，喜欢旅游和被拍。最爱吃冻酸奶和\
        辣豆腐汤，未来一年希望跟CSSS的大家越来越亲密，碰撞出灵感和思维的火花！",
        img : tongyao
      },
      {
        name : "顾欣妍",
        intro : "来自上海，major数学和经济，minor法语，爱好马术和音乐还有吃喝玩乐，人生理想\
        是成为富婆，最爱吃的东西是糖醋小排，希望CSSS越来越好！",
        img : guxinyan
      },
    ]
    for(var i = 0; i < presidential_board.length; i++){
      this.presidential_boardProfile.push(
        <Profile {...presidential_board[i]} />
      )
    }
    return(
      <div>
        {this.presidential_boardProfile}
      </div>
    )
  }
}

class PublicityTeam extends Component{
  publicityProfile = []
  render(){
    const publicity = [
      {
        name : "王艺霖",
        intro : "我来自上海，专业是media studies和econ，喜欢快乐养生，\
        希望新的一年在宣传部继续让CSSS冲出地球登上月球。",
        img : wangyilin
      },
      {
        name : "张馨月",
        intro : "大家好，我来自香港，专业是CS和Economics。\
        最大的爱好就是尝试新鲜的菜谱做饭给大家吃！\
        希望这一年可以和宣传部各位厉害的部员们，向大家呈现更多有趣创新的作品！",
        img : zhangxinyue
      },
      {
        name : "毕思瑶",
        intro : "来自四川，喜欢小裙子的猛男。日常就是打打架画画弹弹钢琴。\
        接下来的一年希望各位神仙带我打怪升级。",
        img : bisiyao
      },
      {
        name : "郭锦琳",
        intro : "我来自厦门，专业是统计，爱好是韩剧，\
        人生理想是一夜暴富，最爱吃的东西是猪排饭。\
        未来一年在csss希望能更多锻炼自己的工作能力，离一夜暴富更进一步。",
        img : guojinlin
      },
      {
        name : "金荻",
        intro : "我是一个住在广州的北京人，专业暂时是传媒。\
        爱好有唱 rap 篮球 没有跳，还喜欢健身足球跟体育有关的都喜欢！\
        吃麻麻香！这是我第一年加入CSSS的宣传部希望干一票大的！冲！",
        img : jindi
      },
      {
        name : "王金益",
        intro : "来自山东，建筑学院的MLA项目研究生。唱歌跳舞画画都喜欢，\
        未来一年希望在这里玩得开心，为社团做一些有价值的事情。",
        img : wangjinyi
      },
      {
        name : "张宁欣",
        intro : "深圳人，想学数学，喜欢打篮球网球羽毛球，大家喜欢的我都喜欢吃。\
        希望把csss变得更厉害！大半夜的我文笔不是很好…人生理想就是活得开心，希望你也开心。",
        img : zhangningxin
      },
    ]
    for(var i = 0; i < publicity.length; i++){
      this.publicityProfile.push(
        <Profile {...publicity[i]} />
      )
    }
    return(
      <div>
        {this.publicityProfile}
      </div>
    )
  }
}

class ActivityTeam extends Component{
  activityProfile = []
  render(){
    const activity = [
      {
        name : "漆泓阳",
        intro : "来自贵阳，专业Foreign Affair&Econ，爱好挺多，理想不少，\
        爱吃辣椒，祝CSSS越来越好。Peace。",
        img : qihongyang
      },
      {
        name : "肖芷玥",
        intro : "大家好我是大二的Cici肖芷玥\
        目前Double major ECON&STAT。我是个出生在深圳的但贼能吃辣的新苏州人。\
        喜欢唱歌跳舞打篮球做饭弹钢琴看韩剧韩综～喜欢吃吃了不胖的好吃的(比如我的自制减脂便当!)\
        希望未来一年大家可以学得开心吃得开心玩得更开心",
        img : xiaozhiyue
      },
      {
        name : "李一凡",
        intro : "Stats PhD一年级，家乡辽宁大连，爱好篮球，排球，游泳。",
        img : liyifan
      },
      {
        name : "郇宇欣",
        intro : "我来自北京，现在我的专业是Econ和Enviroments&Sustainability \
        最喜欢吃火锅和辣的食物 \
        希望在未来的一年里能在CSSS里跟大家一起学习和成长",
        img : xunyuxin
      },
      {
        name : "王逸凡",
        intro : "沈阳人，学cs，喜欢锅包肉",
        img : wangyifan
      },
      {
        name : "胡淇媛",
        intro : "我是Lizzy，来自湖北武汉，没错就是那个有热干面糊汤粉藕夹面窝豆皮糯米包油条的奇妙城市！\
        目前学习上专业不定啥都想学，生活上来者不拒啥都想吃（信吗 我觉得NC还挺好吃的）\
        短期目标是研究出corner一带最好吃的拉面！希望能够在CSSS好干活锻炼能力，顺便消耗掉吃掉的卡路里",
        img : huqiyuan
      },
      {
        name : "贺逸惟",
        intro : "大一，来自深圳。喜欢唱歌摄影篮球。希望未来能与csss一同进步",
        img : heyiwei
      },
      {
        name : "高诗元",
        intro : "我叫Millie，来自上海。喜欢边吃高能量美食边唠嗑，喜欢K歌。\
        未来一年在CSSS希望除了做好自己份内的事也要多多玩耍结交新朋友！",
        img : gaoshiyuan
      },
    ]
    for(var i = 0; i < activity.length; i++){
      this.activityProfile.push(
        <Profile {...activity[i]} />
      )
    }
    return(
      <div>
        {this.activityProfile}
      </div>
    );
  }
}

class OutreachTeam extends Component{
  outreachProfile = []
  render(){
    const outreach = [
      {
        name : "陈羽芊",
        intro : "来自杭州，major psyc，可能想minor德语或者日语，喜欢看番看剧看电，\
        撸猫撸狗撸猫头鹰。吃这方面还挺随意的，基本啥都吃很好养活，就是不吃洋葱和黑木耳，\
        咖喱里面切成小拇指指甲盖大小的洋葱我也能都挑出来。希望这一年能在CSSS好好工作好好玩。以上。",
        img : chenyuqian
      },
      {
        name : "刘舒扬",
        intro : "hi，我是刘舒扬Leon，大二，来自北京，故乡成都。目前打算Econ&Bio Major。\
        人生理想是变得巨厉害。最喜欢吃teriyaki味的东西。未来一年想在CSSS做好外联部本职工作，\
        和夏村的大家过的开开心心顺顺利利 :)",
        img : liushuyang
      },
      {
        name : "Emily Feng",
        intro : "喜欢摄影，喜欢绘画，喜欢零食，喜欢CSSS",
        img :  emilyfeng
      },
      {
        name : "费爱雯",
        intro : "今年大一 来自北京 专业暂定precomm和psych 什么都爱吃 希望能在CSSS和大家一起成长！",
        img : feiaiwen
      },
      {
        name : "吕楚源",
        intro : "北京人，pre-comm或传媒，爱好宅着刷综艺B站。\
        喜欢吃一切辣的和妈妈做的饭。希望在CSSS努力工作，服务大家，自我提升，和大家成为好朋友。",
        img : lvchuyuan
      },
      {
        name : "仇启赟",
        intro : "来自上海的美高+转学生… 在波士顿呆了四年纽约州呆了一年，\
        东部是我家嘻嘻🤭喜欢音乐，钢琴，唱歌，做饭（欢迎来我家蹭饭）希望世界和平 CSSS继续红红火火(?",
        img : chouqiyun
      },
    ]
    for(var i = 0; i < outreach.length; i++){
      this.outreachProfile.push(
        <Profile {...outreach[i]} />
      )
    }
    return(
      <div>
        {this.outreachProfile}
      </div>
    );
  }
}

class CareerFinanceTeam extends Component{
  careerProfile = []
  render(){
    const career  = [
      {
        name : "杜梦如",
        intro : "大家好，我是来自北京的Claire杜梦如。\
        专业Econ & Studio Art(Photography)，minor Astronomy. \
        平时喜欢做饭，拍照，肝游戏，玩手办，看电竞。\
        希望在csss可以把职业发展项目做大做好，真正服务到华人群体。",
        img : dumengru
      },
      {
        name : "杨帅",
        intro : "大家好 我来自北京 double comm和stat。人生理想是养很多猫猫狗狗。\
        未来一年想在csss办有意思的活动，更好地服务大家：）",
        img : yangshuai
      },
      {
        name : "王梦辰",
        intro : "大家好，我是来自天津的Veronique王梦辰，大二，\
        职业发展与金融管理部部长，现在是stat major，应该会double CS。喜欢kpop，音乐剧，跳舞。\
        希望在未来一年和大家相处的愉快，更好的为夏村华人服务。",
        img : wangmengchen
      },
      {
        name : "缪天琪",
        intro : "我来自江苏无锡，以后准备学东亚研究。喜欢看动漫。\
        曾经的理想是在东京或者上海开一家高级餐厅。现在暂时还不知道要不要坚持这个理想。\
        喜欢吃龟苓膏，薯片，拿破仑蛋糕，和喝奶茶。希望在csss与大家好好相处！",
        img : miutianqi
      },
      {
        name : "邵安琦",
        intro : "hello，大家好。我是邵安琦，来自江苏。我是一名大一新生，专业undecided。\
        希望在csss这个集体中和大家合作愉快！",
        img : shaoanqi
      },
      {
        name : "周佳羽",
        intro : "我叫周佳羽Katy，来自北京，专业是pre-comm&Econ。\
        爱好看剧看电影打拳做饭烘焙，人生理想之一是开一家吃了不会胖的甜品店。\
        希望未来一年能和csss的小伙伴们开心玩耍并更好的服务大家！",
        img : zhoujiayu
      },
      {
        name : "吕永泽",
        intro : "我的家在东北地区 松花江下啊～ 长春人 超喜欢大自然小动物\
        人生理想！复活恐龙！四川火锅！希望可以为华人团体提供更多接触工作的机会。",
        img : lvyongze
      },
    ]
    for(var i = 0; i < career.length; i++){
      this.careerProfile.push(
        <Profile {...career[i]} />
      )
    }
    return(
      <div>
        {this.careerProfile}
      </div>
    );
  }
}

class CultureTeam extends Component{
  cultureProfile = []
  render(){
    const culture = [
      {
        name : "陶陈成",
        intro : "来自成都，专业建筑设计，爱好篮球高尔夫以及各种，最爱吃ginkgo口水\
        鸡，未来一年希望和CSSS的各位创办高质量的活动！",
        img : taochencheng
      },
      {
        name : "汪文谦",
        intro : "北京土著十八年，左Econ，右Foreign Affairs，不要秃头，文化部冲鸭！",
        img : wangwenqian
      },
      {
        name : "曹冕宸",
        intro : "来自北京！Pre-comm. 弹琴 健身 打拳 看电影 拍照片。最爱吃红烧肉！\
        希望未来一年在CSSS能交到一些朋友，互相学习！",
        img : caomianchen
      },
      {
        name : "张笑瑄",
        intro : "hello大家好！我是北京人儿张笑瑄。我今年大一，目前专业是biology和pre-comm。\
        我平时喜欢吃好吃的、弹钢琴、打网球和画画，最喜欢吃火锅和日本料理。希望未来一年和CSSS\
        一起愉快的搞事情，一起成长。",
        img : zhangxiaoxuan
      },
      {
        name : "苏怡月",
        intro : "大家好是Cecilia 苏怡月， 来自南京，专业也许是Architecture，喜欢画画空中瑜伽健身，\
        最爱吃酸奶。希望未来一年在CSSS和大家吃喝玩乐办活动！",
        img : suyiyue
      },
      {
        name : "倪振邦",
        intro : "沪上改良主义，拥护市场经济，开明改革者。立志经世致用之学，书生意气，尤擅谈笑风生。\
        此后一年坚持格物之理，提升知识水平，承蒙见教。",
        img : nizhenbang
      },
      {
        name : "王小皮",
        intro : "大家好我是一个来自深圳的不会说粤语的但什么都吃的广东人，吃饭的时候一定要叫上我！\
        我希望能在CSSS认识好多朋友并且想出很多有趣又搞笑的活动！",
        img : wangxiaopi
      },
      {
        name : "张丹妍",
        intro : "来自北京，想学econ or math. 特长睡觉 嗜甜 小提琴. 人生理想 可以吃自己一切想吃的 \
        在自己想睡觉的时间睡觉. 巧克力 蛋糕 可乐味棒棒糖 蓝莓 草莓 山竹",
        img : zhangdanyan
      },
      {
        name : "虞林霏",
        intro : "我是Casey、坐标上海。喜欢旅游和摄影，和吃。大家玩得开心就完事儿了！",
        img : yulinfei
      },
    ]
    for(var i = 0; i < culture.length; i++){
      this.cultureProfile.push(
        <Profile {...culture[i]} />
      )
    }
    return(
      <div>
        {this.cultureProfile}
      </div>
    );
  }
}

class TechTeam extends Component{
  techProfile = []
  render(){
    const tech = [
      {
        name : "谭嗣俊",
        intro : "我来自广州，大三工院CS&Math专业。最大的爱好是在洗澡的时候唱歌🎤 \
        未来一年要把科技部变成一个很酷的地方，通过科技的力量更好地服务夏村的华人群体。",
        img : tansijun
      },
      {
        name : "冯家琪",
        intro : "皮卡皮卡 皮卡皮，我是Sara。专业CS，爱好兔子皮卡丘熬夜肝码\
        追剧，爱吃一切可以吃的东西，最喜欢的是ice tea～",
        img : fengjiaqi
      },
      {
        name : "龙玟君",
        intro : "武汉人，专业CS可能double Psyc，什么都吃。\
        佛系社交，不过在central ground上课之余欢迎顺便来Brown找我玩。\
        愿景？开开心心过好每一天就好了吧。",
        img : longwenjun
      },
      {
        name : "刘辰琳",
        intro : "Hello 我是来自深圳的刘辰琳Maggie，专业是CS＋Stat。\
        我喜欢与好朋友聊天和听音乐，很喜欢吃千层蛋糕和大闸蟹。希望在未来的\
        一年可以与csss的大家一起做更多有趣的事情，交到更多好朋友～",
        img : liuchenlin
      },
    ]
    for(var i = 0; i < tech.length; i++){
      this.techProfile.push(
        <Profile {...tech[i]} />
      )
    }
    return(
      <div>
        {this.techProfile}
      </div>
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
            name='Presidential Board'
            active={activeItem === 'Presidential Board'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/presidential_board'
          />
          <Menu.Item
            name='Activity'
            active={activeItem === 'Activity'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/activity'
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
        <Menu.Item
            name='Career Finance'
            active={activeItem === 'Career'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/career'
          />
        </Menu>
      </div>
    )
  }
}

function TeamPage(){
  return (
      <Container>
        <Router>
          <TeamMenu />
          {/* <TeamInfo /> */}
          <Switch>
            <Route exact path='/team/technology' component={TechTeam}></Route>
            <Route exact path='/team/culture' component={CultureTeam}></Route>
            <Route exact path='/team/outreach' component={OutreachTeam}></Route>
            <Route exact path='/team/activity' component={ActivityTeam}></Route>
            <Route exact path='/team/presidential_board' component={PresidentialTeam}></Route>
            //<Route exact path='/team' component={PresidentialTeam}></Route>
            <Route exact path='/team/publicity' component={PublicityTeam}></Route>
            <Route exact path='/team/career' component={CareerFinanceTeam}></Route>
          </Switch>
        </Router>
      </Container>
  );
}


const Profile = ({name, intro, img}) =>(
  <Container>
    <Header as='large'>{name}</Header>
    <Container id="border">
      <Row>
        <Col xs={4}><img src={img} id="img"/></Col>
        <Col id="content"><p>{intro}</p></Col>
      </Row>
    </Container>
  </Container>
);



export default TeamPage;
