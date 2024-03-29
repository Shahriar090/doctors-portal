import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Location = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="border-0 m-0 lg:border-4 border-cyan-500 lg:m-8 lg:p-8">
    <h1 className="text-2xl lg:text-5xl font-bold uppercase text-center text-black m-8 lg:m-10"data-aos="fade-up-right">Find Us On Google Map</h1>
    <span className="divider w-1/2 mx-auto"></span>
    <div className="w-full m-3">
      <div
        className="hero h-96 w-full lg:w-2/3 lg:mx-auto"data-aos="fade-up-left"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/912922882/vector/vector-city-map-of-hong-kong-with-well-organized-separated-layers.jpg?s=612x612&w=0&k=20&c=aGfHaoxlL5XUqm52hesXu75feyPvB9C1v9AxSkqpKFo=)",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div> */}
      </div>
    </div></div>
  );
};

export default Location;
