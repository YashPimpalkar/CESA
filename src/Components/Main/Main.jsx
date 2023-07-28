import React,{useEffect} from 'react'
import "./main.css"
import img1 from "../../Assets/img1.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: "Technical Quiz",
        location: "indonesia",
        grade: "cultural",
        fees: "$500",
        description: 'A technical quiz is a type of quiz that focuses on testing knowledge and understanding of technical subjects, such as science, technology and engineering fields.'
    },
    {
        id:2,
        imgSrc:img2,
        destTitle: "Blind coding",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'Blind Coding is where a programmer works on code without running it until completion. Normally this is a terrible idea but it makes for a very fun challenge!'
    },
    {
        id:3,
        imgSrc:img3,
        destTitle: "c/c++ code war",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'odewars is where developers achieve code mastery through challenge.'
    },
    {
        id:4,
        imgSrc:img1,
        destTitle: "Code Golf",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'Code golf is a type of recreational computer programming competition in which participants strive to achieve the shortest possible source code that solves a certain problem.'
    },
    {
        id:5,
        imgSrc:img2,
        destTitle: "Python code",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'A programming competition generally involves the host presenting a set of logical or mathematical problems, also known as puzzles or challenges, to the contestants (who can vary in number from tens or even hundreds to several thousands).'
    },
    {
        id:6,
        imgSrc:img3,
        destTitle: "Frontend Dev",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes,'
    },
    {
        id:7,
        imgSrc:img1,
        destTitle: "Seminar",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae quidem quo, explicabo repellendus aliquid officiis culpa minima distinctio accusantium repellat ipsam animi eos impedit exercitationem. Quos, est sunt?'
    },
    {
        id:8,
        imgSrc:img2,
        destTitle: "Bug Debug",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'Debugging and testing are complementary processes that ensure software programs run as they should. After writing a complete section or part of a code, programmers test to identify bugs and errors. Once bugs are found, coders can begin the process of debugging and work towards ridding software of any errors.'
    }
    ,
    {
        id:9,
        imgSrc:img3,
        destTitle: "UI/UX/POSTERMAKING",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'Poster design is a type of graphic design. Poster artists utilize graphic design and usually have more flexibility and freedom beyond traditional marketing methods. The current focus on digital advertising offers opportunities for interactivity and dynamic designs that could transform poster art in new ways.'
    },
    {
        id:10,
        imgSrc:img1,
        destTitle: "CODE HUNT",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'Code Hunt is a serious gaming platform for coding contests and practicing programming skills.'
    },
    {
        id:11,
        imgSrc:img2,
        destTitle: "CODECHEF",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae quidem quo, explicabo repellendus aliquid officiis culpa minima distinctio accusantium repellat ipsam animi eos impedit exercitationem. Quos, est sunt?'
    },
    {
        id:12,
        imgSrc:img3,
        destTitle: "VIDEOMAKING",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae quidem quo, explicabo repellendus aliquid officiis culpa minima distinctio accusantium repellat ipsam animi eos impedit exercitationem. Quos, est sunt?'
    },
    {
        id:13,
        imgSrc:img1,
        destTitle: "PAPERPRESENTATION",
        location:"indonesia",
        grade:"cultural",
        fees:"$500",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae quidem quo, explicabo repellendus aliquid officiis culpa minima distinctio accusantium repellat ipsam animi eos impedit exercitationem. Quos, est sunt?'
    },

]




const Main = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited Event
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, description, location, grade, fees }) => {
                        return (

                            <div key={id}  data-aos="fade-up" className="singleDestination">
                                <img src={imgSrc} alt={destTitle} />

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle} </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>
                                                {grade}
                                                <small>+l</small>
                                            </span>
                                        </div>
                                        <div className="price">
                                            <h5>
                                                {fees}
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>
                                            {description}
                                        </p>
                                    </div>
                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>


                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main