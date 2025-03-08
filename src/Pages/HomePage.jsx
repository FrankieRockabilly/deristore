import React from 'react';
import Homee from '../Component/Homee';

const Home = () => {
    return (
       <>
          <div className="bg-white font-poppins overflow-hidden pb-10 ">
             <Homee />
          </div>

          {/* this not found , comment if you want to off */}
          {/* <div
          className="w-full bg-white min-h-screen flex bg-no-repeat relative"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?t=st=1739435621~exp=1739439221~hmac=59c044553764ffe781f1085a517209e98f69b11f331c6c7d8f524f6433ccca8d&w=826')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-8 lg:right-10 flex flex-col justify-end items-center gap-2 w-full lg:w-auto">
            <h1 className="text-red-600 text-5xl lg:text-9xl font-extrabold">
              ERROR
            </h1>
            <p className="text-black text-2xl font-bold ">PAGE NOT FOUND</p>
            <p>sorry i can't find the page you are looking for</p>
            <p className="text-start">Error code : 403</p>
          </div>
        </div> */}
       </>
    );
};

export default Home;
