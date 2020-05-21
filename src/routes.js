import React from 'react'
import{
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Homepage from './components/homepage.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/projects.jsx'
import Error404 from './components/404.jsx'
import License from './components/license.jsx'

export default function RouteConfig(){
    console.log(process.env)
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/home" exact component={Homepage} />
                <Route path="/skills" exact component={Skills} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/license" exact component={License} />

                <Route path="*" component={Error404} />
            </Switch>
        </Router>
    )
}

