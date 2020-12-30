import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main.js';
import { Link } from 'react-router-dom';
//import { faGasPump, faHome } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

    constructor(props){
        super(props);
        this.state={
            navHeight: '8vh'
        }
    }

    render() {

        let navHeight = (window.innerHeight * .55).toString() + 'px';
        return (
            <div className="demo-big-content" >
                <Layout style={{top: '0', height: '100vh'}}>
                    <Header className="header-color" style={{height: this.state.navHeight, minHeight: '5px'}} title={<Link style={{color: 'white'}} to="/">My Portfolio</Link>} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black', }} to="/">My Portfolio</Link>} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                
                <div className="page-content"  />
                <Main /> 
                </Layout>

            </div>
        );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I believe in Hua Mulan'), React.createElement('p', null, '...as do I...'), React.createElement('person', null, null));
    }
}

export default App;