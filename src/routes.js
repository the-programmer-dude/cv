import React from 'react'
import{
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Homepage from './components/homepage'
import Skills from './components/skills'
import Projects from './components/projects'

export default function RouteConfig(){
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/home" exact component={Homepage} />
                <Route path="/skills" exact component={Skills} />
                <Route path="/projects" exact component={Projects} />
            </Switch>
        </Router>
    )
}

