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
                    <Cell col={3} />
                                <Cell col={6} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#eee'}} onClick={this.props.changeShowing}>
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
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.82em', fontFamily: "'Fredoka One'", position: 'relative', padding: '2px'}}>8 PUZZLE SOLVER</p>                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <div className ='separatorTwo' />
                                        <p style={{color: '#556270', textAlign: 'center', width: '70%', justifyContent: 'center', margin: 'auto'}}>This program solves the classic game known as 8 Puzzle by using search algorithms such as A* in combination with three different heuristics -- Manhatten Distance, Number of Misplaced Tiles, and Number of Inversions. </p>
                                        <CardActions className = 'cardButtons'>
                                            <Button  style={{fontSize: '1.45em', color: '#ee8d8d', backgroundColor: '#556270', paddingLeft: '2px', paddingRight: '2px', border: 'solid #0cf2ad 2px'}} colored>
                                                <a style={{color: '#ee8d8d', backgroundColor: '#556270'}} href='https://github.com/PatRademacher/AI-8-Puzzle' target='_blank'>View on GitHub</a>
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

export default ArtificialIntelligenceProject0;