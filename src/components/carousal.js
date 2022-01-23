import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import FirstPage from './firstpage'
// import SecondPage from './middlepage'
// import EndPage from './lastpage'
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
const CarousalPage = () =>{
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
    const setSong = (e,i) =>{
        setCurrentSong(e);setIndex(i)
    }
    const songName = [
        songs.map((e,i)=> <div key={i}>            
        <button key={i+100} onClick={() => setSong(e,i)}>{e}
        </button>
        </div>
        )
    ]
    // const [currentSong, setCurrentSong] = useState("");
    return (
        <Carousel fade interval={null}>
        <Carousel.Item>
            <div className="page">
                <p className="billboard" style={{fontFamily:"'Bangers', cursive"}}>#1 Billboard!</p>
                <div className="songnames" style={{cursor: "pointer",position:"absolute", zIndex:10000, color: "yellow"}}>  {songName}</div>
                <p className="rollingstone" style={{fontFamily:"'Nosifer', cursive"}}>The Rolling Stone</p>
                <img src={Nwa} style={{position: "absolute", width: "55vw", opacity:.7}} alt="album-cover"></img>
            </div>
            <Carousel.Caption>
            <p style={{margin: "10px", fontSize:"18px"}}> Selected Song :: {currentSong}</p>
            <button style={{fontSize: "22px", borderRadius: "2%", background:"purple", padding:"2px"}} onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? "Play" : 'Stop'}

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

            <FirstPage />   
            
        </Carousel.Item>
        {/* <Carousel.Item>
            <SecondPage />
        </Carousel.Item>
        <Carousel.Item>
            <EndPage />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item> */}
        </Carousel>
    )
}

export default CarousalPage
