
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { motion } from "framer-motion";

function Services() {
  return (
    <div>
      <Header />
      <div className="relative w-full h-full bg-gray-100 pt-10 pb-20">
        {/* Main Image */}
        <div className="sm:flex md: w-full">
          {/* <img
            className="block md:block ms:w-full "
            src="https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg"
            alt=""
          /> */}
        </div>

        {/* Title */}
        <h1 className="text-[#1C1A5D] text-3xl md:text-5xl font-bold text-center pt-[50px] md:mt-10 px-4">
          Services We Offer
        </h1>

        {/* Service Cards */}
        <div className="flex flex-col items-center mt-16 px-4 space-y-8 ">
          {[
            {
              title: "Graphic Design",
              description: "We create beautiful designs that capture attention and promote your business.",
              imgSrc: "https://img.freepik.com/free-photo/design-software-resize-icon-concept_53876-132194.jpg",
              bgColor: "hover:shadow-2xl hover:transition-all duration-500 ease-in",
            },
            {
              title: "Digital Marketing",
              description: "We deliver your products worldwide through modern digital marketing.",
              imgSrc: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg",
              bgColor: "hover:shadow-2xl hover:transition-all duration-500 ease-in",
            },
            {
              title: "Web Solutions",
              description: "We create beautiful websites to compete on a global scale.",
              imgSrc: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg",
              bgColor: "hover:shadow-2xl hover:transition-all duration-500 ease-in",
            },
            {
              title: "Motion Graphics",
              description: "We create stunning animations for your logos and videos.",
              imgSrc: "https://img.freepik.com/free-photo/male-videographer-editing-video-montage-post-production-software-working-computer-creating-movie-content-with-color-grading-edit-creative-multimedia-film-footage-app_482257-49853.jpg",
              bgColor: "hover:shadow-2xl hover:transition-all duration-500 ease-in",
            },
            {
              title: "Event Branding",
              description: "We make your event day beautiful and your presentations engaging.",
              imgSrc: "https://img.freepik.com/free-photo/red-carpet-white_1048-13293.jpg",
              bgColor: "hover:shadow-2xl hover:transition-all duration-500 ease-in",
            },
            {
              title: "Digital Consulting",
              description: "We offer advice to help you grow your business.",
              imgSrc: "https://img.freepik.com/free-photo/close-up-businesspeople-working-with-documents_1098-1263.jpg",
              bgColor: "",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white flex flex-col md:flex-row items-center w-full max-w-4xl p-4 shadow-lg ${service.bgColor}`}
            >
              <img className="w-full md:w-64 h-44 object-cover rounded-lg" src={service.imgSrc} alt={service.title} />
              <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
                <h2 className="text-2xl font-bold text-[#1C1A5D]">{service.title}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;












// import Footer from "../Components/Footer"
// import Header from "../Components/Header"

// function Services(){

//     return <div>
//      <div>

//     <div className="">
//         <img className="absolute right-0" src="https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg?t=st=1729175772~exp=1729179372~hmac=5290b86b75a4f1dc81d2ac4585028a347b5ac19d2c16f46a21a2f715408191da&w=740" alt="" />
    
//     <h1 className="absolute top-[220px] text-[#1C1A5D] text-[50px] font-bold left-[50px] ">Services we offer</h1>
//     </div>

//     <div  className="absolute top-[600px] left-[150px] ">

// {/* Graphic Design */}
// <div className="bg-white hover:shadow-2xl hover:transition-all duration-500 ease-in w-[1000px] h-[175px] rounded-br-[130px] ">
// <img className="w-[250px] " src="https://img.freepik.com/free-photo/design-software-resize-icon-concept_53876-132194.jpg?t=st=1729176389~exp=1729179989~hmac=bc17fae1aa884a3ff3d3d2657aef3b2d1178512ebc652325b5695977533928ee&w=826" alt="" />
// <h1 className="absolute top-[20px] left-[300px] text-[30px] font-bold text-[#1C1A5D] ">Graphic Design</h1>
// <p className="absolute top-[70px] left-[300px] ">We will create beautiful designs for you that will attract the attention of your customers and promote your business.</p>
// </div>

// {/* Digital Marketing */}
// <div className="bg-white hover:shadow-2xl hover:transition-all duration-500 ease-in w-[1000px] h-[175px] rounded-tr-[130px] mt-[20px] ">
// <img className="w-[250px] h-[175px]" src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?t=st=1729180269~exp=1729183869~hmac=2e04de92de668574292b075592bacefaa1eefd7624ad6bd9c2c2720d7c8fabe0&w=740" alt="" />
// <h1 className="absolute top-[210px] left-[300px] text-[30px] font-bold text-[#1C1A5D] ">Digital Marketing</h1>
// <p className="absolute top-[260px] left-[300px] ">We will deliver your products worldwide through modern digital marketing.</p>
// </div>

// {/* Web solutions */}
// <div className="bg-white hover:shadow-2xl hover:transition-all duration-500 ease-in w-[1000px] h-[175px] rounded-br-[130px] mt-[20px] ">
// <img className="w-[250px] h-[175px]" src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1729180882~exp=1729184482~hmac=e6a4c6926554ec103ecd0cd23a6ee48df1ec82a2a344e63781d06759a4c22568&w=740" alt="" />
// <h1 className="absolute top-[410px] left-[300px] text-[30px] font-bold text-[#1C1A5D] ">Web Solutions</h1>
// <p className="absolute top-[460px] left-[300px] ">We will create a beautiful website for you that can compete with the rest of the world.</p>
// </div>

// {/* Motion Graphics */}
// <div className="bg-white hover:shadow-2xl hover:transition-all duration-500 ease-in w-[1000px] h-[175px] rounded-tr-[130px] mt-[20px] ">
// <img className="w-[250px] h-[175px]" src="https://img.freepik.com/free-photo/male-videographer-editing-video-montage-post-production-software-working-computer-creating-movie-content-with-color-grading-edit-creative-multimedia-film-footage-app_482257-49853.jpg?t=st=1729181398~exp=1729184998~hmac=57fd590f29997e074268789bacefe65cfee636e986e62a9c6355e9daa7c3bc53&w=826" alt="" />
// <h1 className="absolute top-[610px] left-[300px] text-[30px] font-bold text-[#1C1A5D] ">Motion Graphics</h1>
// <p className="absolute top-[660px] left-[300px] ">We will create a beautiful animations for your Logos & vidoes for your business.</p>
// </div>

// {/* Event Branding */}
// <div className="bg-white hover:shadow-2xl hover:transition-all duration-500 ease-in w-[1000px] h-[175px] rounded-br-[130px] mt-[20px] ">
// <img className="w-[250px] h-[175px]" src="https://img.freepik.com/free-photo/red-carpet-white_1048-13293.jpg?t=st=1729181770~exp=1729185370~hmac=8aa0fee2b803c94ec5f9e8f90b013e994c6a66844ea4062b8702ee8feb105c73&w=996" alt="" />
// <h1 className="absolute top-[810px] left-[300px] text-[30px] font-bold text-[#1C1A5D] ">Event Branding</h1>
// <p className="absolute top-[860px] left-[300px] ">We will make beautiful the day of your event and your presentations <br/> to attract the participants of your forum.</p>
// </div>

// {/* Digital Consulting */}
// <div className="bg-white hover:shadow-2xl hover:transition-all duration-500 ease-in w-[1000px] h-[175px] rounded-br-[130px] mt-[20px] ">
// <img className="w-[250px] h-[175px]" src="https://img.freepik.com/free-photo/close-up-businesspeople-working-with-documents_1098-1263.jpg?t=st=1729230602~exp=1729234202~hmac=2c94ad2e118d735ba96f80724767ef64a7f4847edaa65ee4855e1b7d29d60ebb&w=826" alt="" />
// <h1 className="absolute top-[1010px] left-[300px] text-[30px] font-bold text-[#1C1A5D] ">Digital Consulting</h1>
// <p className="absolute top-[1060px] left-[300px] ">We provide you with constant advice to help you grow your business.</p>
// </div>
//     </div>
    
//     </div>
// <Header/>
// <div className="absolute bottom-[-1270px] w-full">
//         <Footer/>
//         </div>
//     </div>
// }


// export default Services