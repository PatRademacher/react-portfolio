import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';
import {Row, Col} from 'react-bootstrap';

class SoftwareEngineeringMain extends Component{

    constructor(props){
        super(props);
        this.state={idk: 'wha wha wha'}
    }

    

    render(){
        return(
            <div className = "projects-grid">
                     <div className = "separator" />
                    <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                                <Card shadow={5} style={{margin: 'auto', justifyContent: 'center', backgroundColor: 'white', opacity: '.8', height: '64vh', width: '354px', border: 'solid black 3px'}} onClick={() => this.props.changeShowing(0)}>
                                <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', justifyContent: 'center'}}> </CardTitle>
                                <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', justifyContent: 'center', background: 'url(https://avatars2.githubusercontent.com/u/352744?s=280&v=4) center', backgroundRepeat: 'no-repeat', width: '324px', height: '100%'}}></CardTitle> 
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center'}}>
                                              
                                        </CardTitle>
                                        <CardTitle style={{color: 'black', margin: 'auto', textAlign: 'center', padding: '1.3vh', justifyContent: 'center'}}></CardTitle>
                                        
                                        <p style={{color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 2px', width: '100%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '1.32em', fontFamily: "'Fredoka One'", position: 'relative'}}>MIT BATTLECODE</p>
                                    </Card>
                                    <div className='separator' />
                                </Col>
                                

                    </ Row>
                </div>
        )
    }
}

export default SoftwareEngineeringMain;