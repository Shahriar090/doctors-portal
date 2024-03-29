import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const TeamBanner = () => {

  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-light border-0 lg:border-4 border-cyan-400 mt-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="	https://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/doktorka.png"
            className="max-w-xs lg:max-w-full" data-aos="fade-left"
          />
          <div className="m-0 lg:m-20" data-aos="fade-right"> 
            <h3 className="text-xl lg:text-2xl font-bold">Dr. Stephanie Wosniack</h3>
            <span className="divider w-28 "></span>
            <h1 className="text-3xl lg:text-5xl font-bold ">Our <span className="text-cyan-500">Team</span></h1>
            <p className="py-6">
             Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Sit provident laborum minima cupiditate impedit illum qui dolore.<br></br> Alias provident reiciendis perspiciatis, maxime, labore id consectetur<br></br> perferendis, asperiores unde accusantium totam.
            </p>
            <img src="	https://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/signature.png" alt="" className="w-[100px] h-50px] lg:w-[180px] h-[80px]" />
          </div>
        </div>
      </div>
           <div className="text-center -mt-4 lg:-mt-6">
           <button className="btn btn-outline bg-cyan-600 text-white btn-sm lg:btn-md">Find Out More</button>
           </div>
    </div>
  );
};

export default TeamBanner;
