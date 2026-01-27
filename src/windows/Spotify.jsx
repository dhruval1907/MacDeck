import React from 'react'
import MacWindow from './MacWimdow'
import "./spotify.scss"
const Spotify = () => {
    return (
        <MacWindow >
            <div className='spotify-window'>
                <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/5IybU7IsU3Nga5PJsTMisn?utm_source=generator" width="100%" height="550" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify