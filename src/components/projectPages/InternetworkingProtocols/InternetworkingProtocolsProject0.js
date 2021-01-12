import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';


class InternetworkingProtocolsProject0 extends Component{

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
                                        <CardTitle style={{background: 'url(https://cdn.iconscout.com/icon/free/png-256/chat-2639493-2187526.png) center', backgroundRepeat: 'no-repeat', height: '32vh', width: '100%', color: 'black', margin: 'auto', textAlign: 'center', animationName: 'stretch', animationDuration: '1.5s', animationTimingFunction: 'ease-out', animationDelay: '0', animationDirection: 'alternate',animationIterationCount: '1', animationFillMode: 'none', animationPlayState: 'running'}}> 
                                        
                                        </CardTitle>
                                        <div className ='separatorThree' />
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.82em', fontFamily: "'Fredoka One'", position: 'relative', padding: '2px'}}>PAT CHAT</p>                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', width: '276px', padding: '1px', justifyContent: 'center'}}></CardTitle>
                                        <div className ='separatorThree' />
                                        <p style={{color: '#556270', textAlign: 'center', width: '70%', justifyContent: 'center', margin: 'auto'}}>With the task of building a messaging application with a programming language of our choice, another student and I created PAT CHAT. We decided to go with Python, which then called for integrating its respective threading and socket modules. The end result was a successful chatroom application with features such as users creating their own username and password, the ability to create and delete their own chatrooms and chatroom themes, and communication with other app users if on the same local network.</p>
                                        <CardActions className = 'cardButtons'>
                                            <Button  style={{fontSize: '1.45em', color: '#ee8d8d', backgroundColor: '#556270', paddingLeft: '2px', paddingRight: '2px', border: 'solid #0cf2ad 2px'}} colored>
                                                <a style={{color: '#ee8d8d', backgroundColor: '#556270'}} href='https://github.com/tlan2/instant_message_chatroom' target='_blank'>View on GitHub</a>
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

export default InternetworkingProtocolsProject0;