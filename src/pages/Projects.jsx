import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useLocation } from "react-router-dom";
import {motion} from "framer-motion"


import Hipo from "../images/HiboPerfumesLogo.jpg";
import Delta from "../images/Delta.jpg";
import tanaad from "../images/tanaad.jpg";
import Ganaane from "../images/Ganaane.jpg";
import Bidhaan from "../images/Bidhaan.jpg";
import Sacdiya from "../images/Sacdiya.jpg";
import SPATV from "../images/SPATV.jpg";
import SHELDA from "../images/SHELDA.jpg";
import Ifis from "../images/Ifis.jpg";
import K from "../images/K.jpg";
import Bulshawi from "../images/Bulshawi.jpg";
import Heegan from "../images/Heegan.jpg";

import SimanPoster8 from "../images/SimanPoster8.jpg";
import SimanPoster9 from "../images/SimanPoster9.jpg";
import SimanPoster10 from "../images/SimanPoster10.jpg";
import SimanPoster11 from "../images/SimanPoster11.jpg";
import SimanPoster12 from "../images/SimanPoster12.jpg";
import SimanPoster16 from "../images/SimanPoster16.jpg";
import SimanPoster17 from "../images/SimanPoster17.jpg";
import SimanPoster18 from "../images/SimanPoster18.jpg";
import SimanPoster19 from "../images/SimanPoster19.jpg";
import SideEarphonePoster from "../images/SideEarphonePoster.jpg";



function Projects() {

  const location = useLocation();

  return (
    <div>
      <Header />
      
      <div className="w-full h-[200px] relative bg-cover bg-center mt-[-70px] " style={{ backgroundImage: `url('https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?t=st=1728495163~exp=1728498763~hmac=d9d811ba9847883e31fbd3a8c168c7afb08056e55821a82cb6fe1be8f09cbd78&w=996')` }}>
        <h1 className="sm:mt-[80px] mt-[20px] text-white font-bold text-[30px] text-center">
          Let's see the projects we have done for our clients
        </h1>
        
        <div className="flex  justify-center sm:gap-4 gap-[5px] sm:mt-[90px] mt-[75px]">
          <Link to="/all"><button className="bg-[#F0941C] sm:p-2 p-[4px] sm:w-[140px] w-[120px] rounded-lg font-medium text-center text-white">Graphic Design</button></Link>
          <Link to="/web"><button className="bg-[#F0941C] sm:p-2 p-[4px] sm:w-[140px] w-[120px] rounded-lg font-medium text-center text-white">Web Design</button></Link>
          <Link to="/video"><button className="bg-[#F0941C] sm:p-2 p-[4px] sm:w-[140px] w-[120px] rounded-lg font-medium text-center text-white">Videos</button></Link>
        </div>
      </div>

      <motion.div 
      
      initial={{y: 0, opacity: 0 }}
      whileInView={{opacity: 1, y: 1}}
      transition={{duration: 2}}
      viewport={{once: true}} 
      
      
      
      
      
      
      className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        {[{img: Hipo, title: "Hipo Perfumes full brand", link: "https://www.facebook.com/share/p/ziaNQnhswxowiQEv/"},
          {img: Delta, title: "Delta Tech Full Brand", link: "https://www.facebook.com/share/p/Nn29sak156z5NxVj/"},
          {img: tanaad, title: "Tanaad Media Full Brand", link: "https://www.facebook.com/share/p/yVj9FLk2i3jCM8cN/"},
          {img: Ganaane, title: "Ganaane Cosmetics Full Brand", link: "https://www.facebook.com/share/p/yTF1D9Ztg4JcXUR3/"},
          {img: Bidhaan, title: "Bidhaan Laundry Full Brand", link: "https://www.facebook.com/share/p/mqmLsBLWJiUG4zy6/"},
          {img: Sacdiya, title: "Sacdiya Cosmetics Full Brand", link: "https://www.facebook.com/share/p/rW2sKWgtxe8ok7T2/"},
          {img: SPATV, title: "SPA TV Full Brand", link: "https://www.facebook.com/share/p/WSMFnAtCc5BQmWt1/"},
          {img: SHELDA, title: "SHELDA Full Brand", link: "https://www.facebook.com/share/p/WPmvNiksjyoPogtD/"},
          {img: Ifis, title: "Ifis Electronics", link: "https://www.facebook.com/share/p/bbEaP14MY3NwPNfQ/"},
          {img: K, title: "KRTC", link: "https://www.facebook.com/share/p/sE3Lzd6k1oYDjTY2/"},
          {img: Bulshawi, title: "Bulshaawi Media", link: "https://www.facebook.com/share/p/7py4dhyggWF5Z5Nr/"},
          {img: Heegan, title: "Heegan Travel", link: "https://www.facebook.com/share/p/XLbGsWSyT4YYQZmp/"}]
          .map((project, index) => (
            <div key={index} className="bg-white shadow-xl rounded-lg overflow-hidden">
              <img src={project.img} className="w-full h-60 object-cover border-2 border-[#F0941C] hover:scale-105 transition-transform duration-300" alt={project.title} />
              <h1 className="text-center font-bold text-[18px] p-4">{project.title}</h1>
              <Link to={project.link}>
                <button className="bg-[#F0941C] w-[80%] mx-auto block mb-4 text-white font-bold py-2 rounded-lg hover:bg-transparent hover:text-[#F0941C] hover:border-2 hover:border-[#F0941C] transition-all">View full project</button>
              </Link>
            </div>
          ))}
      </motion.div>

      <h1 className="text-center text-2xl font-bold mt-12">Social Media Poster Designs</h1>

      <motion.div 
      
      initial={{scale: 0, opacity: 0 }}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 1.5}}
      
      
      
      
      className="p-4 flex flex-wrap justify-center gap-6 mt-4">
        {[SimanPoster8, SimanPoster9, SimanPoster10, SimanPoster11, SimanPoster12, SimanPoster16, SimanPoster17, SimanPoster18, SimanPoster19, SideEarphonePoster]
          .map((poster, index) => (
            <img key={index} src={poster} className="w-[200px] h-[200px] object-cover shadow-lg hover:scale-110 transition-transform duration-300" alt={`Poster ${index+1}`} />
          ))}
      </motion.div>

      <motion.div 
      
      initial={{scale: 0, opacity: 0 }}
      whileInView={{opacity: 1, scale: 1}}
      transition={{duration: 1.6}}
      
      
      
      className="flex justify-center mt-12 mb-6">
        <Link to="/posters">
          <button className="bg-[#F0941C] p-4 w-[200px]  sm:w-[1100px] text-white font-bold rounded-lg hover:bg-transparent hover:text-[#F0941C] hover:border-2 hover:border-[#F0941C] transition-all">
            See more
          </button>
        </Link>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Projects;
