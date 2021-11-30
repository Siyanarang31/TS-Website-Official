import './OurMission.css'
import React,{useEffect} from 'react';
import Zoom from 'react-reveal/Zoom';
import AOS from "aos";
import "aos//dist/aos.css";
import bm from "../../assets/HomePage/bookmark.png";


const OurMission = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
    return (
       <div className =  'our-mission-all'>
         
        <div className = 'our-mission'>
            <div className = 'ourm-card'>
               
            <img src={bm}  className="bmark" />
               
                <div className = 'ourm-head'>our mission</div>
                <div className = 'ourm-grid'>
                    <div className = 'ourm-video'>
                        <Zoom><iframe className= 'respon-video' src="https://www.youtube.com/embed/R1q6I-2obDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Zoom>
                    </div>
                    <div className = 'ourm-text'>Team Sammard has always helped its members materialise their passion for reaching the skies, and cultivate the zeal of engineering in them. We, a group of space enthusiasts, after tasting success in American Astronautical Society (AAS) and NASA's annual rocket science competition CANSAT, have laid our eyes on the prestigious SpacePort America Cup, an annual intercollegiate sounding rocket competition. The team is now capable of delivering launch vehicles, carrying experimental payloads up to an altitude of 10,000 feet. We also conduct various events focused at educating young minds in the art of engineering. At Team Sammard, it's not just about shooting up to the skies, it's about igniting a spark in every engineer's mind.</div>
                </div>
            </div>
        </div>

        <div className = 'our-mission'>
           
            <div className = 'ourm-card'>
               
            <img src={bm} className="bmark1" />
                
                <div className = 'ourm-head'>about us</div>
                <div className = 'ourm-grid'>
                    <div className = 'ourm-video'>
                        <Zoom><iframe className= 'respon-video-comp-right' src="https://www.youtube.com/embed/R1q6I-2obDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Zoom>
                    </div>
                    <div className = 'ourm-text-left'>Team Sammard is a student-based aerospace team, founded in 2017, and is the official rocketry team of Vellore Institute of Technology, Vellore campus.
                    The team participates in CanSat Competition held in the US, backed by AAS, AIAA and NASA Goddard among others. They have participated in 2019 and 2021. The team recently participated in their first ever amateur rocket competition, Spaceport America Cup 2021, the largest intercollegiate rocketry competition held in the world in New Mexico, US.

</div>
                </div>
            
                <div className = 'ourm-text-1'>The Team organises various events to fullfill the dream of spreading the aerospace culture across the nation. Collaborations with companies like Star Labs and assosciations like the Bharat Scouts and Guides, Karnataka are but a few examples of the commitments to our goals.</div>
                <br/><br/>
            </div>
        </div>


        <h2 className="comp-head">competitions</h2>


        <div className = 'our-mission'>
            <div className = 'ourm-card'>
            <img src={bm} className="bmark" />
                <div className = 'ourm-head'>cansat competition america</div>
                <div className = 'ourm-grid'>
                    <div className = 'ourm-video'>
                        <Zoom><iframe className= 'respon-video-comp' src="https://www.youtube.com/embed/R1q6I-2obDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Zoom>
                    </div>
                    <div className = 'ourm-text'>The team has been participating in the annual international competition called the CanSat competition organized by the American Astronautical Society and NASA Goddard since 2018. Cansat is a scientific payload building competition which brings outs the youngest minds and best engineers from all around a globe to solve a custom problem statement specific to a particular year. The team had achieved a world ranking of 18th in its maiden attempt at the Cansat competition.</div>
                    </div>
                <div className = 'ourm-text-1'>The team followed up with a 20th rank worldwide. Currently the team holds the personal best ranking of 13th Worldwide in Cansat 2021. Adding to that, the team achieved this feat while working remotely due to the Covid-19 pandemic with members spread across the entire country. This makes this result even more special for the entire team.</div>
                <br/><br/>
            </div>
        </div>

        <div className = 'our-mission'>
            <div className = 'ourm-card'>
            <img src={bm} className="bmark1" />
                <div className = 'ourm-head'>spaceport america cup (sa cup)</div>
                <div className = 'ourm-grid'>
                    <div className = 'ourm-video'>
                        <Zoom><iframe className= 'respon-video' src="https://www.youtube.com/embed/R1q6I-2obDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Zoom>
                    </div>
                    <div className = 'ourm-text'>Team Sammard has always helped its members materialise their passion for reaching the skies, and cultivate the zeal of engineering in them. We, a group of space enthusiasts, after tasting success in American Astronautical Society (AAS) and NASA's annual rocket science competition CANSAT, have laid our eyes on the prestigious SpacePort America Cup, an annual intercollegiate sounding rocket competition. The team is now capable of delivering launch vehicles, carrying experimental payloads up to an altitude of 10,000 feet. We also conduct various events focused at educating young minds in the art of engineering. At Team Sammard, it's not just about shooting up to the skies, it's about igniting a spark in every engineer's mind.</div>
                </div>
                <div className = 'ourm-text-1'> It’s definitely not as easy as the quote suggests, but it was an enriching experience for the team that would exponentially help to increase the knowledge base of all the members. After taking part in the first and the only Spaceport America Cup till date, we achieved a ranking of 23rd worldwide in 10k COTS (Commercial Off the Shelf) category – one of the six categories of rockets in the competition.</div>
                <br/><br/>
            </div>
        </div>
        <h1 className="comp-head">outreach events</h1>
        <div className = 'our-mission'>
            <div className = 'ourm-card'>
            <img src={bm} className="bmark" />
                <div className = 'ourm-grid'>
                    <div className = 'ourm-video'>
                        <Zoom><iframe className= 'respon-video-comp' src="https://www.youtube.com/embed/R1q6I-2obDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Zoom>
                    </div>
                    <div className = 'ourm-text'>Apart from competitions and intra team events, we host a lot of other fun events open for students and aerospace enthusiasts from all over the world. Talk events like ‘Astrophilia’ and ‘Mars- The Next Giant Leap’ in coordination with Star Labs, an aerospace start-up from Surat, India and ‘Space Voyage’ with the SAE Student Chapter in VIT. Questions and answers, quiz all are covered in these events. Team Sammard is in collaboration with Bharat Scouts and Guide, Karnataka, in their ongoing project SATCAN, which was inaugurated on 19th June.</div>
                </div>
                <div className = 'ourm-text-1'>Vellore Institute of Technology provides a space for innovators. The college provides a constructive community where we meet like minded individuals. Team Sammard was a resultant of such environment. VIT has high class facilities and machinery required to solve any sort of real life problem statements. Our team came together to learn and share the knowledge we gain</div>
                <br/><br/>
        
                
            </div>
            
            
        </div>
    </div>
    )
}

export default OurMission
        
       
       
            
    




        