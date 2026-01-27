import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import "./dock.scss"
import github from "../assets/doc-icons/github.svg"
import link from "../assets/doc-icons/link.svg"
import cli from "../assets/doc-icons/cli.svg"
import calender from "../assets/doc-icons/calender.svg"
import mail from "../assets/doc-icons/mail.svg"
import note from "../assets/doc-icons/note.svg"
import pdf from "../assets/doc-icons/pdf.svg"
import spotify from "../assets/doc-icons/spotify.svg"
import Pdf from '../windows/Pdf';
import Spotify from '../windows/Spotify';
import Command from '../windows/Command';
// import "../assets/doc-icons/guthub.svg"
const Dock = ({  setWindowsState }) => {
    return (
        <footer className='dock'>
            <div className='icons github'
                onClick={() => {
                    setWindowsState(state => ({ ...state, github: true }))
                }}
            >
                <img src={github} alt="" />
            </div>
            <div className='icons note'
                onClick={() => {
                    setWindowsState(state => ({ ...state, notes: true }))
                }}
            >
                <img src={note} alt="" />
            </div>
            <div className='icons pdf'
                onClick={() => {
                    setWindowsState(state => ({ ...state, Pdf: true }))
                }}
            >
                <img src={pdf} alt="" />
            </div>
            <div className='icons calender'>
                <img src={calender} alt="" />
            </div>
            <div className='icons spotify'
                onClick={() => {
                    setWindowsState(state => ({ ...state, Spotify: true }))
                }}
            >
                <img src={spotify} alt="" />
            </div>
            <div className='icons mail'>
                <img src={mail} alt="" />
            </div>
            <div className='icons link'>
                <img src={link} alt="" />
            </div>
            <div className='icons cli'
                onClick={() => {
                    setWindowsState(state => ({ ...state, Commmand: true }))
                }}
            >
                <img src={cli} alt="" />
            </div>
        </footer>
    )
}

export default Dock