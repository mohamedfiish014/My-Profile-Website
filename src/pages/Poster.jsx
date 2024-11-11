import { Link } from "react-router-dom"
import Header from "../Components/Header"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "../Components/Footer";

// // importing poster images

import AhsnP1 from "../images/AhsnP1.jpg"
// import AhsnP2 from "../images/AhsnP2.jpg"
// import AhsnP3 from "../images/AhsnP3.jpg"
// import AhsnP4 from "../images/AhsnP4.jpg"
// import AhsnP5 from "../images/AhsnP5.jpg"
// import AhsnP6 from "../images/AhsnP6.jpg"
// import AhsnP7 from "../images/AhsnP7.jpg"
// import AhsnP8 from "../images/AhsnP8.jpg"
// import AhsnP9 from "../images/AhsnP9.jpg"
// import AhsnP10 from "../images/AhsnP10.jpg"


import SimanPoster8 from "../images/SimanPoster8.jpg"
import SimanPoster9 from "../images/SimanPoster9.jpg"
import SimanPoster10 from "../images/SimanPoster10.jpg"
import SimanPoster11 from "../images/SimanPoster11.jpg"
import SimanPoster12 from "../images/SimanPoster12.jpg"
import SimanPoster16 from "../images/SimanPoster16.jpg"
import SimanPoster17 from "../images/SimanPoster17.jpg"
import SimanPoster18 from "../images/SimanPoster18.jpg"
import SimanPoster19 from "../images/SimanPoster19.jpg"
import SidePosterCase2 from "../images/SidePosterCase2.jpg"
import BagSideOnline from "../images/BagSideOnline.jpg"
import HeadphonePosterForSafe from "../images/HeadphonePosterForSafe.jpg"
import IOPPoster1 from "../images/IOPPoster1.jpg"
import IOPPoster2 from "../images/IOPPoster2.jpg"
import IOPPoster3 from "../images/IOPPoster3.jpg"
import IOPPoster4 from "../images/IOPPoster4.jpg"
import IOPPoster5 from "../images/IOPPoster5.jpg"
import IOPPoster6 from "../images/IOPPoster6.jpg"
import IOPPoster7 from "../images/IOPPoster7.jpg"
import IOPPoster8 from "../images/IOPPoster8.jpg"
import IOPPoster9 from "../images/IOPPoster9.jpg"
import IOPPoster10 from "../images/IOPPoster10.jpg"
import IOPPoster11 from "../images/IOPPoster11.jpg"
import IOPPoster12 from "../images/IOPPoster12.jpg"
import M8Poster4 from "../images/M8Poster4.jpg"
import M8Poster5 from "../images/M8Poster5.jpg"
import M8Style6 from "../images/M8Style6.jpg"
import SideOnline26june from "../images/SideOnline26june.jpg"
import Side5DCameraPoster from "../images/Side5DCameraPoster.jpg"
import Side90DCameraPoster from "../images/Side90DCameraPoster.jpg"
import SideEarphonePoster from "../images/SideEarphonePoster.jpg"
import SideHiringPoster from "../images/SideHiringPoster.jpg"
import SideOnlineRODE from "../images/SideOnlineRODE.jpg"
import HamarIT from "../images/HamarIT.jpg"
import HUAdmission from "../images/HUAdmission.jpg"
import HUAgri from "../images/HUAgri.jpg"
import HUHumanity from "../images/HUHumanity.jpg"
import HamarUniversityAddm from "../images/HamarUniversityAddm.jpg"
import HamarRegistration from "../images/HamarRegistration.jpg"
import HamarEidPoster from "../images/HamarEidPoster.jpg"
import HamarAnniversar from "../images/HamarAnniversar.jpg"


