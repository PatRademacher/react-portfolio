import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';


class MusicAndDigitalSignalProcessingProject1 extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className = "projects-grid">
                    <div className = "separator" />
                    <Grid style={{animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}>
                    <Cell col={3} />
                                <Cell col={6} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#eee'}} onClick={this.props.changeShowing}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{background: 'url(https://findicons.com/files/icons/2315/default_icon/256/media_synth.png) center', backgroundRepeat: 'no-repeat', height: '32vh', width: '100%', color: 'black', margin: 'auto', textAlign: 'center', animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}> 
                                        
                                        </CardTitle>
                                        <div className ='separatorThree' />
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.82em', fontFamily: "'Fredoka One'", position: 'relative', padding: '2px'}}>PURE DATA SYNTHESIZER</p>                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <div className ='separatorThree' />
                                        <p style={{color: '#556270', textAlign: 'center', width: '70%', justifyContent: 'center', margin: 'auto'}}>Along with two other students, our group used a program called Pure Data to create our own digital synthesizer. In addition to basic synthesizer functionalities, we also implemented a phaser, an effects loop, and an arpeggiator. We also used various display features such as coloring and blinking for buttons and knobs from the synthesizeral as additional means to demonstrate how these features worked.</p>
                                        <CardActions className = 'cardButtons'>
                                            <Button  style={{fontSize: '1.45em', color: '#ee8d8d', backgroundColor: '#556270', paddingLeft: '2px', paddingRight: '2px'}} colored>
                                                <a style={{color: '#ee8d8d', backgroundColor: '#556270'}} href='https://github.com/PatRademacher/AI-8-Queens' target='_blank'>View on GitHub</a>
                                            </Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={3} />
            </ Grid>
        </div>
        )
    }
}

export default MusicAndDigitalSignalProcessingProject1;