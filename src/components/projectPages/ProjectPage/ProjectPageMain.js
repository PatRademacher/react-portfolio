import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, CardMedia} from 'react-mdl';
import Paper from '@material-ui/core/Paper';
//import { Tabs } from '@material-ui/core';
//import Tab from '@material-ui/core/Tab';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {Row, Col} from 'react-bootstrap';

class ProjectPageMain extends Component{

    constructor(props){
        super(props);
        this.state={idk: 'wha wha wha'}
    }

    yeahYeah = () => {
        this.setState({idk: 'yea yea yea'})
    }

    render(){
        return(
            <div className = "projects-grid">
                    <div className = "separatorTwo" />
                    <p style={{lineHeight: '100%', color:  '#556270', backgroundColor: '#ee8d8d', border: 'solid #0cf2ad 4px', width: '47%', opacity: '1.0 !important', margin: 'auto', textAlign: 'center', justifyContent: 'center', fontSize: '2.12em', fontFamily: "'Fredoka One'", position: 'relative', padding: '2px'}}>Here you can view all of my projects I did throughout my master's. Click above to view them by their respective course.</p>
            </div>
        )
    }
}

export default ProjectPageMain;