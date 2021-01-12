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
                    <Cell col={3} />
                                <Cell col={6} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#eee'}} onClick={this.props.changeShowing}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', height: '32vh', animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}> 
                                        <div style={{justifyContent: 'center', margin: 'auto', width: '100%'}}>
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
                                                                                <div className = 'separatorTwo' />

                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.82em', fontFamily: "'Fredoka One'", position: 'relative', padding: '2px'}}>8 QUEENS SOLVER</p>                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <div className ='separatorTwo' />
                                        <p style={{color: '#556270', textAlign: 'center', width: '70%', justifyContent: 'center', margin: 'auto'}}>This program starts with eight queens randomly disbursed across a chessboard. Using a genetic algorithm, this program will eventually find a solution to place all eight queens in their own row and column.</p>
                                        <CardActions className = 'cardButtons'>
                                            <Button  style={{fontSize: '1.45em', color: '#ee8d8d', backgroundColor: '#556270', paddingLeft: '2px', paddingRight: '2px', border: 'solid #0cf2ad 2px'}} colored>
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

export default ArtificialIntelligenceProject1;