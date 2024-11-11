import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";

// Images
import Web from "../images/Web.png";
import typing from "../images/typing.png";
import typing2 from "../images/typing2.png";
import Digital from "../images/Digital.png";
import Multimedia from "../images/Multimedia.png";
import Graphic from "../images/Graphic.png";

// Logos
import HuLogo from "../images/HuLogo.png";
import IHED from "../images/IHED.png";
import SideOnline from "../images/SideOnline.png";
import BilicsideMarketing from "../images/BilicsideMarketing.png";
import Balqiiza from "../images/Balqiiza.png";
import GreenHope from "../images/GreenHope.png";
import AlimraAcademy from "../images/AlimraAcademy.png";
import UmaddaOnline from "../images/UmaddaOnline.png";
import M8Style from "../images/M8Style.png";
import SafeOnlineLogo from "../images/SafeOnlineLogo.png";
import IqraPharmacyLogo2 from "../images/IqraPharmacyLogo2.png";
import DaryeelLogo from "../images/DaryeelLogo.png";
import IfisLogolas from "../images/IfisLogolas.png";
import HeeganTravelLogo from "../images/HeeganTravelLogo.png";
import {motion, useScroll,} from "framer-motion"

function About() {


  return (
    <div 
    
    
    
    className="bg-[#1C1A5d] text-white">
      <Header />

      {/* About Section */}
      <motion.section 
      
      initial={{opacity: 0, y:200}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
      
      className="flex flex-col items-center text-center sm:text-left sm:items-center sm:px-10 py-20 space-y-4">
        <h1 className="text-3xl font-bold text-[#F0941C]">About Me</h1>
        <p className="max-w-3xl px-4 sm:px-0">
          I'm able to handle multiple tasks on a daily basis and use a creative approach to solve
          problems. I'm a dependable person with excellent time management skills, and I'm always
          energetic and eager to learn new skills.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
      
      initial={{opacity: 0, y:200}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
       
      
      
      className="bg-white text-[#1C1A5D] py-10">
        <h1 className="text-3xl font-bold text-center">My Skills</h1>
        <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
          {[
            { img: Web, title: "Full-stack Developer" },
            { img: Graphic, title: "Graphic Design" },
            { img: Multimedia, title: "Multimedia" },
            { img: Digital, title: "Digital Marketing" },
            { img: typing, title: "Computer App" },
            { img: typing2, title: "Typing Skill" },
          ].map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-[200px] h-[200px] p-6 bg-white shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105"
            >
              <img src={skill.img} alt={skill.title} className="w-10 h-10 mb-4" />
              <h2 className="text-center text-lg font-bold">{skill.title}</h2>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Partner Logos Section */}
      <section className="pt-20 bg-white">
        <h1 className="text-3xl font-bold text-center text-white mb-10">
          Some of the businesses we have worked with
        </h1>

        <Marquee speed={50} gradient pauseOnHover>
          {[HuLogo, IHED, SideOnline, BilicsideMarketing, Balqiiza, DaryeelLogo, HeeganTravelLogo].map(
            (logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-[250px] h-[150px] bg-white shadow-lg m-2 rounded-lg"
              >
                <img src={logo} alt="Company Logo" className="max-w-[80%] max-h-[80%] object-contain" />
              </div>
            )
          )}
        </Marquee>

        <Marquee direction="right" speed={50} gradient pauseOnHover className="mt-4">
          {[GreenHope, AlimraAcademy, UmaddaOnline, M8Style, SafeOnlineLogo, IqraPharmacyLogo2, IfisLogolas].map(
            (logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-[250px] h-[150px] bg-white shadow-lg m-2 rounded-lg"
              >
                <img src={logo} alt="Company Logo" className="max-w-[80%] max-h-[80%] object-contain" />
              </div>
            )
          )}
        </Marquee>
      </section>

      <Footer />
    </div>
  );
}

export default About;
