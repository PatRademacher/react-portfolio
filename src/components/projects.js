import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';
import Paper from '@material-ui/core/Paper';
//import { Tabs } from '@material-ui/core';
//import Tab from '@material-ui/core/Tab';
import teslaLogo from './Tesla-01.png';
import sudokuVector from './sudokuVector.jpg';
import MLProject1PDF from './rademacher_ml_code1_writeup.pdf';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import pic0 from "./aiMedium.jpg";
import pic1 from "./machinelearningMedium.jpg";
import pic2 from "./databasesMedium.jpg";
import pic3 from "./internetMedium.jpg";
import pic4 from "./puredataMedium.jpg";
import pic5 from "./softwareengineeringMedium.jpg";
import pic6 from "./functionalprogrammingMedium.png";
import pic7 from "./frontendMedium.jpg";
import pic8 from "./fractalMedium.jpg";
import pic9 from "./algorithmsMedium.jpg";
import pic10 from "./theorycompMedium.jpg";
import pic11 from "./quantumMedium.jpg";
import pic12 from "./opensourceMedium.jpg";
import pic13 from "./numcompMedium.jpg";
import pic14 from "./modelingMedium.jpg";





let TabContainer = (props) => {
return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}



const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  label: {
    color: "magenta"
  },
  indicator: {
    bottom: "none",
    backgroundColor: "none !important",
    color: "none !important",
    borderColor: 'none',
    outline: 'none !important',
    opacity: '1'
  }
});

class Projects extends Component {
    
    constructor(props){
        super(props);
        this.state = { value: null,
                       rowIndex: 0, 
                       topRow: "primary", 
                       bottomRow: "none", 
                       middleTopRow: "none", 
                       middleBottomRow: "none", 
                       bottomBottomRow: "none",
                       tabValues: [1, 1, 1, 1, 1],
                       show: [false, false, false],
                       currentlyShowing: false};
    }

    


    handleChange = (event, value) => {
        //this.setState({value: value });
        console.log('hot dogs')
        console.log(this.state.show)

      };

    handleChangeTop = (event, newValue) => {
       this.setState({value: newValue});
       this.setState({topRow: "primary", 
                      middleTopRow: "none", 
                      middleBottomRow: "none", 
                      bottomRow: "none", 
                      bottomBottomRow: "none",
                      show: [false, false, false],
                     // currentlyShowing: false,
                      tabValues: [newValue, null, null, null, null],
                      //rowIndex: "0"
                      });
        console.log(this.state.topRow);
        console.log(this.state.middleTopRow);
        console.log(this.state.middleBottomRow);
        console.log(this.state.bottomRow);
        console.log(this.state.bottomBottomRow);
        console.log(this.state.tabValues)
        console.log(this.state.show)
        console.log(this.state.rowIndex)
    }

    handleChangeMiddleTop = (event, newValue) => {
        this.setState({value: newValue});
        this.setState({middleTopRow: "primary", 
                       middleBottomRow: "none", 
                       topRow: "none", 
                       bottomRow: "none", 
                       bottomBottomRow: "none",
                       //show: [false, false, false],
                       //currentlyShowing: false,
                       tabValues: [null, newValue, null, null, null]
                    });
                    console.log(this.state.topRow);
                    console.log(this.state.middleTopRow);
                    console.log(this.state.middleBottomRow);
                    console.log(this.state.bottomRow);
                    console.log(this.state.bottomBottomRow);
                    console.log(this.state.tabValues)
                    console.log(this.state.show)
                    console.log(this.state.rowIndex)
    }

    handleChangeMiddleBottom = (event, newValue) => {
        this.setState({value: newValue});
        this.setState({middleBottomRow: "primary", 
                       middleTopRow: "none", 
                       topRow: "none", 
                       bottomRow: "none", 
                       bottomBottomRow: "none",
                       //show: [false, false, false],
                       //currentlyShowing: false,
                       tabValues: [null, null, newValue, null, null],
                       rowIndex: 0
                    });
                    console.log(this.state.topRow);
                    console.log(this.state.middleTopRow);
                    console.log(this.state.middleBottomRow);
                    console.log(this.state.bottomRow);
                    console.log(this.state.bottomBottomRow);
                    console.log(this.state.tabValues);
                    console.log(this.state.show)
                    console.log(this.state.rowIndex)
    }

