import Header from "../Components/Header"
import { Link, useLocation, useNavigate } from "react-router-dom";
import All from "./All";
import {motion, useScroll, useTransform } from "framer-motion"


function GraphicDesign(){
    
        // Get the scroll position
        const { scrollYProgress } = useScroll();
      
        // Map scroll progress to opacity and y (position) values
        const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
        const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    
    return <div>

<motion.div style={{
        opacity: opacity,
        y: y,
      }} className="scroll-animated-item w-full h-[200px] absolute bg-[url('https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?t=st=1728495163~exp=1728498763~hmac=d9d811ba9847883e31fbd3a8c168c7afb08056e55821a82cb6fe1be8f09cbd78&w=996')]">
    
    <h1 className=" relative top-20 text-white font-bold text-[30px] text-center ">Lets see the projects we have done for our clients</h1>

    
    <div className=" flex mt-[90px] sm:gap-[30px] justify-center ">
    <div className="absolute sm:top-[150px] top-[160px] ">
    <ul className="text-white flex sm:gap-[50px] gap-[10px] ">
       <Link to="/graphic"> <li className="bg-[#F0941C] sm:p-2 p-[4px] sm:w-[140px] w-[120px] text-center rounded-lg font-medium cursor-pointer" >Graphic Design</li></Link>
       {/* <Link to="/graphic"> <li className="bg-[#F0941C] p-2 w-[140px] text-center rounded-lg font-medium cursor-pointer " >Graphic Design</li></Link> */}
        <Link to="/web"> <li className="bg-[#F0941C] sm:p-2 p-[4px] sm:w-[140px] w-[120px] text-center rounded-lg font-medium cursor-pointer" >Web Design</li></Link>
        <Link to="/video"> <li className="bg-[#F0941C] sm:p-2 p-[4px] sm:w-[140px] w-[120px] text-center rounded-lg font-medium cursor-pointer" >Videos</li></Link>
    </ul>
</div>
</div>
</motion.div>


    <Header/>
    <All/>

    </div>
}

export default GraphicDesign