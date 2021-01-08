import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';


class ModelingAndSimulationInPythonProject0 extends Component{

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
                                        <CardTitle style={{background: 'url(https://www.researchgate.net/profile/Tijana_Ivancevic/publication/1743757/figure/fig7/AS:279360897601538@1443616236130/Benard-cells-showing-a-typical-vortex-of-a-rolling-air-with-a-warm-air-rising-in-a-ring_Q320.jpg) center', backgroundRepeat: 'no-repeat', height: '32vh', width: '100%', color: 'black', margin: 'auto', textAlign: 'center', animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}> 
                                        
                                        </CardTitle>
                                        <div className ='separatorThree' />
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.82em', fontFamily: "'Fredoka One'", position: 'relative', padding: '2px'}}>LORENZ MUSIC GENERATOR</p>                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <div className ='separatorThree' />
                                        <p style={{color: '#556270', textAlign: 'center', width: '70%', justifyContent: 'center', margin: 'auto'}}>Probably my most unique and interesting project resulted from Modeling and Simulation in Python. The project guidelines were basically to create a simulation of our choice. Instead of approaching the project with simulating the outcome of a future event (as most others did), I decided to simulate different versions of Lorenz Systems built off audio data from music. Essentially, the audio data provided means for the graphing points in the Lorenz Systems in a chronological manner (for example, data from the beginning of the song aligned with the beginning points for the Lorenz). To put it altogether, the final product consisted of an animation video of the Lorenz being built with the according song playing in the background, almost acting like a visualizer or music video.</p>
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

export default ModelingAndSimulationInPythonProject0;