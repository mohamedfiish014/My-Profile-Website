import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";

// Images
import web from "../images/web.png";
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
            { img: web, title: "Full-stack Developer" },
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










// import Header from "../Components/Header"
// import web from "../images/web.png"



// import typing from "../images/typing.png"
// import typing2 from "../images/typing2.png"
// import Digital from "../images/Digital.png"
// import Multimedia from "../images/Multimedia.png"
// import Graphic from "../images/Graphic.png"
// import Footer from "../Components/Footer"

// // import-tigan waa animations-ka loogooyinka
// import Marquee from "react-fast-marquee"
// import HuLogo from "../images/HuLogo.png"
// import IHED from "../images/IHED.png"
// import SideOnline from "../images/SideOnline.png"
// import BilicsideMarketing from "../images/BilicsideMarketing.png"
// import Balqiiza from "../images/Balqiiza.png"
// import GreenHope from "../images/GreenHope.png"
// import AlimraAcademy from "../images/AlimraAcademy.png"
// import UmaddaOnline from "../images/UmaddaOnline.png"
// import M8Style from "../images/M8Style.png"
// import SafeOnlineLogo from "../images/SafeOnlineLogo.png"
// import IqraPharmacyLogo2 from "../images/IqraPharmacyLogo2.png"
// import DaryeelLogo from "../images/DaryeelLogo.png"
// import IfisLogolas from "../images/IfisLogolas.png"
// import HeeganTravelLogo from "../images/HeeganTravelLogo.png"


// function About(){

//     return <div className="w-full h-screen bg-[#1C1A5d] ">

    
// <div className="w-[900px] bg-[#1C1A5D] h-[150px] absolute top-20 left-[200px] ">

// <h1 className=" font-bold text-[#F0941C] text-center text-3xl">About me</h1>
// <p className="w-[750px] pl-[100px] text-white pt-[30px] flex justify-center">I'm able to handle multiple tasks on daily basis. I use a creative approach to problem solve. I am dependable person who is great at time management and always energetic and eager to learn new skills. </p>
// </div>

// <div className="absolute top-[260px] bg-white w-full h-[300px] ">
//     <h1 className="text-center text-3xl font-bold text-[#1C1A5D] ">My Skills</h1>
// <div className=" gap-2 justify-center">
// <div className=" mt-8 flex justify-center gap-[40px] ">
//     {/* Card1 Graphic Design */}

// <div id="s1" className="w-[200px] h-[200px] shadow-lg rounded-lg border-[1px] border-white ">
// <div className="mt-[60px] ">
// <img className="w-[40px] ml-[80px] mt-[10px]  " src={web} alt="" />

// <h1 className="text-[#1C1A5D] font-bold text-center text-[20px] ">Full-stack developer</h1>
// </div>
// </div>

// {/* //Car2 Graphic Design */}

// <div id="s1" className="w-[200px] h-[200px] shadow-lg rounded-lg border-[1px] border-white ">
// <div className="mt-[60px] ">
// <img className="w-[40px] ml-[80px] mt-[10px]  " src={Graphic} alt="" />

// <h1 className=" font-bold text-center text-[20px] text-[#1C1A5D]">Graphic design</h1>
// </div>
// </div>

// {/* //Car3 */}

// <div id="s1" className="w-[200px] h-[200px] shadow-lg rounded-lg border-[1px] border-white ">
// <div className="mt-[60px] ">
// <img className="w-[40px] ml-[80px] mt-[10px]  " src={Multimedia} alt="" />

// <h1 className=" font-bold text-center text-[20px] text-[#1C1A5D] ">Multimedia</h1>
// </div>
// </div>
// </div>


// <div className="flex mt-8 justify-center gap-[40px]">
// {/* //Car4 */}

// <div className="">
// <div id="s1" className="w-[200px] h-[200px] shadow-lg rounded-lg border-[1px] border-white ">
// <div className="mt-[60px] ">
// <img className="w-[40px] ml-[80px] mt-[10px]  " src={Digital} alt="" />

