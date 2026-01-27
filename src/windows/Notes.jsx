import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWimdow'
import "./notes.scss"

const Notes = () => {
    const [markdown, setmarkdown] = useState(null)

    useEffect(() => {
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => setmarkdown(text))
            .catch(err => console.error(err))
    }, [])


    return (
       <MacWindow>
        <div className='note-window'>
            {markdown ? <Markdown>{markdown}</Markdown> : <p>Loading....</p>}
        </div>
       </MacWindow>
    )
}

export default Notes