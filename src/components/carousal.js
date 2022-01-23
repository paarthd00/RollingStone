import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import FirstPage from './firstpage'
import SecondPage from './middlepage'
import EndPage from './lastpage'
import Nwa from '../images/nwa.jpg'
import songs from '../data/songs'

const songName = [
    songs.map((e,i)=> <p key={i}>{e}</p>)
]

const CarousalPage = () =>{
    return (
        <Carousel fade interval={null}>
        <Carousel.Item>
            <div className="page">
                <p className="billboard" style={{fontFamily:"'Bangers', cursive"}}>#1 Billboard!</p>
                <div className="songnames" style={{cursor: "pointer",position:"absolute", zIndex:10000, color: "yellow"}}>  {songName}</div>
                <p className="rollingstone" style={{fontFamily:"'Nosifer', cursive"}}>The Rolling Stone</p>
                <img src={Nwa} style={{position: "absolute", width: "55vw", opacity:.7}} alt="album-cover"></img>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <FirstPage />   
        </Carousel.Item>
        <Carousel.Item>
            <SecondPage />
        </Carousel.Item>
        <Carousel.Item>
            <EndPage />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default CarousalPage
