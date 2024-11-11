import Footer from "../Components/Footer";
import Header from "../Components/Header";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion"



function Contact(){

// Email.Js wich allows you to reacive emails without backend
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_tjb3eyp', 'template_7buytx3', form.current, 'EIQPt3DpaxyRa0DOC')
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
    
    form.current.reset();
  };
  
  
  

    return <div>
<div className="bg-[url('https://img.freepik.com/free-photo/closeup-businessman-using-mobile-phone_53876-14790.jpg?t=st=1728131501~exp=1728135101~hmac=3f23e2e6495a9276487e9f83637ea2141ccdf256533fb2a4241dd910cd887dde&w=996')] w-full h-screen">

<motion.div 

initial={{opacity: 0, y:200}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}


id="c" className="sm:ml-[220px] ml-[10px] absolute top-20 sm:w-[900px] w-[370px] sm:h-[450px] h-[480px] rounded-lg text-center shadow-lg">
    <div className="mt-[30px] ">
    <form className="" action="" ref={form} onSubmit={sendEmail}>
    <div className="">
    <label className="text-white font-bold pl-[10px] " htmlFor="">Your Name</label>
<input className=" w-[220px] sm:ml-[20px] ml-[35px] text-white bg-transparent outline-none border-b-2 border-white" name="user_name" type="text" placeholder="Please enter your name here" />
    <label className="text-white sm:pl-[30px]  font-bold" htmlFor="">Your Email</label>
<input className="w-[220px] text-white ml-[25px] bg-transparent outline-none border-b-2 border-white " type="email" name="user_email" placeholder="Please enter your email here" />
</div>
<div className="mt-[30px] ">
<textarea className="sm:w-[670px] w-[335px] h-[300px] sm:ml-0 ml-[-10px] rounded-lg outline-[#F0941C] resize-none " name="message" placeholder="Your messege here" ref={form} id=""></textarea>

<button type="submit" value="Send" className="text-white mt-[10px] bg-[#F0941C] hover:border-2 hover:border-[#F0941C] hover:bg-transparent sm:w-[670px] w-[335px] ml-[-10px] sm:ml-0 p-2 font-bold rounded-sm ">Send</button>
</div>


    </form>
    </div>
</motion.div>

</div>
        <Header/>
        <Footer/>
    </div>
}

export default Contact