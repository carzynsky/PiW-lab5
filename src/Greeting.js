import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import logo from './images/logo.svg';
import wolf from './images/wolf.png';
import './Greeting.css';
import Footballers from './Footballers.js';


class Greeting extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            show: false,
            footballers: [{"id": 1, "firstName": "Robert", "lastName": "Lewandowski", "Club": "Bayern Monachium"},
            {"id": 2, "firstName": "Arkadiusz", "lastName": "Milik", "Club": "Napoli"},
            {"id": 3, "firstName": "Wojciech", "lastName": "Szczęsny", "Club": "Juventus"},
        ]
        }
    }

    handleToggle = () => {
        this.setState({
            show: !this.state.show
        })
    }


  render() {
    const isChanged = this.state.show;
    let wolfPic;
    if(isChanged){
        wolfPic = <img src={wolf} className="pic" alt="logo"/>
    }
    else{
        wolfPic = <img src={logo} className="pic" alt="logo"/>
    }
    return (
        <Container>
            <Row>
                <div class='logo'>
                    {wolfPic}
                </div>           
            </Row>
            <Row>  
                <Col>
                    <div className='title'>{this.state.title}</div>  
                </Col>                      
            </Row>
            <Row>  
                <Col>
                <div className='buttonSection'>
                    <button className='myButton' onClick={this.handleToggle}>Change</button>
                </div>                    
                </Col>                      
            </Row>
            <Row>
                <Col>
                    <div className="description">{this.state.lorem}</div>
                </Col>          
            </Row>
            <Row>
                <Col>
                    <div className="description">{this.state.show}</div>
                </Col>          
            </Row>
            <Row>
                <Col>
                    <div className="myTableComp">
                        <Footballers />
                    </div>
                </Col>
            </Row>
        </Container>
    );
  }
}
 
export default Greeting