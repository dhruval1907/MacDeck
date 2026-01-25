import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWimdow = () => {
    return (
        <div>
            <Rnd>
                <div className="window">
                    <div className="nav"></div>
                    <div className="main-content"></div>
                </div>
            </Rnd>
        </div>
    )
}

export default MacWimdow