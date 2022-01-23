import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import FirstPage from './firstpage'
import SecondPage from './middlepage'
import EndPage from './lastpage'
import Nwa from '../images/nwa.jpg'

const CarousalPage = () =>{
    return (
        <Carousel fade interval={null}>
        <Carousel.Item>
            <div className="page">
                <img src={Nwa} style={{position: "absolute", width: "40vw"}} alt="album-cover"></img>
            </div>
            <Carousel.Caption>
                <p className="rollingstone" style={{fontFamily:"'Nosifer', cursive"}}>The Rolling Stone</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <FirstPage />   
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <SecondPage />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
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
