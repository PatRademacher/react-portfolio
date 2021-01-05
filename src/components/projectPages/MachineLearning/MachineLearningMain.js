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

class MachineLearningMain extends Component{

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
                                <Card shadow={5} style={{margin: 'auto', justifyContent: 'center', backgroundColor: 'white', opacity: '.8', height: '59vh', width: '324px', border: 'solid black 3px'}} onClick={() => this.props.changeShowing(0)}>
                                <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', justifyContent: 'center'}}> </CardTitle>
                                <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', justifyContent: 'center', width: '324px', height: '100%', background: 'url(https://www.researchgate.net/profile/Yuling_Jiao2/publication/330617733/figure/fig1/AS:718798407602176@1548386303228/Real-samples-and-generated-samples-obtained-by-VGrow-KL-on-MNIST_Q320.jpg) center', backgroundRepeat: 'no-repeat'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center'}}>
                                              
                                        </CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '1.3vh', justifyContent: 'center'}}></CardTitle>
                                        
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.32em', fontFamily: "'Fredoka One'", position: 'relative'}}>MNIST</p>
                                    </Card>
                                    <div className='separator' />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={4} xl={4} >
                                <Card shadow={5} style={{margin: 'auto', justifyContent: 'center', backgroundColor: 'white', opacity: '.8', height: '59vh', width: '324px', border: 'solid black 3px'}} onClick={() => this.props.changeShowing(1)}>
                                <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', justifyContent: 'center'}}> </CardTitle>
                                <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', justifyContent: 'center', width: '324px', height: '100%', background: 'url(https://www.researchgate.net/profile/Lubna_Emad/publication/331991626/figure/fig3/AS:740691793678336@1553606093170/The-initialization-stage_Q320.jpg) center', backgroundRepeat: 'no-repeat'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center'}}>
                                              
                                        </CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '1.3vh', justifyContent: 'center'}}></CardTitle>
                                        
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.32em', fontFamily: "'Fredoka One'", position: 'relative'}}>K MEANS & FUZZY C MEANS</p>
                                    </Card>
                                    
                                    <div className='separator' />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                                <Card shadow={5} style={{margin: 'auto', justifyContent: 'center', backgroundColor: 'white', opacity: '.8', height: '59vh', width: '324px', border: 'solid black 3px'}} onClick={() => this.props.changeShowing(2)}>
                                <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', justifyContent: 'center'}}> </CardTitle>
                                <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', justifyContent: 'center', width: '324px', height: '100%', background: 'url(https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/d5/5a/3a/d55a3a88-fb32-88c5-cba6-24120d5b8cdf/source/256x256bb.jpg) center', backgroundRepeat: 'no-repeat'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center'}}>
                                              
                                        </CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '1.3vh', justifyContent: 'center'}}></CardTitle>
                                        
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.32em', fontFamily: "'Fredoka One'", position: 'relative'}}>NBA LONGEVITY PREDICTOR</p>
                                    </Card>
                                    <div className='separator' />
                                </Col>
                                

                    </ Row>
                </div>
        )
    }
}
export default MachineLearningMain;