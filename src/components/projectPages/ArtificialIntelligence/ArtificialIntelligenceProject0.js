import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';
import {Row, Col} from 'react-bootstrap';

class ArtificialIntelligenceProject0 extends Component{

    constructor(props){
        super(props);
        this.state={idk: 'wha wha wha'}
    }


    render(){
        return(
            <div className = "projects-grid" >
                    <div className = "separator" />
                    <Grid style={{animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}>
                    <Cell col={2} />
                                <Cell col={8} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center'}} onClick={this.props.changeShowing}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', height: '32vh', animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}> 
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
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>{this.props.tester}</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={2} />
                    </ Grid>
                </div>
        )
    }
}

export default ArtificialIntelligenceProject0;