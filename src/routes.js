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
                <Route path="/cv/" exact component={Homepage}/>
                <Route path="/cv/home" exact component={Homepage} />
                <Route path="/cv/skills" exact component={Skills} />
                <Route path="/cv/projects" exact component={Projects} />
            </Switch>
        </Router>
    )
}

