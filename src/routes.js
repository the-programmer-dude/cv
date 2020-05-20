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
                <Route path={`${process.env.PUBLIC_URL}/`} exact component={Homepage}/>
                <Route path={`${process.env.PUBLIC_URL}/home`} exact component={Homepage} />
                <Route path={`${process.env.PUBLIC_URL}/skills`} exact component={Skills} />
                <Route path={`${process.env.PUBLIC_URL}/projects`} exact component={Projects} />
            </Switch>
        </Router>
    )
}