function Posters(){

  // Define the images for the gallery
  const images = [
    {
        original: SimanPoster8,
        thumbnail: SimanPoster8,
    },
    {
        original: SimanPoster9,
        thumbnail: SimanPoster9,
    },
    {
        original: SimanPoster10,
        thumbnail: SimanPoster10,
    },
    {
        original: SimanPoster11,
        thumbnail: SimanPoster11,
    },
    {
        original: SimanPoster12,
        thumbnail: SimanPoster12,
    },
    {
        original: SimanPoster16,
        thumbnail: SimanPoster16,
    },
    {
        original: SimanPoster17,
        thumbnail: SimanPoster17,
    },
    {
        original: SimanPoster18,
        thumbnail: SimanPoster18,
    },
    {
        original: SimanPoster19,
        thumbnail: SimanPoster19,
    },
    {
        original: SidePosterCase2,
        thumbnail: SidePosterCase2,
    },
    {
        original: BagSideOnline,
        thumbnail: BagSideOnline,
    },
    {
        original: HeadphonePosterForSafe,
        thumbnail: HeadphonePosterForSafe,
    },
    
    {
        original: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/430016839_385179694258840_8589696199699174762_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3wBtnYgGch0Q7kNvgFH9KDc&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=AGq7YUEgSAJtp3x-Dn0pmjL&oh=00_AYDWFDcrlqStBXJ-aIrYje_2MQppqzN7fQuuq8_XcjEXiw&oe=67243D83",
        thumbnail: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/430016839_385179694258840_8589696199699174762_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3wBtnYgGch0Q7kNvgFH9KDc&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=AGq7YUEgSAJtp3x-Dn0pmjL&oh=00_AYDWFDcrlqStBXJ-aIrYje_2MQppqzN7fQuuq8_XcjEXiw&oe=67243D83",
    },
    {
        original: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/395266771_313012141475596_2625822172990854328_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=smGn_TQRr4cQ7kNvgEIri8z&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=ARLrc0r2hFR0ja07QUx-3XQ&oh=00_AYCcZRB-xP3dr3Q9ln4eYxKsgWpN3iAnvm1HrDtuA3hhSA&oe=6724408C",
        thumbnail: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/395266771_313012141475596_2625822172990854328_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=smGn_TQRr4cQ7kNvgEIri8z&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=ARLrc0r2hFR0ja07QUx-3XQ&oh=00_AYCcZRB-xP3dr3Q9ln4eYxKsgWpN3iAnvm1HrDtuA3hhSA&oe=6724408C",
    },
    {
        original: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/430662584_388544273922382_5355755730629248485_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aOMlogAmGlUQ7kNvgEctzVQ&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=AXV1i4aIv7ThchFJarCUzDp&oh=00_AYDzxPx4wbJwCdBvXeMufwQpYhkNKmv-1eLvA8hrUAgtmg&oe=672466FB",
        thumbnail: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/430662584_388544273922382_5355755730629248485_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aOMlogAmGlUQ7kNvgEctzVQ&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=AXV1i4aIv7ThchFJarCUzDp&oh=00_AYDzxPx4wbJwCdBvXeMufwQpYhkNKmv-1eLvA8hrUAgtmg&oe=672466FB",
    },
    {
        original: Side90DCameraPoster,
        thumbnail: Side90DCameraPoster,
    },
    {
        original: SideOnline26june,
        thumbnail: SideOnline26june,
    },
    {
        original: Side5DCameraPoster,
        thumbnail: Side5DCameraPoster,
    },
    {
        original: SideEarphonePoster,
        thumbnail: SideEarphonePoster,
    },
    {
        original: SideOnlineRODE,
        thumbnail: SideOnlineRODE,
    },
    {
        original: SideHiringPoster,
        thumbnail: SideHiringPoster,
    },
    {
        original: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/449434855_459122676864541_8531703540656049583_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9E-w6H1KfO4Q7kNvgEFxJtZ&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=A20pdslGVRdoAEOS1zdM3Ek&oh=00_AYCQWQ04-sn8ANfKJxBES0BB5XUnHtPBMWSXDOKdTN16rw&oe=67245001",
        thumbnail: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/449434855_459122676864541_8531703540656049583_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9E-w6H1KfO4Q7kNvgEFxJtZ&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=A20pdslGVRdoAEOS1zdM3Ek&oh=00_AYCQWQ04-sn8ANfKJxBES0BB5XUnHtPBMWSXDOKdTN16rw&oe=67245001",
    },

    {
        original: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/458650424_502726455837496_8766064686199490335_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BoTglSCk0UgQ7kNvgEW8_4q&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=AvWF9sIK6ulVzOkYNphNqsC&oh=00_AYBfuzEsZH0fS4UTv_iOtlut5Xi8K1WaysTu2jei1T3BrA&oe=67244F51",
        thumbnail: "https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/458650424_502726455837496_8766064686199490335_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BoTglSCk0UgQ7kNvgEW8_4q&_nc_zt=23&_nc_ht=scontent.fmgq1-2.fna&_nc_gid=AvWF9sIK6ulVzOkYNphNqsC&oh=00_AYBfuzEsZH0fS4UTv_iOtlut5Xi8K1WaysTu2jei1T3BrA&oe=67244F51",
    },
    {
        original: AhsnP1,
        thumbnail: AhsnP1,
    },
    {
        original: HamarIT,
        thumbnail: HamarIT,
    },
    {
        original: HUAdmission,
        thumbnail: HUAdmission,
    },
    {
        original: HUAgri,
        thumbnail: HUAgri,
    },
    {
        original: HUHumanity,
        thumbnail: HUHumanity,
    },
    {
        original: HamarUniversityAddm,
        thumbnail: HamarUniversityAddm,
    },
    {
        original: HamarRegistration,
        thumbnail: HamarRegistration,
    },
    {
        original: HamarEidPoster,
        thumbnail: HamarEidPoster,
    },
    {
        original: HamarAnniversar,
        thumbnail: HamarAnniversar,
    },
    {
        original: IOPPoster1,
        thumbnail: IOPPoster1,
    },
    {
        original: IOPPoster2,
        thumbnail: IOPPoster2,
    },
    {
        original: IOPPoster3,
        thumbnail: IOPPoster3,
    },
    {
        original: IOPPoster4,
        thumbnail: IOPPoster4,
    },
    {
        original: IOPPoster5,
        thumbnail: IOPPoster5,
    },
    {
        original: IOPPoster6,
        thumbnail: IOPPoster6,
    },
    {
        original: IOPPoster7,
        thumbnail: IOPPoster7,
    },
    {
        original: IOPPoster8,
        thumbnail: IOPPoster8,
    },
    {
        original: IOPPoster9,
        thumbnail: IOPPoster9,
    },
    {
        original: IOPPoster10,
        thumbnail:IOPPoster10,
    },
    {
        original: IOPPoster11,
        thumbnail: IOPPoster11,
    },
    {
        original: IOPPoster12,
        thumbnail: IOPPoster12,
    },
    {
        original: M8Poster4,
        thumbnail: M8Poster4,
    },
    {
        original: M8Poster5,
        thumbnail: M8Poster5,
    },
    {
        original: M8Style6,
        thumbnail: M8Style6,
    },
    
    
    
];

    return <div>
        
    <div className=" w-full h-[200px] absolute bg-[url('https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?t=st=1728495163~exp=1728498763~hmac=d9d811ba9847883e31fbd3a8c168c7afb08056e55821a82cb6fe1be8f09cbd78&w=996')]">
    
    <h1 className=" mt-[80px] text-white font-bold text-[30px] text-center ">Lets see Poster Designs we have done for our clients</h1>

    
    <div className=" flex mt-[90px] gap-[30px] justify-center ">
<div className="absolute top-[150px] ">
    <ul className="text-white flex gap-[50px] ">
       <Link to="/graphic"> <li className="bg-[#F0941C] p-2 w-[140px] text-center rounded-lg font-medium cursor-pointer" >Graphic Design</li></Link>
       {/* <Link to="/graphic"> <li className="bg-[#F0941C] p-2 w-[140px] text-center rounded-lg font-medium cursor-pointer " >Graphic Design</li></Link> */}
        <Link to="/web"> <li className="bg-[#F0941C] p-2 w-[140px] text-center rounded-lg font-medium cursor-pointer" >Web Design</li></Link>
        <Link to="/video"> <li className="bg-[#F0941C] p-2 w-[140px] text-center rounded-lg font-medium cursor-pointer" >Videos</li></Link>
    </ul>
</div>
</div>
</div>

{/* image Galler slider */}

        <div className=" bg-[#1C1A5D] relative top-[200px] ">
            <ImageGallery 
                items={images} 
                showPlayButton={true} 
                showFullscreenButton={true} 
            />
        </div>

    
 <Header/>
 <div className="absolute w-full mt-[200px] ">
 <Footer/>
 </div>
</div>
    
  
    
}

export default Posters