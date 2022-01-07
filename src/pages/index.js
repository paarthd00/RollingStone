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

}
// markup
const IndexPage = () => {
  return (
    <main style={{display: "flex", width: "100vw", height: "100vh", background: "black", justifyContent: "center", flexFlow: "column"}}>
      <div style={{ backgroundPosition: "center", backgroundImage: `url(${Nwa})`, width: "100%", height: `85vh`, backgroundSize: `contain`, position: "absolute", backgroundRepeat: "no-repeat", margin: "auto"}}></div>
      <header style={headerStyles}>
      <p className="rollingstone" style={{fontFamily:"'Nosifer', cursive", verticalAlign: "center"}}>The Rolling Stone</p>
      </header>

    </main>
  )
}

export default IndexPage
