import React from 'react'
import MacWindow from './MacWimdow'
import "./resume.scss"
const Pdf = () => {
    return (
        <MacWindow>
            <div className='resume-window'>
                <iframe src="/DHRUVAL_CV.pdf" frameborder="0"></iframe>
            </div>
        </MacWindow>
    )
}

export default Pdf