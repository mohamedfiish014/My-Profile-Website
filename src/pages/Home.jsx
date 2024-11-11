import Header from "../Components/Header"
import Footer from "../Components/Footer"
import photo from "../images/myphoto.png"
import MyCV from "../Components/MyCV.pdf"
import {motion} from "framer-motion"

function Home() {
    return (
      <div>
        <div className="bg-[#1C1A5D] w-full min-h-screen flex flex-col sm:flex-row justify-between items-center p-8 sm:p-0">
          
          {/* Text Content */}
          <motion.div 
          
          initial={{opacity: 0, x:200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
          
          className="text-center sm:text-left sm:ml-[100px] sm:w-1/2 flex flex-col justify-center">
            <h1 className="text-[#F0941C] text-2xl sm:text-3xl mt-10 sm:mt-0">Hello, I'm</h1>
            <h1 className="text-white font-black text-2xl sm:text-4xl mt-4">Eng Idiris Mohamed Hussein</h1>
            <h2 className="text-[#F0941C] text-lg mt-2 sm:mt-4">Full-Stack Developer & Graphic Designer</h2>
            
            {/* Description */}
            <div className="text-white mt-6 sm:mt-8">
              <p>
                I am a <span className="font-bold text-[#F0941C]">Full-Stack web developer</span> experienced in both{" "}
                <span className="font-bold text-[#F0941C]">Front-End</span> &{" "}
                <span className="font-bold text-[#F0941C]">Back-End</span> development. I create{" "}
                <span className="font-bold text-[#F0941C]">eye-catching websites</span> to attract your{" "}
                <span className="font-bold text-[#F0941C]">clients</span>.
              </p>
              <p className="mt-4">
                I'm also a <span className="font-bold text-[#F0941C]">Graphic Designer</span> specializing in{" "}
                <span className="font-bold text-[#F0941C]">branding</span> for businesses. I create{" "}
                <span className="font-bold text-[#F0941C]">logos</span> and <span className="font-bold text-[#F0941C]">event branding</span>.
              </p>
            </div>
            
            {/* Download Button */}
            <div className="flex justify-center sm:justify-start items-center mt-6 sm:mt-8">
              <button className="bg-[#F0941C] p-2 px-6 rounded-md font-bold text-white transition-all hover:border-2 hover:border-[#F0941C] hover:bg-transparent hover:text-white">
                <a href={MyCV} download>
                  Download my CV
                </a>
              </button>
            </div>
          </motion.div>
  
          {/* Profile Image */}
          <motion.div 
          
          initial={{opacity: 0, x:200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
          
          className="w-[300px] sm:w-[345px] mt-[20px] sm:mt-[50px] ">
            <img className="" src={photo} alt="Profile" />
          </motion.div>
        </div>
  
        <Header />
        <Footer />
      </div>
    );
  }
  
  export default Home;






// function Home(){

//     return <div>
// <div className="bg-[#1C1A5D] w-full h-screen sm:flex grid grid-cols sm:justify-between ">

// <div className=" ml-[100px]  ">
//     <h1 className="text-[#F0941C] absolute top-20 text-2xl">Hello, I'm</h1>
//     <h1 className="text-white absolute font-black top-[130px] text-2xl">Eng Idiris Mohamed Hussein</h1>
//     <h1 className="text-[#F0941C] absolute top-[160px] pl-[20px] text-15px] ">Full-Stack Developer & Graphic Designer</h1>
// <div className="absolute top-[250px] ">
// <p className="text-white">I am <span className="font-bold text-[#F0941C] ">Full-Stack web developer</span> who exprienced both <span className="font-bold text-[#F0941C]">Front-End</span> & <span className="font-bold text-[#F0941C]">Back-End</span> of the Website. <br /> I can create <span className="font-bold text-[#F0941C]">eye touching websites</span> for you wich can attract your <span className="font-bold text-[#F0941C]">clients</span></p>
// <p className="text-white pt-[30px] ">I am also <span className="font-bold text-[#F0941C] ">Graphic Designer</span> who specialized creating <span className="font-bold text-[#F0941C]">amazing designs</span> for your business <span className="font-bold text-[#F0941C]"></span> . <br /> I can create <span className="font-bold text-[#F0941C]">attractive Logo branding</span> & <span className="font-bold text-[#F0941C]">Event branding</span> for your business</p>
//     <i class="fa-solid fa-download absolute top-[185px] left-[80px] text-white hover:text-[#F0941C] "></i>
//     <button className="bg-[#F0941C] p-2 w-[340px] rounded-md font-bold mt-[50px] text-white hover:border-2 hover:border-[#F0941C] hover:bg-transparent hover:text-white "> <a href={MyCV} download={true}>Download my CV</a> </button>
// </div>
// </div>

//     <div>
// <img className="w-[345px] pt-[50px] " src={photo} alt="" />
// </div>
// </div>


// <Header/>
// <Footer/>
//     </div>
// }


// export default Home