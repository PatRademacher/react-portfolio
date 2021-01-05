import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';
import {Row, Col} from 'react-bootstrap';

class DatabasesProject0 extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className = "projects-grid">
                     <div className = "separatorThree" />
                    <Row style={{animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}>
                    <Col xs={2} sm={2} md={2} lg={3} xl={3} />
                                <Col xs={8} sm={8} md={8} lg={6} xl={6} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#eee'}} onClick={this.props.changeShowing}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{background: 'url(https://free-icon-rainbow.com/i/icon_05411/icon_054110_256.jpg) center', backgroundRepeat: 'no-repeat', height: '32vh', width: '100%', color: 'black', margin: 'auto', textAlign: 'center', animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}> 
                                        
                                        </CardTitle>
                                        <div className ='separatorThree' />
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.82em', fontFamily: "'Fredoka One'", position: 'relative', padding: '2px'}}>TESLA DATABASE</p>                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <div className ='separatorThree' />
                                        <p style={{textAlign: 'center', width: '84%', justifyContent: 'center', margin: 'auto'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</p>
                                        <CardActions className = 'cardButtons'>
                                            <Button style={{fontSize: '1.45em'}} colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Col>
                                <Col xs={2} sm={2} md={2} lg={3} xl={3} />
            </ Row>
        </div>
        )
    }
}

export default DatabasesProject0;