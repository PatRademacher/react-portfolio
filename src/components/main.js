import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutMe';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import TestingPage from './testingpage';
import { Switch, Route } from 'react-router-dom';


const Main = () => (
        <Switch>
            <Route exact path="/" component ={LandingPage} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={TestingPage} />
            <Route path="/contact" component={Contact} />
        </Switch>
)

export default Main;