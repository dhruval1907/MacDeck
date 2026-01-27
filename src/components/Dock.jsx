import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import "./dock.scss"
import github from "../assets/doc-icons/github.svg"
import link from "../assets/doc-icons/link.svg"
import cli from "../assets/doc-icons/cli.svg"
import mail from "../assets/doc-icons/mail.svg"
import note from "../assets/doc-icons/note.svg"
import pdf from "../assets/doc-icons/pdf.svg"
import spotify from "../assets/doc-icons/spotify.svg"
// import "../assets/doc-icons/guthub.svg"
const Dock = () => {
    return (
        <footer className='dock'>
            <div className='icons github'>
                <img src={github} alt="" />
            </div>
            <div className='icons note'>
                <img src={note} alt="" />
            </div>
            <div className='icons pdf'>
                <img src={pdf} alt="" />
            </div>
            <div className='icons calender'>
                <img src={cli} alt="" />
            </div>
            <div className='icons spotify'>
                <img src={spotify} alt="" />
            </div>
            <div className='icons mail'>
                <img src={mail} alt="" />
            </div>
            <div className='icons link'>
                <img src={link} alt="" />
            </div>
            <div className='icons cli'>
                <img src={cli} alt="" />
            </div>
        </footer>
    )
}

export default Dock