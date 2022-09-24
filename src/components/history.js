import React from 'react'
import Eazy from '../images/e.jpg'
import Dre from '../images/dr.jpg'
import Cube from '../images/ice.jpeg'
import Mcren from '../images/mcren.jpeg'
import Tdoc from '../images/TDOC.jpg'
import Djy from '../images/Djy.jpeg'
const HistoryPage = () => {
    return (
        <div className="history" style={{ display: "grid" }}>
            <h1>N.W.A</h1>
            <div>
                <img style={{ float: "right", width: "250px" }} src={Eazy} alt="eazy"></img>
                <p>
                    Straight Outta Compton is the debut studio album by American hip hop group N.W.A, released on the <span style={{ color: "yellow" }}>8th of August 1988 on group member Eazy-E's record label Ruthless Records</span>. Its title refers to the group's native town, Compton, California. Production for the album was handled by Dr. Dre and DJ Yella. The album is viewed as one of the greatest hip hop albums of all time and the pioneering record of gangsta rap; with its ever-present profanity and violent lyrics, it helped to advance this then-new sub-genre of hip hop. It has been considered groundbreaking by music writers and has had an enormous impact on the evolution of West Coast hip hop.
                    Straight Outta Compton redefined the direction of hip hop, making lyricism concerning the gangsta lifestyle becoming the driving force in sales figures. It has sold over 3,500,000 copies, making it N.W.A's best-selling album.
                </p>
                <img style={{ float: "right" }} src={Cube} alt="cube"></img>
                <h2>Lyrics</h2>
                <p>
                    The lyrics on the album were mainly written by Ice Cube and MC Ren, with several uncredited contributions by The D.O.C. Some critics of the album expressed their view that the record glamorised black-on-black crime, but others stated that the group was simply showing the reality of living in the areas of Compton and South Central Los Angeles.
                </p>
                <img style={{ float: "right", width: "250px" }} src={Mcren} alt="mcren"></img>
                <h2>Production</h2>
                <img style={{ float: "left", width: "250px" }} src={Dre} alt="dre"></img>
                <p>
                    The production on the album was generally seen as top quality for the time, with Dr. Dre's production performing well with his samples and drum machine beats, and DJ Yella's turntablism and overall co-production seen as proficient by hip hop critics. Some critics find it somewhat sparse and low budget given the significance of the album and compared with other producers of the time such as Marley Marl.
                </p>
                <img style={{ float: "left", width: "250px" }} src={Tdoc} alt="The doc"></img>
                <p>
                    The album's most controversial track, "Fuck tha Police", was partly responsible for N.W.A becoming known as the "World's Most Dangerous Group". The song "Gangsta Gangsta" talks about the danger and violence in South Central and Compton. "Express Yourself" speaks of the ideas of free expression and the constraints placed on performers by radio censorship. Every N.W.A member except for DJ Yella recorded a solo song. MC Ren performs by himself on "If It Ain't Ruff" and "Quiet on tha Set". Dr. Dre, who mostly produced rather than performed, did a solo effort on the single <span style={{ color: "red" }}>"Express Yourself"</span>. Ice Cube performed on "I Ain't tha 1". Eazy-E's only solo recording was a remix of the song "8 Ball", which originally appeared on the 1987 compilation album N.W.A. and the Posse. The only guest on the album is The D.O.C., who performs the opening verse on "Parental Discretion Iz Advised".
                </p>
                <img style={{ float: "left", width: "250px" }} src={Djy} alt="DJ Yella"></img>


                <h2>Commercial performance</h2>
                <p>
                    The album first appeared on music charts in 1989, peaking at #37 on the Billboard 200, and #9 on the Top R&B/Hip-Hop Albums charts in America. It re-entered the charts in 2003 when it received a repressing, peaking on the UK Albums Top 75 at #35, and on the Ireland Albums Top 75 at #20.

                    The album has sold over three million copies, and was certified double Platinum by the RIAA on 27 March 1992. It is N.W.A's best selling album, as their debut, N.W.A. and the Posse, was certified Gold and their final, Niggaz4Life, was certified Platinum. According to Priority Records' calculations, 80% of sales were in the suburbs, beyond the boundaries of black neighborhoods.
                </p>
            </div>
            <h2>Critical response</h2>
            <p>
                Upon its release, the album was generally well received by most music critics. Robert Hilburn of the Los Angeles Times wrote in a 1989 review that the album is "an anxious, unsettling documentary of an aspect of society in crisis".[1]  Jon Caramanica of Rolling Stone said that "it was a bombastic, cacophonous car ride through Los Angeles' burnt-out and ignored hoods."[2] Steve Huey of Allmusic says that although "there are several undistinguished misfires during the second half", the album "remains an essential landmark, one of hip-hop's all-time greatest."[3]
            </p>
        </div>
    )
}

export default HistoryPage