import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';


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
                    <Grid>
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={() => this.props.changeShowing(0)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>look</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                    </Card> 
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={() => this.props.changeShowing(1)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>little</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={() => this.props.changeShowing(2)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>lad</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                    </Card>
                                </Cell>
                    </ Grid>
                </div>
        )
    }
}

export default MachineLearningMain;