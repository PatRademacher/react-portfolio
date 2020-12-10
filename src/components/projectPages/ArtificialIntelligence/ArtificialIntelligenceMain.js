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
                    <Grid>
                                <Cell col={4}>
                                    <Card shadow={5} style={{width: '80%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4', opacity: '.5'}} onClick={() => this.props.changeShowing(0)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>{this.props.tester}</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                    </Card> 
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{margin: 'auto', justifyContent: 'center'}} onClick={() => this.props.changeShowing(1)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>8 Queens Solver Using Genetic Algorithm</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{margin: 'auto', justifyContent: 'center'}} onClick={() => this.props.changeShowing(2)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Euphonomimesis</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                    </Card>
                                </Cell>
                    </ Grid>
                </div>
        )
    }
}

export default ArtificialIntelligenceMain;