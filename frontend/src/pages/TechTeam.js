import React, { Component } from "react";
import { Button, Container, Menu, Image, Header} from 'semantic-ui-react'
import Profile from '../components/Profile.js';
import TeamMenu from '../pages/TeamPage'

class TechTeam extends Component{
    render(){
        return (
            <TeamMenu />
            // <div>something</div>
        );
    }
}

export default TechTeam;