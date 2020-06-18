import React from 'react'

import '../css/homepage.css'
import background from '../images/background.jpg'

const Homepage = () => {
    function handleImageClicks(){
        window.location.replace('https://github.com/leanonybr-7579')
    }

    document.querySelector('body').style.background = "#080450";
    return (
        <>
            <img onClick={handleImageClicks}
            src="https://avatars2.githubusercontent.com/u/58123754?s=400&v=4" alt=""/>

            <img className="background" src={background} alt=""/>
            <div className="block"></div>

            <div className="home-banner">
                <div className="info">
                    <hr/>
                    <h1>Ulisses Carvalho Dantas</h1>
                    <h3>
                        Hi, im a Junior Fullstack Developer, i use <strong>React and JQuery</strong> on the frontend and <strong>Node.js</strong><br/>    
                        on the backend. I have 6 months of experience with Web Development. Well, my brother,<br/>
                        my two cousins and my father teached me a lot of english and programming things, such as Python,<br/>
                        C++, C, <a href="https://www.urionlinejudge.com" style={{margin: 0}}>URI</a>, the Brazilian Olympics of Informatic and the basics of web development
                    </h3>
                    <p><em>
                        Github profile: <a href="https://github.com/leanonybr-7579">leanonybr-7579</a>
                    </em></p>
                </div>
                <hr/>
                <div>
                    <h1>Courses i took</h1>
                    <ul>
                        <li>React course(Brazilian): <a href="https://skylab.rocketseat.com.br/node/curso-react-js">Go to react course</a></li>
                        <li>Node.js course(Brazilian): <a href="https://skylab.rocketseat.com.br/node/curso-node-js">Go to node.js course</a></li>
                        <li>React Bootcamp(FREE): <a href="https://tylermcginnis.com/free-react-bootcamp/">Go to react bootcamp</a></li>
                        <li>Web dev bootcamp: <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">Go to web dev bootcamp</a></li>
                        <li>Node.js, Express, MongoDB & More: The Complete Bootcamp 2020: <a href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/">Go to node.js bootcamp</a></li>
                    </ul>
                </div>
                <hr/>
                <div>
                    <h1>Future projects</h1>

                    <h3>Facebuk</h3>
                    <p><em>
                        To challenge myself, i decided to re-create Facebook but as a lot of people know facebook<br/>
                        has real time comments, chat, groups, games, profiles and more. 
                    </em></p>
                    <p>Project: <strong><em>Comming soon</em></strong></p>
                    <br/>

                    <h3>Instachat</h3>
                    <p><em>
                        Same as facebuk, but this time i will re-create instagram and snapchat together
                    </em></p>
                    <p>Project: <strong><em>Comming soon</em></strong></p>
                    <br/>
                    <p><strong><span>So, this projects above are just copies, but im going to create original projects soon</span></strong></p>
                </div>
            </div>
        </>
    )
}
export default Homepage