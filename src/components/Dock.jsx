import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import "./dock.scss"

const Dock = () => {
    return (
        <div>
            <footer>
                <div className='icons'>
                    <img src="/doc-icons/github.svg" alt="" />
                </div>
                <div className='icons'>
                    <img src="/doc-icons/note.svg" alt="" />
                </div>
                <div className='icons'>
                    <img src="/doc-icons/pdf.svg" alt="" />
                </div>
                <div className='icons'>
                    <img src="/doc-icons/calender.svg" alt="" />
                </div>
                <div className='icons'>
                    <img src="/doc-icons/spotify.svg" alt="" />
                </div>
                <div className='icons'>
                    <img src="/doc-icons/mail.svg" alt="" />
                </div>
                <div className='icons'>
                    <img src="/doc-icons/link.svg" alt="" />
                </div>
                <div className='icons'>
                    <img src="/doc-icons/cli.svg" alt="" />
                </div>
            </footer>
        </div>
    )
}

export default Dock