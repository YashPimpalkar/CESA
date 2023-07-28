import React,{useEffect} from 'react'
import "./footer.css"
import vid2 from "../../Assets/time_circles_-_15087 (540p).mp4";
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={vid2} loop autoPlay muted type='video/mp4'></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>
              KEEP IN TOUCH
            </small>
            <h2>Contact us</h2>
          </div>
          
          <div className="inputDiv flex">
            <input type="text" data-aos="fade-up" placeholder='enter the email address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>Send <FiSend className='icon'/></button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className='logo flex'><MdOutlineTravelExplore className='icon'/> CESA.</a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Culpa consectetur cupiditate, quaerat iste molestias animi
                alias, veritatis eum temporibus quidem fugit, nesciunt sit 
                fuga. Dolorem, voluptatem, voluptatum fugit unde ratione
                 quod iure maiores numquam eius sed facilis dignissimos 
                 repudiandae alias? Qui, laboriosam aspernatur. Consectetur
                  veritatis, est maiores assumenda pariatur laborum!
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter  className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <SiTripadvisor className='icon'/>
            </div>

          </div>

          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className='groupTitle'> 
                 OUR AGENSY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

            </div>
{/* {GROUP TWO} */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className='groupTitle'> 
              PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

            </div>
{/* {GROUP THREE} */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className='groupTitle'> 
                 OUR AGENSY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

            </div>

          </div>

          <div className="footerDiv flex">
              <small>CESA/CSI EVENTS WEBSITE</small>
              <small>COPYRIGHTS RESERVED - CESA/CSI 2023-24</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer