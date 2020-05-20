import React from 'react'
import { useHistory } from 'react-router-dom'

import '../css/homepage.css'
import background from '../images/background.jpg'

const Homepage = () => {
    const history = useHistory();
    function handleImageClicks(){
        history.push('https://github.com/leanonybr-7579')
    }

    return (
        <>
            <img onClick={handleImageClicks}
            src="https://avatars2.githubusercontent.com/u/58123754?s=400&v=4" alt=""/>

            <img className="background" src={background} alt=""/>
            <div className="block"></div>

            <div className="banner3">
                <h1>My projects</h1><br/>
                <div>
                    <h3>JS-Hunt Products</h3>
                    <p>
                        This project is a project that simulates online products info, but all the <br/>
                        are just frameworks
                    </p>
                    <p>Project: <a href="https://github.com/leanonybr-7579/JSHunt-products/">JSHunt-products</a></p>
                </div>
                <br/>
    
                <div>
                    <h3>Calculator</h3>
                    <p>
                        This project is very easy to do, but when i created it, i was starting with HTML, CSS and JS.<br/>
                        So this project marked my starting phase on programming, and that's why im going to include it here
                    </p>
                    <p>Project: <a href="https://github.com/leanonybr-7579/Calculator">Calculator</a></p>
                </div>
                <br/>
                <div>
                    <h3>DevRadar</h3>
                    <p>
                        I like this one. The objective of this application is to find devs who work with the frameworks and<br/>
                        languages that you provided, and more, it will search based on the current place you are.<br/>
                        In the frontend you can register your dev, in the mobile you can search for the dev.
                    </p>
                    <p>Project: <a href="https://github.com/leanonybr-7579/semanaomnistack10">DevRadar</a></p>
                </div>
                <hr/>
                <div>
                    <h1>Copyright</h1>
                    <a href="https://www.freepik.com/free-photos-vectors/abstract">Abstract vector created by fullvector - www.freepik.com</a>
                </div>
            </div>
        </>
    )
}
export default Homepage