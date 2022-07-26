import React from "react"
import './style.css'
import img from '../images/Group.png'


export const Navbar = () => {
    return(
        <div className="nav">
            <div className="navText">
                <img src={img} alt="" />
                <span className="navTitle">ReactFacts</span>
            </div>
            <p className="navAbout">React Course - Project 1</p>
        </div>
    )
}