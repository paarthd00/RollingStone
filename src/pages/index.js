import * as React from "react"
import "../css/fonts.css"
import Nwa from '../images/nwa.jpg'

// styles
const headerStyles = {
  padding: 50,
  fontSize: "50px",
  color: "yellow",
  textAlign: "center",
  zIndex: "100",
  margin: "auto",
  width: "25vw"
}
const containerStyles = {
  display: "flex",
  width: "400vw", 
  height: "100vh", 
  background: "black", 
  justifyContent: "center", 
  flexFlow: "row",
  scrollDirection: "horizontal"
}
// markup
const IndexPage = () => {
  return (
    <main style={{ scrollDirection: "horizontal"}}>
      <div className="container" style={containerStyles}>
        <div className="page">
          <div style={{ alignSelf: "center", backgroundPosition: "center", backgroundImage: `url(${Nwa})`, width: "100%", height: `90vh`, backgroundSize: `contain`, position: "absolute", backgroundRepeat: "no-repeat", margin: "auto"}}></div>
          <header style={headerStyles}>
          <p className="rollingstone" style={{fontFamily:"'Nosifer', cursive", verticalAlign: "center"}}>The Rolling Stone</p>
          </header>
        </div>
        <div className="page">
          <div style={{ alignSelf: "center", backgroundPosition: "center", backgroundImage: `url(${Nwa})`, width: "100%", height: `90vh`, backgroundSize: `contain`, position: "absolute", backgroundRepeat: "no-repeat", margin: "auto"}}></div>
          <header style={headerStyles}>
          <p className="rollingstone" style={{fontFamily:"'Nosifer', cursive", verticalAlign: "center"}}>The Rolling Stone</p>
          </header>
        </div>
        <div className="page">
          <div style={{ alignSelf: "center", backgroundPosition: "center", backgroundImage: `url(${Nwa})`, width: "100%", height: `90vh`, backgroundSize: `contain`, position: "absolute", backgroundRepeat: "no-repeat", margin: "auto"}}></div>
          <header style={headerStyles}>
          <p className="rollingstone" style={{fontFamily:"'Nosifer', cursive", verticalAlign: "center"}}>The Rolling Stone</p>
          </header>
        </div>
        <div className="page">
          <div style={{ alignSelf: "center", backgroundPosition: "center", backgroundImage: `url(${Nwa})`, width: "100%", height: `90vh`, backgroundSize: `contain`, position: "absolute", backgroundRepeat: "no-repeat", margin: "auto"}}></div>
          <header style={headerStyles}>
          <p className="rollingstone" style={{fontFamily:"'Nosifer', cursive", verticalAlign: "center"}}>The Rolling Stone</p>
          </header>
        </div>

      </div>



    </main>
  )
}

export default IndexPage
