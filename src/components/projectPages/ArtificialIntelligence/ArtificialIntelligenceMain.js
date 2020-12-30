import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';
import Paper from '@material-ui/core/Paper';
//import { Tabs } from '@material-ui/core';
//import Tab from '@material-ui/core/Tab';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {Row, Col} from 'react-bootstrap';

class ArtificialIntelligenceMain extends Component{

    constructor(props){
        super(props);
        this.state={idk: 'wha wha wha'}
    }

    yeahYeah = () => {
        this.setState({idk: 'yea yea yea'})
    }

    render(){
        return(
            <div className = "projects-grid">
                    <div className = "separator" />
                    <Row>
                                <Col xs={12} sm={12} md={12} lg={4} xl={4} >
                                    <Card shadow={5} style={{margin: 'auto', justifyContent: 'center', backgroundColor: '#ccc', opacity: '.8', height: '49vh', width: '294px'}} onClick={() => this.props.changeShowing(0)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center'}}>
                                            <div style={{justifyContent: 'center', margin: 'auto', width: '100%'}}>
                                                <Row style={{border: 'solid #0cf2ad 4px', fontFamily: "'Fredoka One'", backgroundColor: 'black', color: '#0cf2ad', justifyContent: 'center', margin: 'auto', flexWrap: 'nowrap'}}>
                                                    <Col xs={4} style={{fontSize: '47.8px', border: 'solid white 1px', textAlign: 'center', margin: 'auto'}}>1</Col>
                                                    <Col xs={4} style={{fontSize: '47.8px', border: 'solid white 1px', textAlign: 'center', margin: 'auto'}}>8</Col>
                                                    <Col xs={4} style={{fontSize: '47.8px', border: 'solid white 1px', textAlign: 'center', margin: 'auto'}}>6</Col>
                                                </Row>
                                                <Row style={{border: 'solid #0cf2ad 4px', fontFamily: "'Fredoka One'", backgroundColor: 'black', color: '#0cf2ad', justifyContent: 'center', margin: 'auto', flexWrap: 'nowrap'}}>
                                                    <Col xs={4} style={{fontSize: '47.8px', border: 'solid white 1px', textAlign: 'center', margin: 'auto'}}>&nbsp;</Col>
                                                    <Col xs={4} style={{fontSize: '47.8px', border: 'solid white 1px', textAlign: 'center', margin: 'auto'}}>2</Col>
                                                    <Col xs={4} style={{fontSize: '47.8px', border: 'solid white 1px', textAlign: 'center', margin: 'auto'}}>3</Col>
                                                </Row>
                                                <Row style={{border: 'solid #0cf2ad 4px', fontFamily: "'Fredoka One'", backgroundColor: 'black', color: '#0cf2ad', justifyContent: 'center', margin: 'auto', flexWrap:'nowrap'}}>
                                                    <Col xs={4} style={{fontSize: '47.8px', border: 'solid white 1px', textAlign: 'center', margin: 'auto'}}>5</Col>
                                                    <Col xs={4} style={{fontSize: '47.8px', border: 'solid white 1px', textAlign: 'center', margin: 'auto'}}>4</Col>
                                                    <Col xs={4} style={{fontSize: '47.8px', border: 'solid white 1px', textAlign: 'center', margin: 'auto'}}>7</Col>
                                                </Row>
                                            </div>   
                                        </CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '3vh', justifyContent: 'center'}}></CardTitle>
                                        
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid white 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.32em', fontFamily: "'Fredoka One'", position: 'relative'}}>8 Puzzle Solver</p>
                                    </Card>
                                    <div className='separator' />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={4} xl={4} >
                                <Card shadow={5} style={{margin: 'auto', justifyContent: 'center', backgroundColor: '#ccc', opacity: '.8', height: '49vh', width: '294px'}} onClick={() => this.props.changeShowing(1)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center'}}>
                                            <div style={{display: 'block', justifyContent: 'center', margin: 'auto', width: '100%', textAlign: 'center'}}>
                                                <Row style={{fontFamily: "'Fredoka One'", backgroundColor: 'black', color: 'black', justifyContent: 'center', textAlign: 'center', margin: 'auto'}}>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}>♕</Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                </Row>
                                                <Row style={{fontFamily: "'Fredoka One'", backgroundColor: 'black', color: 'black', justifyContent: 'center', textAlign: 'center', margin: 'auto'}}>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}>♕</Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                </Row>
                                                <Row style={{fontFamily: "'Fredoka One'", backgroundColor: 'black', color: 'black', justifyContent: 'center', textAlign: 'center', margin: 'auto'}}>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh', justifyContent: 'center'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}>♕</Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                </Row>
                                                <Row style={{fontFamily: "'Fredoka One'", backgroundColor: 'black', color: 'black', justifyContent: 'center', textAlign: 'center', margin: 'auto'}}>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}>♕</Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                </Row>
                                                <Row style={{fontFamily: "'Fredoka One'", backgroundColor: 'black', color: 'black', justifyContent: 'center', textAlign: 'center', margin: 'auto'}}>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}>♕</Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                </Row>
                                                <Row style={{fontFamily: "'Fredoka One'", backgroundColor: 'black', color: 'black', justifyContent: 'center', textAlign: 'center', margin: 'auto'}}>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}>♕</Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                </Row>
                                                <Row style={{fontFamily: "'Fredoka One'", backgroundColor: 'black', color: 'black', justifyContent: 'center', textAlign: 'center', margin: 'auto'}}>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}>♕</Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                </Row>
                                                <Row style={{fontFamily: "'Fredoka One'", backgroundColor: 'black', color: 'black', justifyContent: 'center', textAlign: 'center', margin: 'auto'}}>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh'}}></Col>
                                                    <Col xs={1} style={{fontSize: '1.03em', width: '.5vw', textAlign: 'center', color: '#0cf2ad', height: '4vh', justifyContent: 'center', margin: 'auto', position: 'relative'}}>♕</Col>
                                                </Row>
                                            </div>   
                                        </CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '0vh', justifyContent: 'center'}}></CardTitle>
                                        
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid white 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.32em', fontFamily: "'Fredoka One'", position: 'relative'}}>8 Queens Solver</p>
                                    </Card>
                                    <div className='separator' />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                                <Card shadow={5} style={{margin: 'auto', justifyContent: 'center', backgroundColor: 'white', opacity: '.8', height: '49vh', width: '294px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover'}} onClick={() => this.props.changeShowing(2)}>
                                <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center'}}>
                                              
                                        </CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '17.3vh', justifyContent: 'center'}}></CardTitle>
                                        
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid white 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.32em', fontFamily: "'Fredoka One'", position: 'relative'}}>8 Puzzle Solver</p>
                                    </Card> 
                                </Col>
                                <div className='separator' />

                    </ Row>
                </div>
        )
    }
}
export default ArtificialIntelligenceMain;