import React, {Component} from 'react';
import { Container, Menu, Header} from 'semantic-ui-react'
import "../css/Profile.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import wangyilin from "../assets/images/csss2019/宣传部/王艺霖.jpg"
import zhangxinyue from "../assets/images/csss2019/宣传部/张馨月.jpg"
import bisiyao from "../assets/images/csss2020/council/毕思瑶.jpeg"
import guojinlin from "../assets/images/csss2020/council/郭锦琳.jpeg"
import jindi from "../assets/images/csss2019/宣传部/金荻.jpg"
import wangjinyi from "../assets/images/csss2019/宣传部/王金益.jpg"
import zhangningxin from "../assets/images/csss2019/宣传部/张宁欣.jpg"

import wangxi from "../assets/images/csss2021/活动部/王茜.jpg"
import yeshuqi from "../assets/images/csss2021/活动部/叶书绮.jpg"
import dingyushun from "../assets/images/csss2021/活动部/丁雨顺.jpg"
import lixilong from "../assets/images/csss2021/活动部/李曦龙.jpg"
import liangluwei from "../assets/images/csss2021/活动部/梁璐薇.jpg"
import tanshilong from "../assets/images/csss2021/活动部/谭诗龙.jpg"
import sujiayue from "../assets/images/csss2021/活动部/苏嘉玥.jpg"
import xuyanbin from "../assets/images/csss2021/活动部/许言彬.jpg"
import zhouyifan from "../assets/images/csss2021/活动部/周逸凡.jpg"

import chenyuqian from "../assets/images/csss2020/council/陈羽芊.jpeg"
import chouqiyun from "../assets/images/csss2020/council/仇启贇.jpeg"
import wangmengchen from "../assets/images/csss2020/council/王梦辰.jpeg"

import wangwenqian from "../assets/images/csss2020/council/汪文谦.jpeg"
import wangxiaopi from "../assets/images/csss2020/council/王小皮.jpeg"
import zhangdanyan from "../assets/images/csss2020/council/张丹妍.jpeg"
import dukeyan from "../assets/images/csss2020/文化部/都柯言.jpg"
import huanyuxin from "../assets/images/csss2020/文化部/郇宇欣 Jennifer.jpeg"
import liangnan from "../assets/images/csss2020/文化部/梁楠.jpeg"
import sunjingyan from "../assets/images/csss2020/文化部/孙敬言 Jack.jpg"
import longwenjun from "../assets/images/csss2020/council/龙玟君.jpeg"
import fengjiaqi from "../assets/images/csss2020/council/冯家琪.jpeg"
import fengjialin from "../assets/images/csss2020/council/冯家琳.jpeg"

import zhouyancheng from "../assets/images/csss2021/科技部/周彦铖.jpg"
import songxiyuan from "../assets/images/csss2021/科技部/宋希元.jpg"
import lijiayu from "../assets/images/csss2021/科技部/李佳于.jpg"
import hejunyang from "../assets/images/csss2021/科技部/何俊阳.jpg"
import lihengzhou from "../assets/images/csss2021/科技部/李珩周.jpg"

import liushuze from "../assets/images/csss2020/council/刘澍泽.jpeg"
import songlijia from "../assets/images/csss2020/发财部/宋莉嘉.jpeg"

import chenzhangchi from "../assets/images/csss2020/外联部/陈张驰.jpeg"
import yanghongjia from "../assets/images/csss2020/外联部/杨鸿嘉.jpg"
import shenyanwei from "../assets/images/csss2020/外联部/沈彦苇.jpeg"
import wangshiqi from "../assets/images/csss2020/外联部/王诗淇.jpeg"
import lirunjiu from "../assets/images/csss2020/外联部/李润玖Renny.jpeg"
import luojiayi from "../assets/images/csss2020/外联部/罗嘉仪.jpeg"

import 

