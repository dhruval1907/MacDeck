import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({ children }) => {
    return (
        <div>
            <Rnd
                default={{
                    width :"",
                    height:"30vh",
                    x:100,
                    y:100
                }}
            >
                <div className="window">
                    <div className="nav">
                        <div className="dots">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="title"><p>dhruvalwindow -zsh</p></div>
                    </div>
                    <div className="main-content">
                        {children}
                    </div>
                </div>
            </Rnd>
        </div>
    )
}

export default MacWindow