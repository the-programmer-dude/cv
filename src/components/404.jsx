import React from 'react'
import { Link } from 'react-router-dom'

import '../css/404.css'
import error404 from '../images/404Error.jpg'

export default function Error404() {
    document.querySelector('body').style.background = "#0f001d"
    return (
        <div className="container">
            <h1>404 Not found</h1>
            <img className="error-404" src={error404} alt=""/>
            <p className="message-404">This is not the page, that you are looking for <Link to="/home" style={{margin: 0}}>Go home</Link></p>
        </div>
    )
}