class CouncilTeam extends Component{
  councilProfile = []
  render(){
    const council = [
      {
        title:"主席",
        name:"郇宇欣",
        intro:"Hihi,郇宇欣Jennifer，来自北京，是一个大一到大三在三个不同大学里度过的大四学生。\
        专业经济统计，辅修韩语。平时喜欢在屋子里看韩剧，看吃播，看做饭视频。梦想是有朝一日去遍世间上六所迪士尼！\
        希望最后一年可以好好熟悉一下村子！",
        img:
      },
      {
        title:"副主席",
        name:"冯家琪",
        intro:"哈喽🌟🌟，我是冯家琪Sara~接下来的学年中会在CSSS担任副主席的职位。希望在新的一学年中和CSSS共同进步，继续为同学们设计出最棒的活动～",
        img:
      },
      {
        title:"秘书",
        name:"朱揭率",
        intro:"大家好，我叫Christian朱揭率，来自上海和新加坡，今年大二，计划修读数学和金融系。我平时喜欢旅行、国际象棋、弹琴、徒步和打王者。我还喜欢读小说，尤其是硬科幻和玄幻小说。作为秘书，我希望能在CSSS这个大家庭认识到更多的小伙伴，和大家一起为夏村的华人服务。祝大家新的一年一起学业进步，吃好玩好学好！",
        img:
      },
    ]
    for(var i = 0; i < council.length; i++){
      this.councilProfile.push(
        <Profile {...council[i]} />
      )
    }
    return(
      <div>
        {this.councilProfile}
      </div>
    )
  }
}
class PublicityTeam extends Component{
  publicityProfile = []
  render(){
    const publicity = [
      {
        name : "马子纯",
        intro : "Hello大家好~我是2024文理学院的马子纯。平时喜欢看电影听音乐，有好吃的就会爆开心。可佛可蹦可运动可random walk（不过今年住在IRC每天一万步起步我已经要倦了）。很高兴今年可以和一群超可爱的小伙伴在CSSS一起进步！",
        img : 
      },
      {
        name : "夏之涵",
        intro : "hello，我是夏之涵，今年大二，专业是pre-comm，平时热爱文学、围棋、篮球和足球。新的一年希望和csss一起成长！",
        img : 
      },
      {
        name : "李坤宇",
        intro : "我叫李坤宇Jeffery，2024届文理学院，意向专业是经济&统计。业余时间，我喜欢打篮球、弹吉他、写书法。在未来的一年里，希望和各位同学一起学习，希望与CSSS共同成长。",
        img : 
      },
      {
        name : "宋致远",
        intro : "Hello大家好呀！我是25届的宋致远Allen，来自浙江宁波。目前打算major stat & minor data science。平时（不写作业的时候）喜欢刷刷b站看看番，偶尔打打游戏，偶尔emo。会经常出没在afc健身房，欢迎偶遇哈哈哈哈哈～宣传方面的话，会做视频剪辑和前期的拍摄，公众号排版也挺ok。乐于尝试一切未曾尝试过的事情！",
        img :
      },
      {
        name : "陈语",
        intro : "Hiiii大噶好：D 我是25届的陈语Serena，来自浙江。想学econ和（？）。家里有橘猪Teemo和奶牛猫Sona，梦想是未来能养一只萨摩椰耶耶！最近喜欢的事情是逛超市、弹钢琴、游泳和打球。很高兴能加入CSSS大家庭，希望能在宣传部做出有意义的事情！",
        img : 
      },
      {
        name : "李羚婧",
        intro : "大家好！我是宣传部的新成员李羚婧Joanna。因为我特别喜欢电影和其他media所以特别荣幸能和大家在这个部门共事。我有一点社恐，但很好相处！如果你也喜欢看电影什么的请大力dd我！",
        img : 
      },
      {
        name : "刘彦君",
        intro : "Hi我是Grace刘彦君，初来乍到的纯正undecided人，major还没头绪minor已经想好一万个。同时也是又菜又爱玩的各种桌游玩家，偶尔画点小画，平时喜欢研究食堂怎么乱配一通才能好吃。",
        img :
      },
      {
        name : "郑笑东",
        intro : "赶due摸鱼样样行，翘课滑雪第一名。",
        img : 
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
        name : "王茜",
        intro : "哈喽啊大家好！！我是王茜Cici，今年大二，专业是统计和经济，也准备minor CS！\
        喜欢看综艺和旅行以及尝试任何新鲜事情；欢迎大家来约饭局或学习局吖！",
        img : wangxi
      },
      {
        name : "叶书绮",
        intro : "hi, 我是来自浙江杭州和台州的叶书绮，一个疯狂的大二学生。\
        打算专业生物和心理。premed人，premed魂。个人爱好美食影视音乐剧和acg。\
        喜欢认识新朋友，请务必和我一起出去玩和吃饭。nova是快乐老家，经常逛tysons。\
        今年还在当chem lab ta，有需要的同学可以来找我~ \
        希望在CSSS大家庭认识新朋友，一起举办活动，度过有趣的一年。",
        img : yeshuqi
      },
      {
        name : "丁雨顺",
        intro : "你好o(^▽^)o我叫丁雨顺，来自上海，今年大二，意向专业人类学和环境，\
        喜欢hiking跑步篮球，喜欢reading挑着看，想去意大利，想疯狂旅游。\
        正在现实和梦境中跳跃着探索世界，在丘壑和平原间来回寻找着差别，\
        以上两句话是我来夏村后的生活总结，还能发现有着三押的整洁。很开心可以加入CSSS活动部，\
        希望可以帮助更多的人，传播很多中国的文化！尽力为各项活动保驾护航！",
        img : dingyushun
      },
      {
        name : "李曦龙",
        intro : "喜欢做饭 \n喜欢打游戏 \n喜欢看番 \n喜欢健身 \n啥都喜欢。。。。",
        img : lixilong
      },
      {
        name : "梁璐薇",
        intro : "Hi 大家好! 我是活动部的梁璐薇Winnie，很高兴能加入CSSS大家庭！\
        我是上海人，专业目前未定，可能是stats/econ，平常喜欢追番，kpop，跳舞，\
        也喜欢吃吃喝喝逛街和hiking！我也很爱研究穿搭&染头发！\
        希望接下来能和CSSS的大家组织更多有趣的活动，度过愉快的时光！",
        img : liangluwei
      },
      {
        name : "谭诗龙",
        intro : "大家好，我是Simon 谭诗龙，来自青岛。专业是统计和日语，\
        喜欢足球听歌弹弹琴玩玩游戏，也比较热衷于拉朋友出门散步。\
        很开心加入CSSS，希望能认识更多好朋友！帮忙组织更多好玩的活动！！",
        img : tanshilong
      },
      {
        name : "苏嘉玥",
        intro : "Hello大家好！我是苏嘉玥Luna，来自北京。目前专业意向是Psych。\
        平时有时间喜欢去森林公园，或者是环境好的地方都会很开心 \
        （🤫给我一根棍子可能就会开心一整天）！一般也会经常去图书馆，欢迎约我一起学习！\
        以前初中高中的同学经常说我看起来很高冷，接近了一段时间觉得很温柔，\
        后来时间久了就觉得非常热情🔥/像个逗比哈哈哈😂不知道会给大家留下怎么的印象😂非常有幸成为CSSS活动部的一员！\
        希望可以和大家一起策划出精彩的活动🎉",
        img : sujiayue
      },
      {
        name : "许言彬",
        intro : "Hiiiii！我是25届的许言彬 Bruce，来自杭州。目前专业意向是经济和教育。\
        喜欢看剧，看番，b站5级小会员。LPL FPX 忠实粉丝, 能够早上五点起来看电竞比赛的那种。\
        奇怪的走路狂人，喜欢短途旅行，喜欢博物馆和图书馆。房间里不能没有泡面和薯片，会打网球，\
        会弹钢琴，更喜欢唠嗑，无所不能唠。很荣幸能够加入CSSS, 希望能和CSSS 一起成长，\
        为这个温暖的华人community出一份自己的力。",
        img : xuyanbin
      },
      {
        name : "周逸凡",
        intro : "Aloha! 我是CSSS活动部的周逸凡 Celine, 工院大一快乐儿童。意向专业cs，\
        未来想做游戏设计。喜欢设计，画画，做手工，做服装，奇装异服爱好者！虽然自带宅属性，\
        但还是喜欢骑着scooter跑来跑去。住在遥远的Hereford，欢迎来runk一起吃饭，打排球，玩飞盘！",
        img : zhouyifan
      }
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
        name : "冯家琳",
        intro : "大家好～我是外联部部长Emily。北京妹子。\
        平时喜欢玩游戏、唱歌、逛街、喝奶茶、吃甜点、做美食攻略+打卡网红餐厅！\
        希望未来的一年能和CSSS一起组织更多有趣的活动(*¯︶¯*)",
        img : fengjialin
      },
      {
        name : "李润玖",
        intro : "大家好！我是来自大连的李润玖，喜欢吃米线和火锅，最喜欢的就是在各种地方躺着，\
        目前的专业是stat，擅长把自己的照片妙手回春，\
        希望在CSSS的时间里能帮到大家，和大家快乐相处！！",
        img : lirunjiu
      },
      {
        name : "杨鸿嘉",
        intro : "大家好！我是来自上海的杨鸿嘉，准备读国际关系和统计专业。\
        我的爱好是游泳、骑行、看书、还有逛博物馆&填词，是个星战粉。\
        希望未来能在外联部和夏村的华人群体以及驻美的中国使领馆多多联络，期待与大家的合作！",
        img :  yanghongjia
      },
      {
        name : "沈彦苇",
        intro : "大噶好，我是外联部的沈彦苇，来自上海。\
        意向专业是media studies/pre-comm/WGS，对humanities相关也都很感兴趣。\
        平时喜欢看展、看老电影看剧、戏剧、听英摇，有时也会打打网球练练琴，\
        最近多了一个新爱好是拍胶片，希望可以和小伙伴们在秋日的上海一起骑行一起扫街呀。\
        我也喜欢盘唱片，欢迎一起去淘碟！\
        很高兴可以加入CSSS这个大家庭，也期待和大家一起合作共同成长！",
        img : shenyanwei
      },
      {
        name : "王诗淇",
        intro : "大家好我是来自深圳的王小皮，热衷于喝无糖奶茶减肥瘦身，\
        最喜欢的电影是《布达佩斯大饭店》，爱好拍拍胶片画个画，还很喜欢坐过山车，\
        大二了依然还是undecided（大概是psyc+stats+art minor），\
        希望能跟CSSS的成员们一起做让大家和我们自己都喜欢的事！",
        img : wangshiqi
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

class FinanceTeam extends Component{
  financeProfile = []
  render(){
    const finance  = [
      {
        name:"张丹妍",
        intro:"大家好，我是2023届的张丹妍 Jessica，major econ+math 平时喜欢睡觉 看电影 吃饼干 喝茶 和 发呆",
        img:
      },
      {
        name : "彭颖君",
        intro : "Hi大家好我是Jamilla彭颖君 文理大一 意向专业是Global Studies和Econ 喜欢画画 干饭 玩游戏 听歌 睡觉 聊天～",
        img : 
      },
      {
        name : "陈梓安",
        intro : "What is up! 我是2025届的陈梓安Clarence，江苏苏州人。目前的意向专业是mathematics with financial concentration，可能会double Econ或者stats。是一名典型的射手以及esfp。课余时间会做一些体育活动，比如打篮球踢足球，足球主队是切尔西。平时也会听音乐，比较喜欢EDM以及rap，喜欢的rapper有J Cole和Kendrick Lamar。最近还喜欢上了打碟，是一位新手DJ。很荣幸能加入CSSS为大家服务。",
        img : 
      },
      {
        name : "董兆洋",
        intro : "大家好，我是董兆洋Eric，来自昆明。我是大一新生，目前就读于弗吉尼亚大学的college of Art&Science。我今年刚刚加入CSSS财务部。我平时喜欢踢球，下棋，会弹吉他。我还很喜欢旅游，去过一些国家，希望以后能去到更多地方。",
        img : 
      },
    ]
    for(var i = 0; i < finance.length; i++){
      this.financeProfile.push(
        <Profile {...finance[i]} />
      )
    }
    return(
      <div>
        {this.financeProfile}
      </div>
    );
  }
}

class CultureTeam extends Component{
  cultureProfile = []
  render(){
    const culture = [
      {
        name : "都柯言",
        intro : "我来自重庆，专业暂定是pre-comm。喜欢的食物是巧克力和火锅。\
        希望在CSSS能够帮助到在夏村的华人。",
        img : dukeyan
      },
      {
        name : "冯家琪",
        intro : "大家好呀，我是冯家琪Sara，来自北京朝阳。专业是Computer Science 和 Statistics。\
        曾经的网瘾少女，但目前最喜欢的是窝在沙发上发呆喝ice tea，刷综艺动漫日剧。\
        擅长的事是熬夜肝码，拉着大家一起团建。喜欢读各种类型的书，更喜欢硬科幻。\
        希望新的一年大家学好玩好，和CSSS一起变得更好。",
        img : fengjiaqi
      },
      {
        name : "郇宇欣",
        intro : "大家好，我是郇宇欣 Jennifer 。来自北京 2022届 econ major。我的爱好是听Kpop 看物料。\
        我喜欢吃各种各样的美食。我喜欢小猫咪 可惜我家里不能养猫 \
        希望在接下来的一年里跟大家一起举办各种各样有趣有意义的活动。\
        谢谢大家～。",
        img : huanyuxin
      },
      {
        name : "梁楠",
        intro : "大家好，我是来自深圳的梁楠Noella。现在我就读UVA的文理学院，意向专业是心理学。\
        平时喜欢逛街，看动漫和画画，有时候也会去打打网球和飞盘。\
        作为一个火锅女孩，平时最爱吃辣，也中意日料和沙拉！我很高兴能加入CSSS文化部，\
        很高兴能有机会为UVA华人群体做一份贡献，让大家感受到海外的家乡情！！",
        img : liangnan
      },
      {
        name : "孙敬言",
        intro : "家乡：黑龙江 专业：建筑 爱好：读书、旅游、电影、设计 \
        喜欢的食物：其实我更喜欢做食物，东北菜重庆菜粤菜江苏菜都会点 \
        未来展望：希望大家一起办好活动， 让在美国的大学活动更加精彩",
        img : sunjingyan
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
        name : "周彦铖",
        intro : "我是来自江苏南京的周彦铖，专业cs，爱好音乐、钢琴、乒乓球、网球，旅游。\
        希望能一起学习技术认识新伙伴。",
        img : zhouyancheng
      },
      {
        name : "宋希元",
        intro : "大家好我是来自北京的宋希元，计算机专业。爱好做卖相不好却好吃的“黑暗”料理，平时看看哲学，\
        游泳，画些小动物。希望在未来的一年和大家一起嗨皮学技术。",
        img : songxiyuan
      },
      {
        name : "李佳于",
        intro : "Hi 大家好！我是李佳于 Olivia，是2025届的大一新生，来自北京。目前打算major stats/chem，\
        其实还没想好可能会改专业。有空会打打羽毛球和乒乓球，平时喜欢购物，拍照，吉他，追剧，打打小游戏，\
        观察野生动物和看星星。新买了scooter打算尝试尝试，平时可以约饭和一起在图书馆学习鸭！",
        img : lijiayu
      },
      {
        name : "何俊阳",
        intro : "Hello大家好！我是Eric何俊阳，来自上海，是工院大一新生，准备major CS。平时喜欢制作电子音乐，\
        去年开始学习DJ打碟，以EDM和HipHop为主。周末喜欢健身，打篮球，羽毛球，等等各种运动。",
        img : hejunyang
      },
      {
        name : "李珩周",
        intro : "大家好，我叫李珩周，2024届计算机专业。精通基于python环境的pip install，java中创建多个class。\
        目前正在掉发C++。很高兴能加入科技部和各位一起快乐coding。业余爱好股市里做慈善，也为此学了一大堆经济课，\
        有相同志向的朋友可以来找我一起积功德（bushi。",
        img : lihengzhou
      }
      

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
            name='Council'
            active={activeItem === 'Council'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/council'
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
            name='Finance'
            active={activeItem === 'Finance'}
            onClick={this.handleItemClick}
            as={Link}
            to='/team/finance'
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
          <Switch>
            <Route exact path='/team/technology' component={TechTeam}></Route>
            <Route exact path='/team/culture' component={CultureTeam}></Route>
            <Route exact path='/team/outreach' component={OutreachTeam}></Route>
            <Route exact path='/team/activity' component={ActivityTeam}></Route>
            <Route exact path='/team' component={CouncilTeam}></Route>
            <Route exact path='/team/publicity' component={PublicityTeam}></Route>
            <Route exact path='/team/finance' component={FinanceTeam}></Route>
            <Route exact path='/team/council' component={CouncilTeam}></Route>
          </Switch>
        </Router>
      </Container>
  );
}


const Profile = ({title, name, intro, img}) =>(
  <Container>
    <Header as='large'>{name}: {title}</Header>
    <Container id="border">
      <Row>
        <Col xs={4}><img src={img} id="img"/></Col>
        <Col id="content"><p>{intro}</p></Col>
      </Row>
    </Container>
  </Container>
);



export default TeamPage;

// lalala