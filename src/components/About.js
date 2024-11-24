import React from "react";
import { Link } from "react-router-dom";
const About = ({ portolioSelected, setPortfolioSelected }) => {
  return (
    <div id="about" className="flex md:flex-row my-2 md:my-0 flex-col min-h-screen">
      <div className="md:w-[50%] my-8 md:m-0 w-[80%] mx-auto h-[80vh]  flex flex-col  justify-center items-center">
        <div
          className="md:m-8 m-2 md:p-12  p-4 bg-white   "
          style={{
            border: "3px solid black",
          }}
        >
          <div className="flex text-[#CCCCCC] gap-1 font-bold text-7xl">
            <p className="text-black">About  </p>
         the Club
          </div>
          <p className="bg-black h-1 w-24"></p>
          <p className="my-4">
            The Riara Swimming Club is a vibrant and inclusive community dedicated to promoting swimming as a recreational and competitive sport. 
            Based at Riara University, the club welcomes members of all skill levels—from beginners looking to learn the basics to experienced swimmers
             aiming to hone their techniques.
            The club’s mission is to foster physical fitness, mental well-being, and sportsmanship among its members. 
            With access to state-of-the-art facilities, experienced coaches, and regular training sessions, Riara Swimming Club provides an environment where members can grow, thrive, and achieve their personal and athletic goals.
            
          </p>
        </div>
      </div>
      <div className="md:w-[50%] w-[90%] mx-auto bg-[#333333] text-white text-3xl   flex flex-col justify-center items-center">
        <div class="w-full max-w-xl mx-auto border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
            <iframe 
                class="w-full h-60 md:h-80" 
                src="https://www.youtube.com/embed/EpHtvK6W2RE" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
