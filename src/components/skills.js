import React from 'react'
import { useHistory } from 'react-router-dom'

import background from '../images/background2.jpg'
import "../css/skills.css";

function Skills() {
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

            <div className="banner2">
                <h1>Marks</h1>
                <table cellSpacing="5">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Fact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2015</td>
                            <td>Started to use a pc</td>
                        </tr>
                        <tr>
                            <td>2017</td>
                            <td>Started to program with C</td>
                        </tr>
                        <tr>
                            <td>Mid 2017</td>
                            <td>Started to program with Python</td>
                        </tr>
                        <tr>
                            <td>Mid 2018</td>
                            <td>First contact with roblox lua programming</td>
                        </tr>
                        <tr>
                            <td>Mid 2019</td>
                            <td>Started to create my games</td>
                        </tr>
                        <tr>
                            <td>Late 2019</td>
                            <td>Started to learn hacking and web development</td>
                        </tr>
                        <tr>
                            <td>Early 2020</td>
                            <td>Started with frameworks such as: Node.js, React and React Native</td>
                        </tr>
                        <tr>
                            <td>Early-mid 2020</td>
                            <td>Created my first API and Dinamic Website</td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <hr/>
                <h1>Skills</h1>
            
                <table border="2" cellSpacing="5">
                    <thead>
                        <tr>
                            <th>Framework</th>
                            <th>Avaliation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>React</td>
                            <td><span role="img" aria-label="star">⭐⭐⭐⭐</span></td>
                        </tr>
                        <tr>
                            <td>React Native</td>
                            <td><span role="img" aria-label="star">⭐⭐</span></td>
                        </tr>
                        <tr>
                            <td>Node.js</td>
                            <td><span role="img" aria-label="star">⭐⭐⭐⭐⭐</span></td>
                        </tr>
                        <tr>
                            <td>Golang</td>
                            <td><span role="img" aria-label="star">⭐⭐⭐⭐</span></td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <hr/>
                <div>
                    <h1>Copyright</h1>

                    <a href="https://www.freepik.com/free-photos-vectors/technology">Technology vector created by dgim-studio -www.freepik.com</a>
                </div>
            </div>
        </>
    )
}

export default Skills
