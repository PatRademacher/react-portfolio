import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';


class ArtificialIntelligenceProject1 extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className = "projects-grid">
                    <div className = "separator" />
                    <Grid>
                    <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center'}} onClick={this.props.changeShowing}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '400px', height: '400px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4', animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Fart</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                    </ Grid>
                </div>
        )
    }
}

export default ArtificialIntelligenceProject1;