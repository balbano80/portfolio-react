import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './landing';
import About from './about';
import Projects from './projects';
import Contact from './contact';

const Main = () => (
    <div>
        <Switch>
            <Route exact path = "/" component={Landing}/>
            <Route exact path = "/about" component={About}/>
            <Route exact path = "/projects" component={Projects}/>
            <Route exact path = "/contact" component={Contact} />
        </Switch>
    </div>
);

export default Main;