import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HistoryPage from './history'
import LyricsPage from './lyrics'
import Nwa from '../images/nwa.jpg'
import songs from '../data/songs'
import Sound from 'react-sound'
import Soc from '../data/Soc.mp3'
import Ftp from '../data/ftp.mp3'
import Gg from '../data/GG.mp3'
import Iiar from '../data/iiar.mp3'
import Pdia from '../data/Pdia.mp3'
import Eb from '../data/8b.mp3'
import Slt from '../data/SLT.mp3'
import Eys from '../data/EYS.mp3'
import Cnth from '../data/Cnth.mp3'
import Iat from '../data/Iat.mp3'
import Dm from '../data/Dm.mp3'
import Qots from '../data/Qots.mp3'
import Stdt from '../data/Stdt.mp3'
const CarousalPage = () => {
    const data = [
        Soc,
        Ftp,
        Gg,
        Iiar,
        Pdia,
        Eb,
        Slt,
        Eys,
        Cnth,
        Iat,
        Dm,
        Qots,
        Stdt,
    ]

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState("StarightOuttaCompton");
    const [index, setIndex] = useState(0);
    // sets the state of current song and index
    const setSong = (e, i) => {
        setCurrentSong(e); setIndex(i)
    }
    // songName is an array of playable songs
    const songName = [
        songs.map((e, i) => <div key={i}>
            <button key={i + 100} onClick={() => setSong(e, i)}>{e}
            </button>
        </div>
        )
    ]
    return (
        <Carousel fade interval={null}>
            <Carousel.Item>
                <div className="page">
                    <p className="billboard" style={{ fontFamily: "'Space Mono', monospace" }}>#1 Billboard!</p>
                    <div className="songNames" style={{ cursor: "pointer", position: "absolute", zIndex: 10000, color: "yellow" }}>  {songName}</div>
                    <p className="rollingStone" style={{ fontFamily: "'Nosifer', cursive" }}>The Rolling Stone</p>
                    <img src={Nwa} style={{ position: "absolute", width: "55vw", opacity: .7 }} alt="album-cover"></img>
                </div>
                <Carousel.Caption>
                    <p style={{ margin: "10px", fontSize: "18px" }}> Selected Song :: {currentSong}</p>
                    <button style={{ fontSize: "22px", borderRadius: "2%", background: "purple", padding: "2px" }} onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? "Play" : 'Stop'}
                        {/* plays the sound if the is playing then set status playing else Sound.status.STOPPED  */}
                        <Sound
                            url={data[index]}
                            playStatus={
                                isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                            }
                        />
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

                <LyricsPage song={index} />

            </Carousel.Item>
            <Carousel.Item>

                <HistoryPage />

            </Carousel.Item>
        </Carousel>
    )
}

export default CarousalPage
