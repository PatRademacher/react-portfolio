import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';


class OpenSourceProject0 extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className = "projects-grid">
                    <Grid style={{animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}>
                    <Cell col={3} />
                                <Cell col={6} style={{justifyContent: 'center'}}>
                                    <Card shadow={5} style={{width: '100%', margin: 'auto', justifyContent: 'center', backgroundColor: '#eee'}} onClick={this.props.changeShowing}>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '20px', justifyContent: 'center'}}></CardTitle> 
                                        <CardTitle style={{background: 'url(https://icon-library.com/images/business_444.png) center', backgroundRepeat: 'no-repeat', height: '32vh', width: '100%', color: 'black', margin: 'auto', textAlign: 'center', animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}> 
                                        
                                        </CardTitle>
                                        <div className ='separatorThree' />
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.82em', fontFamily: "'Fredoka One'", position: 'relative', padding: '2px'}}>UNCLE BUCK FINANCE CALCULATOR</p>                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <div className ='separatorThree' />
                                        <p style={{color: '#556270', textAlign: 'center', width: '70%', justifyContent: 'center', margin: 'auto'}}>The final project for Open Source was completed by a group of me and three other students. Our task was to create an open source tool that was useful. It also had to make sense in regard to it being open source. We decided to build a website in React, which we called Uncle Buck: an open source tool with the purpose of assisting someone from a financial standpoint. We built our own financial calculator that returned helpful information based on users' answers to personal finance questions. Additionally, we provided articles pulled from an API that also had the objective of providing financial insight and advice.</p>
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

export default OpenSourceProject0;