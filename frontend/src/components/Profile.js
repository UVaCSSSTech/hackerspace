import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
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
            img:"/assets/images/cssslogo.png"
        }
      }
    render(){
        return(
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={this.info["张家恺"].img} />
                    <Card.Body>
                        <Card.Title>张家恺</Card.Title>
                        <Card.Text>{this.info["张家恺"].intro}</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={this.info["XXX"].img} />
                    <Card.Body>
                        <Card.Title>XXX</Card.Title>
                        <Card.Text>{this.info["XXX"].intro}</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={this.info["XXX"].img} />
                    <Card.Body>
                        <Card.Title>XXX</Card.Title>
                        <Card.Text>{this.info["XXX"].intro}</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={this.info["张家恺"].img} />
                    <Card.Body>
                        <Card.Title>张家恺</Card.Title>
                        <Card.Text>{this.info["张家恺"].intro}</Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
            
        );
    }
}