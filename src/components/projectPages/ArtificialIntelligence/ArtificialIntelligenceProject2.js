import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';
import {Row, Col} from 'react-bootstrap';

class ArtificialIntelligenceProject2 extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className = "projects-grid" >
            <div className = "separator" />
            <Grid style={{animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}>
            <Cell col={3} />
                                <Cell col={6} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#eee'}} onClick={this.props.changeShowing}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{background: 'url(https://img.pngio.com/headphones-icon-headphones-png-256_256.png) center', backgroundRepeat: 'no-repeat', height: '32vh', width: '100%', color: 'black', margin: 'auto', textAlign: 'center', animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}> 
                                        
                                        </CardTitle>
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.82em', fontFamily: "'Fredoka One'", position: 'relative', padding: '2px'}}>EUPHONOMIMESIS</p>                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <div className ='separatorTwo' />
                                        <p style={{color: '#556270', textAlign: 'center', width: '70%', justifyContent: 'center', margin: 'auto'}}>This project uses a library of audio clips in their original form from the time domain as well as their respective form in frequency domain, derived from applying a Fast Fourier Transform. Initialized by randomly selecting a single audio clip from the library and setting it as the ‘goal’, the program then aims to recreate the goal by combining the remaining library samples using genetic algorithm. The project’s name stems from euphonic (“pleasant sounding”) and mimesis (“imitation of the real”). Created with two other students, our interest and drive for creating this project resulted from our dual interest in AI/ML algorithms and DSP techniques for audio. </p>
                                        <CardActions className = 'cardButtons'>
                                            <Button  style={{fontSize: '1.45em', color: '#ee8d8d', backgroundColor: '#556270', paddingLeft: '2px', paddingRight: '2px', border: 'solid #0cf2ad 2px'}} colored>
                                                <a style={{color: '#ee8d8d', backgroundColor: '#556270'}} href='https://github.com/charboltron/euphonomimesis' target='_blank'>View on GitHub</a>
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

export default ArtificialIntelligenceProject2;