    handleChangeBottom = (event, newValue) => {
        this.setState({value: newValue});
        this.setState({bottomRow: "primary", 
                       topRow: "none", 
                       middleTopRow: "none", 
                       middleBottomRow: "none", 
                       bottomBottomRow: "none",
                       //show: [false, false, false],
                       //currentlyShowing: false,
                       tabValues: [null, null, null, newValue, null],
                       rowIndex: "0"
                    });
                    console.log(this.state.topRow);
                    console.log(this.state.middleTopRow);
                    console.log(this.state.middleBottomRow);
                    console.log(this.state.bottomRow);
                    console.log(this.state.bottomBottomRow);
                    console.log(this.state.tabValues) 
                    console.log(this.state.show)
        console.log(this.state.rowIndex)                  
    }

    handleChangeBottomBottom = (event, newValue) => {
        this.setState({value: newValue});
        this.setState({bottomBottomRow: "primary", 
                       topRow: "none", 
                       middleTopRow: "none", 
                       middleBottomRow: "none", 
                       bottomRow: "none",
                       //show: [false, false, false],
                       //currentlyShowing: false,
                       tabValues: [null, null, null, null, newValue],
                       rowIndex: "0"
                    });
                    console.log(this.state.topRow);
                    console.log(this.state.middleTopRow);
                    console.log(this.state.middleBottomRow);
                    console.log(this.state.bottomRow);
                    console.log(this.state.bottomBottomRow);
                    console.log(this.state.tabValues);
                    console.log(this.state.show)
                    console.log(this.state.rowIndex)
    }
    
    handleShowCard = (event, rowIndy, numberOfItems) => {
        let boolean = null;
        if (this.state.currentlyShowing !== true){
            boolean = true;
            let cards = [];
            for (let i = 0; i < numberOfItems; i++){
                if (i === rowIndy){
                    cards.push(true);
                }
                else{
                    cards.push(false);
                }
            }
        
            this.setState({show: {...cards}});
            this.setState({rowIndex: rowIndy});
        }
        else{
            boolean = false;
            let cards = [];
            for (let i = 0; i < numberOfItems; i++){
                cards.push(false);
            }
            this.setState({show: {...cards}, rowIndex: rowIndy})
        }

        this.setState({currentlyShowing: boolean})
        console.log(this.state.currentlyShowing);
    }

