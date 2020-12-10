import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';


class MusicAndDigitalSignalProcessingMain extends Component{

    constructor(props){
        super(props);
    }

    

    render(){
        return(
            <div className = "projects-grid">
                    <div className = "separator" />
                    <Grid>
                                <Cell col={2} /> 
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={() => this.props.changeShowing(0)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>PEDAL PI</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={() => this.props.changeShowing(1)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>PURE DATA</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={2} />
                    </ Grid>
                </div>
        )
    }
}

export default MusicAndDigitalSignalProcessingMain;