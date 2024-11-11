import {Link} from "react-router-dom";

function Footer(){

    return <div className="bg-[#F0941C] w-full h-[65px] mt-[0px] ">
<div className="justify-center p-4 text-2xl text-[#1C1A5D] gap-10 flex">
<Link to="https://www.facebook.com/search/top?q=ahsan%20advertising%20agency"> <i class="fa-brands fa-facebook cursor-pointer hover:text-white"></i></Link>

<Link to="https://github.com/mohamedfiish014"><i class="fa-brands fa-github hover:text-white"></i></Link>
<Link to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"> <i class="fa-brands fa-linkedin hover:text-white"></i></Link>
</div>
    </div>
}

export default Footer