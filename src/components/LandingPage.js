import React from "react";
import herobg from "./images/bg.jpeg"
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import About from "./About";
import Weekly from "./Weekly";
<Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>
const LandingPage = () => {
  return (
    <div>
        <div
        className="md:h-[100vh] h-[80vh]  bg-no-repeat bg-fixed  bg-cover  bg-left   "
        id="home"
        style={{ backgroundImage: `url(${herobg})` }}
        >
        <div className=" items-end  flex md:h-[100vh] h-[80vh] bg-black/50 flex-col justify-center md:p-10 text-white  ">
        <div className="flex container mx-auto flex-col items-start">
            <div className="md:text-7xl text-5xl flex gap-2 font-bold">
                <span className="text-[#CCCCCC]">Hi,</span>
                Welcome to
                <Typewriter
                options={{
                    strings: ['Riara Swimming Club'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </div>
            <div className="md:text-3xl text-xl text-center font-bold mt-4">
                Dive in and enjoy swimming with friends.
            </div>
            <p className="text-lg text-white mt-2">
                Open to all students, from beginners to pros. Join us to swim, learn, and have fun together.
            </p>
            <Link
                to="/vc"
                className="text-white bg-blue-700 hover:scale-105 px-4 py-2 text-xl mt-4 cursor-pointer transition ease-in-out duration-500"
            >
                View Latest VC's Cup
            </Link>
            </div>

        </div>
        </div>
        <section id="about"><About /></section>
        <section id="weekly"><Weekly /></section>
    </div>
  );
};

export default LandingPage;
