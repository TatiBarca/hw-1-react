import React from "react";
import './style.css';
import icon from '../images/reactjs-icon 2.png'

export const MainContent = () => {
    return(
        <div className="content">
            <h1 className="contTitle">Fun facts about React</h1>
            <ul className="list">
                <li className="item">Was first released in 2013</li>
                <li className="item">Was originally created by Jordan Walke</li>
                <li className="item">Has well over 100K stars on GitHub</li>
                <li className="item">Is maintained by Facebook</li>
                <li className="item">Powers thousands of enterprise apps, including <br /> mobile apps</li>
            </ul>
            <img className="iconReact" src={icon} alt="" />
        </div>
    )
}