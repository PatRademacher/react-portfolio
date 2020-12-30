import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';
import {Row, Col} from 'react-bootstrap';

class ArtificialIntelligenceProject1 extends Component{

    constructor(props){
        super(props);
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

export default ArtificialIntelligenceProject1;