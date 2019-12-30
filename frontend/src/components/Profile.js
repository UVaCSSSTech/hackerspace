import React from 'react';
import "../css/Profile.css"
import {Image, Container} from 'semantic-ui-react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class Profile extends React.Component{

    info = {
        "张家恺" : {
          intro : "我是来自北京的张家恺，目前就读于文理学院。很高兴能在新的一学年继续在CSSS \
          为大家服务，在接下来一学年，希望可以为职业发展项目打下坚实的基础，为在UVA的中国留学生 \
          群体提供不同领域的求职帮助。长期人生理想是开一家做粤菜的酒馆。",
          img : "/assets/images/cssslogo.png"
        },
        "XXX":{
            intro: "This is who I am.",
            img:"/assets/images/team/sijuntan.jpg"
        }
      }
    render(){
        return(
            <Container>
                <Container id="border">
                <Row>
                    <Col xs={4}><img src={this.info["张家恺"].img} id="img"/></Col>
                    <Col id="content"><p>{ this.info["张家恺"].intro }</p></Col>
                </Row>
                </Container>
                <Container id="border">
                <Row>
                    <Col xs={4}><img src={this.info["XXX"].img} id="img"/></Col>
                    <Col id="content"><p>{ this.info["XXX"].intro }</p></Col>
                </Row>
                </Container>
            </Container>
        );
    }
}
