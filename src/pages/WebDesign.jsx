import Header from "../Components/Header"
import { Link, useLocation, useNavigate } from "react-router-dom";
import TailwindIcon from "../images/TailwindIcon.png"
import Footer from "../Components/Footer"
import {motion} from "framer-motion"

import PortfolioWeb from "../images/PortfolioWeb.jpg"
import BlogWeb from "../images/BlogWeb.jpg"
import ZarrinWeb from "../images/ZarrinWeb.jpg"
import AgriVastWeb from "../images/AgriVastWeb.jpg"
import EverGreenWeb from "../images/EverGreenWeb.jpg"
import DashboardWeb from "../images/DashboardWeb.jpg"
import CodeXalkaWeb from "../images/CodeXalkaWeb.jpg"
import BngOogWeb from "../images/BngOogWeb.jpg"


function WebDesign(){

return <div className="absolute w-full">

<div className=" w-full h-[200px] absolute bg-[url('https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?t=st=1728495163~exp=1728498763~hmac=d9d811ba9847883e31fbd3a8c168c7afb08056e55821a82cb6fe1be8f09cbd78&w=996')]">
    
<h1 className=" sm:mt-[80px] mt-[60px] text-white font-bold text-[30px] text-center "></h1>

    
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
</div>


<div className="sm:flex gap-8 justify-center grid  mt-[200px] ">

{/* Portfolio Website */}

<motion.div 

initial={{y: 0, opacity: 0 }}
      whileInView={{opacity: 1, y: 1}}
      transition={{duration: 1}}

className="w-[250px] h-[400px] rounded-xl bg-white shadow-xl  mt-[20px] ">
<img className="w-[250px] h-[250px] border-2 border-[#F0941C] rounded-t-xl hover:scale-90 transition-all duration-500" src={PortfolioWeb} alt="" />

<h1 className="text-center font-bold text-[18px] pt-[20px] ">Portfolio Website</h1>

<div className=" space-x-2 text-center ">
<i class="fa-brands fa-html5 text-2xl text-[#F0941C] hover:text-[#1C1A5D] "></i>
<img className="w-[20px] h-[20px] absolute top-[520px] left-[160px] " src={TailwindIcon} alt="" />
</div>

<Link to="https://github.com/Mohamedali678/portfolio"> <button className="bg-[#F0941C] hover:transition-all hover:duration-200 hover:shadow-lg hover:border-2 hover:border-[#F0941C] hover:bg-transparent hover:text-[#F0941C] font-bold text-white p-2 w-[200px] ml-[22px] mt-[20px] rounded-lg " type="submit">Visit on Github<i class="fa-brands fa-github pl-[10px] "></i></button></Link>
</motion.div>

{/* Blog Website */}

<motion.div 

initial={{y: 0, opacity: 0 }}
      whileInView={{opacity: 1, y: 1}}
      transition={{duration: 1.5}}

className="w-[250px] h-[400px] rounded-xl bg-white shadow-xl mt-[20px] ">
<img className="w-[250px] h-[250px] border-2 border-[#F0941C] rounded-t-xl hover:scale-90 transition-all duration-500" src={BlogWeb} alt="" />

<h1 className="text-center font-bold text-[18px] pt-[20px] ">Blog Website</h1>

<div className=" space-x-2 text-center ">
<i class="fa-brands fa-html5 text-2xl text-[#F0941C] hover:text-[#1C1A5D]"></i>
<i class="fa-brands fa-css3 text-2xl text-[#F0941C] hover:text-[#1C1A5D]"></i>

</div>

<Link to="https://github.com/mohamedfiish014/blog"> <button className="bg-[#F0941C] hover:transition-all hover:duration-200 hover:shadow-lg hover:border-2 hover:border-[#F0941C] hover:bg-transparent hover:text-[#F0941C] font-bold text-white p-2 w-[200px] ml-[22px] mt-[20px] rounded-lg " type="submit">Visit on Github<i class="fa-brands fa-github pl-[10px] "></i></button></Link>
</motion.div>

{/* Zarrin Website */}

<motion.div 

initial={{y: 0, opacity: 0 }}
      whileInView={{opacity: 1, y: 1}}
      transition={{duration: 2}}

className="w-[250px] h-[400px] rounded-xl bg-white shadow-xl mt-[20px] ">
<img className="w-[250px] h-[250px] border-2 border-[#F0941C] rounded-t-xl hover:scale-90 transition-all duration-500" src={ZarrinWeb} alt="" />

<h1 className="text-center font-bold text-[18px] pt-[20px] ">Zarrin Website</h1>

<div className=" space-x-2 text-center ">
<i class="fa-brands fa-html5 text-2xl text-[#F0941C] hover:text-[#1C1A5D] "></i>
<i class="fa-brands fa-css3 text-2xl text-[#F0941C] hover:text-[#1C1A5D]"></i>

</div>

<Link to="https://github.com/mohamedfiish014/Zarrin-Web"> <button className="bg-[#F0941C] hover:transition-all hover:duration-200 hover:shadow-lg hover:border-2 hover:border-[#F0941C] hover:bg-transparent hover:text-[#F0941C] font-bold text-white p-2 w-[200px] ml-[22px] mt-[20px] rounded-lg " type="submit">Visit on Github<i class="fa-brands fa-github pl-[10px] "></i></button></Link>
</motion.div>

{/* Agrivast Website */}

<motion.div 

initial={{y: 0, opacity: 0 }}
      whileInView={{opacity: 1, y: 1}}
      transition={{duration: 3}}

className="w-[250px] h-[400px] rounded-xl bg-white shadow-xl mt-[20px] ">
<img className="w-[250px] h-[250px] border-2 border-[#F0941C] rounded-t-xl hover:scale-90 transition-all duration-500" src={AgriVastWeb} alt="" />

<h1 className="text-center font-bold text-[18px] pt-[20px] ">Agri Vast Website</h1>

<div className=" space-x-2 text-center  ">
<i class="fa-brands fa-html5 text-2xl text-[#F0941C] hover:text-[#1C1A5D] "></i>
<i class="fa-brands fa-css3 text-2xl text-[#F0941C] hover:text-[#1C1A5D] "></i>

</div>

<Link to="https://github.com/mohamedfiish014/Agrivast-Web"> <button className="bg-[#F0941C] hover:transition-all hover:duration-200 hover:shadow-lg hover:border-2 hover:border-[#F0941C] hover:bg-transparent hover:text-[#F0941C] font-bold text-white p-2 w-[200px] ml-[22px] mt-[20px] rounded-lg " type="submit">Visit on Github<i class="fa-brands fa-github pl-[10px] "></i></button></Link>
</motion.div>
</div>

{/* Second Part */}

<motion.div 

initial={{y: 0, opacity: 0 }}
      whileInView={{opacity: 1, y: 1}}
      transition={{duration: 3}}

className="sm:flex gap-8  justify-center grid mt-[20px] ">

{/* Ever Green Website */}

<div className="w-[250px] h-[400px] rounded-xl bg-white shadow-xl  mt-[20px] ">
<img className="w-[250px] h-[250px] border-2 border-[#F0941C] rounded-t-xl hover:scale-90 transition-all duration-500" src={EverGreenWeb} alt="" />

<h1 className="text-center font-bold text-[18px] pt-[20px] ">Ever Green Website</h1>

<div className=" space-x-2 text-center ">
<i class="fa-brands fa-html5 text-2xl text-[#F0941C] hover:text-[#1C1A5D] "></i>
<img className="w-[20px] h-[20px] absolute bottom-[174px] left-[160px] " src={TailwindIcon} alt="" />
</div>

<Link to="https://github.com/mohamedfiish014/Flower-Website"> <button className="bg-[#F0941C] hover:transition-all hover:duration-200 hover:shadow-lg hover:border-2 hover:border-[#F0941C] hover:bg-transparent hover:text-[#F0941C] font-bold text-white p-2 w-[200px] ml-[22px] mt-[20px] rounded-lg " type="submit">Visit on Github<i class="fa-brands fa-github pl-[10px] "></i></button></Link>
</div>

{/* Dashboard Website */}

<motion.div 

initial={{y: 0, opacity: 0 }}
      whileInView={{opacity: 1, y: 1}}
      transition={{duration: 3}}

className="w-[250px] h-[400px] rounded-xl bg-white shadow-xl mt-[20px] ">
<img className="w-[250px] h-[250px] border-2 border-[#F0941C] rounded-t-xl hover:scale-90 transition-all duration-500" src={DashboardWeb} alt="" />

<h1 className="text-center font-bold text-[18px] pt-[20px] ">Dashboard Website</h1>

<div className=" space-x-2 text-center ">
<i class="fa-brands fa-html5 text-2xl text-[#F0941C] hover:text-[#1C1A5D]"></i>
<i class="fa-brands fa-css3 text-2xl text-[#F0941C] hover:text-[#1C1A5D]"></i>

</div>

<Link to="https://github.com/mohamedfiish014/Dashboard"> <button className="bg-[#F0941C] hover:transition-all hover:duration-200 hover:shadow-lg hover:border-2 hover:border-[#F0941C] hover:bg-transparent hover:text-[#F0941C] font-bold text-white p-2 w-[200px] ml-[22px] mt-[20px] rounded-lg " type="submit">Visit on Github<i class="fa-brands fa-github pl-[10px] "></i></button></Link>
</motion.div>

{/* Code Xalka Website */}

<motion.div 

initial={{y: 0, opacity: 0 }}
      whileInView={{opacity: 1, y: 1}}
      transition={{duration: 4}}

className="w-[250px] h-[400px] rounded-xl bg-white shadow-xl mt-[20px] ">
<img className="w-[250px] h-[250px] border-2 border-[#F0941C] rounded-t-xl hover:scale-90 transition-all duration-500" src={CodeXalkaWeb} alt="" />

<h1 className="text-center font-bold text-[18px] pt-[20px] ">Code Xalka Website</h1>

<div className=" space-x-2 text-center ">
<i class="fa-brands fa-html5 text-2xl text-[#F0941C] hover:text-[#1C1A5D] "></i>
<img className="w-[20px] h-[20px] absolute bottom-[174px] left-[720px] " src={TailwindIcon} alt="" />

</div>

<Link to="https://github.com/mohamedfiish014/Code-Xalka"> <button className="bg-[#F0941C] hover:transition-all hover:duration-200 hover:shadow-lg hover:border-2 hover:border-[#F0941C] hover:bg-transparent hover:text-[#F0941C] font-bold text-white p-2 w-[200px] ml-[22px] mt-[20px] rounded-lg " type="submit">Visit on Github<i class="fa-brands fa-github pl-[10px] "></i></button></Link>
</motion.div>

{/* Agrivast Website */}

<motion.div 

initial={{y: 0, opacity: 0 }}
      whileInView={{opacity: 1, y: 1}}
      transition={{duration: 4}}

className="w-[250px] h-[400px] rounded-xl bg-white shadow-xl mt-[20px] ">
<img className="w-[250px] h-[250px] border-2 border-[#F0941C] rounded-t-xl hover:scale-90 transition-all duration-500" src={BngOogWeb} alt="" />

<h1 className="text-center font-bold text-[18px] pt-[20px] ">BNGOOG Website</h1>

<div className=" space-x-2 text-center  ">
<i class="fa-brands fa-html5 text-2xl text-[#F0941C] hover:text-[#1C1A5D] "></i>
<i class="fa-brands fa-css3 text-2xl text-[#F0941C] hover:text-[#1C1A5D] "></i>

</div>

<Link to="https://github.com/mohamedfiish014/BNGOOG-Website"> <button className="bg-[#F0941C] hover:transition-all hover:duration-200 hover:shadow-lg hover:border-2 hover:border-[#F0941C] hover:bg-transparent hover:text-[#F0941C] font-bold text-white p-2 w-[200px] ml-[22px] mt-[20px] rounded-lg " type="submit">Visit on Github<i class="fa-brands fa-github pl-[10px] "></i></button></Link>
</motion.div>
</motion.div>

<Header/>
<div className="mt-[30px] ">
<Footer/>
</div>
</div>
}

export default WebDesign