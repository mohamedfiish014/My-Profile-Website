import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-gradient-to-r from-[#1C1A5D] w-full h-[60px] backdrop-blur-md bg-opacity-60 shadow-lg fixed top-0 left-0 right-0 z-10 transition-all duration-300">
        <div className="flex justify-between p-4">
          <h1 className="text-[#F0941C] text-2xl font-bold">Eng. Idiris</h1>

          <i
            className={`fa-solid ${menuOpen ? "fa-x" : "fa-bars"} text-white text-3xl sm:hidden cursor-pointer transition-transform duration-300`}
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>

          <ul
            className={`${
              menuOpen ? "grid" : "hidden"
            } sm:flex sm:gap-8 grid-cols-1 font-bold text-white absolute sm:static bg-[#1C1A5D] sm:bg-transparent left-0 right-0 top-[60px] sm:mt-[-20px] shadow-lg sm:shadow-none transition-all duration-300`}
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <li className={`p-4 cursor-pointer ${
              location.pathname === "/" ? "text-[#F0941C]" : "hover:text-[#F0941C]"
            }`}>Home</li>
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              <li className={`p-4 cursor-pointer ${location.pathname === "/about" ? "text-[#F0941C]" : "hover:text-[#F0941C]"}`}>About</li></Link>

            <Link to="/services" onClick={() => setMenuOpen(false)}>
              <li className={`p-4 cursor-pointer ${
              location.pathname === "/services" ? "text-[#F0941C]" : "hover:text-[#F0941C]"
            }`}>Services</li>
            </Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              <li className={`p-4 cursor-pointer ${
              location.pathname === "/projects" ? "text-[#F0941C]" : "hover:text-[#F0941C]"
            }`}>Projects</li>
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <li className={`p-4 cursor-pointer ${
              location.pathname === "/contact" ? "text-[#F0941C]" : "hover:text-[#F0941C]"
            }`}>Contact me</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;




// function Header() {

//     return <div className="">
    
// <div className="bg-gradient-to-r from-[#1C1A5D] w-full h-[60px] backdrop-blur-md bg-opacity-60 shadow-lg fixed top-0 left-0 right-0 z-10">
// <div className="flex justify-between p-4">

// <h1 className="text-[#F0941C] text-2xl font-bold ">Eng. Idiris</h1>
// <i  class="fa-solid fa-bars text-white text-3xl absolute right-4 sm:hidden " ></i>
// <i class="fa-solid fa-x text-white text-3xl absolute right-4 sm:hidden " ></i>
//     <ul className="sm:flex sm:gap-8 grid grid-col font-bold text-white" >
//     <Link to="/">  <li className="hover:text-[#F0941C] cursor-pointer ">Home</li></Link>
//     <Link to="/about"><li className="hover:text-[#F0941C] cursor-pointer">About</li></Link>
//     <Link to="/services">  <li className="hover:text-[#F0941C] cursor-pointer">Services</li></Link>
//     <Link to="/projects">  <li className="hover:text-[#F0941C] cursor-pointer">Projects</li></Link>
//     <Link to="/contact"> <li className="hover:text-[#F0941C] cursor-pointer">Contact me</li></Link>
//     </ul>
// </div>


// </div>
//     </div>
// }

// export default Header




// return (
//   <div>
//     <div className="bg-gradient-to-r from-[#1C1A5D] w-full h-[60px] backdrop-blur-md bg-opacity-60 shadow-lg fixed top-0 left-0 right-0 z-10">
//       <div className="flex justify-between items-center p-4">
//         <h1 className="text-[#F0941C] text-2xl font-bold">Eng. Idiris</h1>
        
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path 
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         <ul className={`md:flex gap-8 font-bold text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
//           <Link to="/">
//             <li className="hover:text-[#F0941C] cursor-pointer">Home</li>
//           </Link>
//           <Link to="/about">
//             <li className="hover:text-[#F0941C] cursor-pointer">About</li>
//           </Link>
//           <Link to="/services">
//             <li className="hover:text-[#F0941C] cursor-pointer">Services</li>
//           </Link>
//           <Link to="/projects">
//             <li className="hover:text-[#F0941C] cursor-pointer">Projects</li>
//           </Link>
//           <Link to="/contact">
//             <li className="hover:text-[#F0941C] cursor-pointer">Contact me</li>
//           </Link>
//         </ul>
//       </div>
//     </div>
//   </div>
// );
// }

// export default Header;