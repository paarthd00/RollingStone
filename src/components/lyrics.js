import React from 'react'
import lyrics from '../data/lyrics'

const LyricsPage = ({ song }) => {

    const l = lyrics[song]

    return (
        <div style={{ padding: "15px" }}>
            <h1>Lyrics</h1>
            <p>{l}</p>
        </div>
    )
}

export default LyricsPage