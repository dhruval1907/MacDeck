import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'
import apple from "../assets/navbar-icons/apple.svg";
import wifi from "../assets/navbar-icons/wifi.svg";

const Nav = () => {
    return (
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src={apple} alt="" />
                </div>
                <div className='nav-item'>
                    <p>afdhruval</p>
                </div>
                <div className='nav-item'>
                    <p>File</p>
                </div>
                <div className='nav-item'>
                    <p>Window</p>
                </div>
                <div className='nav-item'>
                    <p>Terminal</p>
                </div>
            </div>
            <div className="right">
                <img src={wifi} alt="" />
                <div className='nav-item'>
                    <DateTime />
                </div>
            </div>
        </nav>
    )
}

export default Nav