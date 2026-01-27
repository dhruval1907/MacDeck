import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWimdow'


const Notes = () => {
    const [markdown, setmarkdown] = useState(null)

    useEffect(() => {
        fetch("/notes.txt")
            .then(res => res.text())
            .then(text => setmarkdown(text))
    }, [])

    console.log(markdown);
    
    return (
        <div>
            <div className='note-window'>
                {markdown ? <MacWindow>{markdown}</MacWindow>: <h1>Loading...</h1>}
            </div>
        </div>
    )
}

export default Notes