// <h1 className=" font-bold text-center text-[20px] text-[#1C1A5D] ">Digital marketing</h1>
// </div>
// </div>
// </div>

// {/* //Car5 */}

// <div id="s1" className="w-[200px] h-[200px] shadow-lg rounded-lg border-[1px] border-white ">
// <div className="mt-[60px] ">
// <img className="w-[40px] ml-[80px] mt-[10px]  " src={typing} alt="" />

// <h1 className="text-[#1C1A5D] font-bold text-center text-[20px] ">Computer App</h1>
// </div>
// </div>

// {/* //Car6 */}

// <div id="s1" className="w-[200px] h-[200px] shadow-lg rounded-lg border-[1px] border-white ">
// <div className="mt-[60px] ">
// <img className="w-[40px] ml-[80px] mt-[10px]  " src={typing2} alt="" />

// <h1 className="text-[#1C1A5D] font-bold text-center text-[20px] ">Typing skill</h1>
// </div>
// </div>
// </div>
// </div>

// </div>
//     <Header/>
//     <div className="absolute bottom-[-750px] w-full">
//     <Footer/>
//     </div>

// {/* qeybtaan waa animation-ka loogoyinka */}


// <div className="pt-[800px] ">
// <h1 className="text-3xl  font-bold text-center text-[#1C1A5D]">Some of the businesses we have worked with</h1>
// <Marquee direction="left" speed={50} gradient={true} pauseOnHover={true}>
//         <div className="bg-white w-[250px] h-[150px] shadow-lg ">
//             <img className=" w-[150px] h-[150px] absolute top-[-10px] left-[50px] " src={HuLogo} alt="" />
//         </div>
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8">
//             <img className="w-[200px] h-[200px] absolute top-[-20px] " src={IHED} alt="" />
//         </div>
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
//             <img className="w-[250px] h-[250px] absolute top-[-60px] " src={SideOnline} alt="" />
//         </div>
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
//             <img className="w-[250px] h-[250px] absolute top-[-50px] " src={BilicsideMarketing} alt="" />
//         </div> 
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
//             <img className="w-[250px] h-[250px] absolute top-[-50px] " src={Balqiiza} alt="" />
//         </div> 
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
//             <img className="w-[250px] h-[250px] absolute top-[-50px] " src={DaryeelLogo} alt="" />
//         </div> 
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
//             <img className="w-[250px] h-[250px] absolute top-[-50px] " src={HeeganTravelLogo} alt="" />
//         </div> 
//     </Marquee>
//     </div>

//     <div className="pt-[50px] ">
// <Marquee direction="right" speed={50} gradient={true} pauseOnHover={true} >
//         <div className="bg-white w-[250px] h-[150px] shadow-lg ">
//             <img className=" w-[250px] h-[250px] absolute top-[-60px]" src={GreenHope} alt="" />
//         </div>
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8">
//             <img className="w-[130px] h-[130px] mt-[20px] " src={AlimraAcademy} alt="" />
//         </div>
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
//             <img className="w-[250px] h-[250px] absolute top-[-60px] " src={UmaddaOnline} alt="" />
//         </div>
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
//             <img className="w-[200px] h-[200px] absolute top-[-20px] " src={M8Style} alt="" />
//         </div> 
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
//             <img className="w-[200px] h-[200px] absolute top-[-20px] " src={SafeOnlineLogo} alt="" />
//         </div> 
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
//             <img className="w-[200px] h-[200px] absolute top-[-20px] " src={IqraPharmacyLogo2} alt="" />
//         </div> 
//         <div className="bg-white w-[250px] h-[150px] shadow-lg flex justify-center ml-8 ">
//             <img className="w-[200px] h-[200px] absolute top-[-20px] " src={IfisLogolas} alt="" />
//         </div> 
//     </Marquee>
//     </div>


//     </div>
// }

// export default About