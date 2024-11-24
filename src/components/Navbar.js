import React, { useState, useEffect } from "react";

import { RxCross1 } from "react-icons/rx";

import { FiMenu } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
const NavBar = () => {
  const [textColor, setTextColor] = useState("white");
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
const location = useLocation();
const navigate = useNavigate();

const handleScroll = (targetId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(targetId);
      }, 700);
    } else {
      scrollToSection(targetId);
    }
  };
  
  const scrollToSection = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Ensure the menu closes
    }
  };
  

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 400) {
        setBackgroundColor("white");
        setTextColor("black");
      } else if (window.scrollY <= 400) {
        setBackgroundColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300  p-2 md:p-4 "
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <section className="flex justify-between ">
        <a style={{ color: `${textColor}` }} href="/">
          <div className="flex items-center">
            <div className="flex flex-col justify-between ml-2">
              <h1 className="md:text-3xl  text-xl font-bold ">Riara Swimming</h1>
              <p className="md:text-sm text-xs ">CLUB</p>
            </div>
          </div>
        </a>

        <div className="flex">
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="flex group cursor-pointer  transition ease-in-out duration-500"
          >
            <FiMenu
              style={{ color: `${textColor}` }}
              className=" font-bold cursor-pointer animate-bounce  focus:scale-105 transition ease-in-out duration-500  text-3xl md:text-5xl"
            />
          </div>
        </div>
        <div
          className={
            isOpen
              ? "fixed w-[100%] left-0  top-0  h-[100vh] bg-[#333333]  transition ease-in-out duration-500"
              : "fixed top-[-200%] h-[100vh] w-[100%]  left-0  transition ease-in-out duration-500"
          }
        >
          <div
            className="flex justify-end p-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxCross1 className="text-4xl text-white" />
          </div>

          <div className="flex flex-col text-3xl uppercase text-[#888888] items-center gap-8">
            <Link to={'/'}>
              <p
                className="cursor-pointer hover:text-white transition ease-in-out duration-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </p>
            </Link>
            <hr className="w-[20%] border-[#888888] border-opacity-50" />
            
              <p
                className="cursor-pointer hover:text-white transition ease-in-out duration-500"
                onClick={() => handleScroll("about")}
              >
                About
              </p>
        
            <hr className="w-[20%] border-[#888888] border-opacity-50" />
            
              <p
                className="cursor-pointer hover:text-white transition ease-in-out duration-500"
                onClick={() => handleScroll("weekly")}
              >
                Weekly
              </p>
            
            <hr className="w-[20%] border-[#888888] border-opacity-50" />
            <Link to={'/vc'}>
              <p
                className="cursor-pointer hover:text-white transition ease-in-out duration-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                Vc's CUP
              </p>
            </Link>
            <hr className="w-[20%] border-[#888888] border-opacity-50" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
