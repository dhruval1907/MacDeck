import React, { useEffect, useState } from 'react'
import MacWindow from './MacWimdow'
import "./notes.scss"
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Notes = () => {
    const [markdown, setmarkdown] = useState(null)

    useEffect(() => {
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => setmarkdown(text))
    }, [])


    return (
        <MacWindow>
            <div className='note-window'>
                {markdown ? <SyntaxHighlighter language='typescript' style={atelierForestDark}>{markdown}</SyntaxHighlighter> : <p>Loading....</p>}
            </div>
        </MacWindow>
    )
}

export default Notes