    toggleCategories(){
        if (this.state.value === 0 && this.state.topRow === "primary" && (this.state.rowIndex === 0)){
            let numOfItems = 3;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic0})`, height:'1500px'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>8 Puzzle Solver Using a*</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                    </Card> 
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 1, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>8 Queens Solver Using Genetic Algorithm</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 2, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Euphonomimesis</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                    </Card>
                                </Cell>
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '400px', height: '400px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4', animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>8 Puzzle Solver Using a*</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
                </div>
            )
        }

        else if(this.state.value === 0 && this.state.topRow === "primary" && this.state.rowIndex === 1){
            let numOfItems = 3;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic0})`, height:'1500px'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4', animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: 'infinite', animationFillMode: 'none', animationPlayState: 'running'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>8 Puzzle Solver Using a*</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                    </Card> 
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 1, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>8 Queens Solver Using Genetic Algorithm</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 2, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Euphonomimesis</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText></CardText>
                                    </Card>
                                </Cell>
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 1, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>8 Queens Solver Using Genetic Algorithm</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
                </div>
            )
        }

        else if (this.state.value === 0 && this.state.topRow === "primary" && this.state.rowIndex === 2){
            let numOfItems = 3;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic0})`, height:'1500px'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>8 Puzzle Solver Using a*</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>   
                                    </Card> 
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 1, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>8 Queens Solver Using Genetic Algorithm</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                 <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 2, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Euphonomimesis</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText></CardText>    
                                    </Card>
                                </Cell>
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 2, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Euphonomimesis</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    }

    else if(this.state.value === 1 && this.state.topRow === "primary" && this.state.rowIndex === 0){
        let numOfItems = 3;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic1})`, height:'1500px'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>MNIST Handwritten Data Recognition</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>   
                                    </Card> 
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 1, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>K Means and Fuzzy C Means Clustering</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 2, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>NBA Draft Pick - Longevity Predictor</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText></CardText>    
                                    </Card>
                                </Cell>
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>MNIST Handwritten Digit Recognition</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    }

    else if(this.state.value === 1 && this.state.topRow === "primary" && this.state.rowIndex === 1){
        let numOfItems = 3;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic1})`, height:'1500px'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>MNIST Handwritten Data Recognition</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>   
                                    </Card> 
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 1, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>K Means and Fuzzy C Means Clustering</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 2, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>NBA Draft Pick - Longevity Predictor</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText></CardText>    
                                    </Card>
                                </Cell>
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 1, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>K Means and Fuzzy C Means Clustering</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    }

    else if(this.state.value === 1 && this.state.topRow === "primary" && this.state.rowIndex === 2){
        let numOfItems = 3;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic1})`, height:'1500px'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>MNIST Handwritten Data Recognition</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>   
                                    </Card> 
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 1, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>K Means and Fuzzy C Means Clustering</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 2, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>NBA Draft Pick - Longevity Predictor</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText></CardText>    
                                    </Card>
                                </Cell>
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 2, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>NBA Draft Pick - Longevity Predictor</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    }

    else if(this.state.value === 2 && this.state.topRow === "primary" && this.state.rowIndex === 0){
        let numOfItems = 1;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic2})`, height:'1500px'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4} />
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>K Means and Fuzzy C Means Clustering</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4} /> 
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>NBA Draft Pick - Longevity Predictor</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    }


    
    else if(this.state.value === 0 && this.state.middleTopRow === "primary" && this.state.rowIndex === 0){
        let numOfItems = 1;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic3})`, height:'1500px'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4} />
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>PAT CHAT</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4} /> 
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>PAT CHAT</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    }

    else if(this.state.value === 1 && this.state.middleTopRow === "primary" && this.state.rowIndex === 0){
        let numOfItems = 2;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic4})`, height:'1500px'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={2} />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Pedal Pi</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>   
                                    </Card> 
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 1, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Pure Data Synthesizer</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText></CardText>    
                                    </Card>
                                </Cell>
                                <div className="separator" />
                                <Cell col={2} />
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Pedal Pi</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    }
    else if(this.state.value === 1 && this.state.middleTopRow === "primary" && this.state.rowIndex === 1){
        let numOfItems = 2;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic4})`, height:'1500px'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={2} />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://www.8puzzle.com/images/8_puzzle_start_state_a.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Pedal Pi</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>   
                                    </Card> 
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 1, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Pure Data Synthesizer</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText></CardText>    
                                    </Card>
                                </Cell>
                                <div className="separator" />
                                <Cell col={2} />
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 1, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Pure Data Synthesizer</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    }

    else if(this.state.value === 2 && this.state.middleTopRow === "primary" && this.state.rowIndex === 0){
        let numOfItems = 1;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic5})`, height:'1500px'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4} />
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Battlecode</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4} /> 
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Battle Code</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    } 

    else if(this.state.value === 0 && this.state.middleBottomRow === "primary" && this.state.rowIndex === 0){
        let numOfItems = 1;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic6})`, height:'1500px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4} />
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Sudoku Solver</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4} /> 
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Sudoku Solver</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    }
            
    else if(this.state.value === 1 && this.state.middleBottomRow === "primary" && this.state.rowIndex === 0){
        let numOfItems = 1;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic7})`, height:'1500px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4} />
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Batter on Deck</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4} /> 
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Batter on Deck</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    }                    
    
    else if(this.state.value === 2 && this.state.middleBottomRow === "primary" && this.state.rowIndex === 0){
        let numOfItems = 1;
            return(
                <div className = "projects-grid" style={{backgroundImage: `url(${pic8})`, height:'1500px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                    <div className = "separator" />
                    <Grid>
                        {!this.state.show[this.state.rowIndex] ?
                            <> 
                                <Cell col={4} />
                                <div className = "separator" />
                                <Cell col={4}>
                                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://lh3.googleusercontent.com/proxy/B-z3Yav4LMQqQq1PiDPfxx5s8IGjmeV5KKyU_spHlI8YtdgYgsdDYDDnvnX1h-q0kQNr1mtAGlv9ydsCaEy1uasNdQo54P765FwpmgEUmhOiILMr7Q) center / cover'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Batter on Deck</CardTitle>
                                    </Card>
                                </Cell>
                                <div className = "separator" />
                                <Cell col={4} /> 
                            </> 
                        : 
                            <>
                                <Cell col={1} />
                                <Cell col={10} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#4ecdc4'}} onClick={(e) => this.handleShowCard(e, 0, numOfItems)} >
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', height: '276px', background: 'url(https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/876278/540440_888913.png) center / cover', backgroundColor: '#4ecdc4'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '20px', justifyContent: 'center'}}></CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}>Batter on Deck</CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <CardText style={{textAlign: 'center'}}>The puzzle solver is a classic and a pretty neat AI demonstration which shows how an agent can solve a "sliding puzzle" like the one below. This project compares several different algorithms including Best First Search and A* with three different heuristics: Manhattan distance, misplaced tiles, and row/column misplacement. I first wrote the solver for the puzzle with 8 pieces and later added a script to solve the larger 15 piece puzzle, where a sample solution is shown on the right.</CardText>
                                        <CardActions className = 'cardButtons'>
                                            <Button colored>View on GitHub</Button> 
                                        </CardActions>
                                    </Card>
                                </Cell>
                                <Cell col={1} />
                            </>
                        }
                    </Grid>
            </div>
        )
    }
                        }
                        
                                
                            
                           
                        


    render() {
          const { classes } = this.props;
          const { value } = this.state;
        return(
            
            <div style={{backgroundColor: '#eee'}} >
                
                <Tabs  indicatorColor={this.state.topRow} classes={{indicator: classes.indicator}} variant="fullWidth" value={this.state.tabValues[0]} onChange={this.handleChangeTop} ripple>
                    <Tab className="tabz" label="Artificial Intelligence"></Tab>
                    <Tab className="tabz" label="Machine Learning"></Tab>
                    <Tab className="tabz" label="Databases"></Tab>
                </Tabs>
               
                
                <Tabs variant="fullWidth" indicatorColor={this.state.middleTopRow} classes={{indicator: classes.indicator}} value={this.state.tabValues[1]} onChange={this.handleChangeMiddleTop} ripple>
                    <Tab className="tabz" label="Internetworking Protocols"></Tab>
                    <Tab className="tabz" label="Music and Digital Signal Processing"></Tab>
                    <Tab className="tabz" label="Software Engineering"></Tab>
                </Tabs>

                <Tabs variant="fullWidth" indicatorColor={this.state.middleBottomRow} classes={{indicator: classes.indicator}} value={this.state.tabValues[2]} onChange={this.handleChangeMiddleBottom} ripple>
                    <Tab className="tabz" label="Functional Programming"></Tab>
                    <Tab className="tabz" label="Front-End Web Development"></Tab>
                    <Tab className="tabz" label="Fractals"></Tab>
                </Tabs>

                <Tabs variant="fullWidth" indicatorColor={this.state.bottomRow} classes={{indicator: classes.indicator}} value={this.state.tabValues[3]} onChange={this.handleChangeBottom} ripple>
                    <Tab className="tabz" label="Algorithms"></Tab>
                    <Tab className="tabz" label="Theory of Computation"></Tab>
                    <Tab className="tabz" label="Quantum Computing"></Tab>
                </Tabs>

                <Tabs variant="fullWidth" indicatorColor={this.state.bottomBottomRow} classes={{indicator: classes.label}} value={this.state.tabValues[4]} onChange={this.handleChangeBottomBottom} ripple>
                    <Tab className="tabz" label="Open Source"></Tab>
                    <Tab className="tabz" label="Numerical Computation" ></Tab>
                    <Tab className="tabz" label="Modeling and Simulation in Python" ></Tab>
                </Tabs>

                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(styles)(Projects);
