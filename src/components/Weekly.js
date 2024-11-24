import React from "react";
import pic1 from "./images/13.jpeg"
import pic2 from "./images/14.jpeg"
import pic3 from "./images/15.jpeg"
import pic4 from "./images/24.jpeg"
import pic5 from "./images/23.jpeg"
import pic6 from "./images/18.jpeg"
import pic7 from "./images/19.jpeg"
import pic8 from "./images/20.jpeg"
import pic9 from "./images/21.jpeg"
import { FaInstagram } from "react-icons/fa";
const Weekly = () => {
  return (
    <div id="works">
      <div className="bg-black text-start  flex flex-col  p-4  md:items-end  md:p-12">
        <h1 className="md:text-7xl  text-5xl  text-white  font-bold  flex gap-2 ">
          <p className="text-white ">Weekly</p> Training
        </h1>
        <p className="bg-white   transition ease-in-out duration-500   h-1 w-20"></p>
      </div>
      <div className="flex">
        <div className="w-1/3 flex flex-col  ">
          <div className="relative group ">
            <img
              src={pic5}
              className="h-[40vh] object-cover object-top  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>

          <div className="relative group ">
            <img
              src={pic1}
              className="h-[60vh] object-cover object-top  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
          <div className="relative group ">
            <img
              src={pic6}
              className="h-[60vh] object-cover object-top  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
        </div>
        <div className="w-1/3  ">
          <div className="relative group ">
            <img
              src={pic7}
              className="h-[60vh] object-cover object-top  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
          <div className="relative group ">
            <img
              src={pic9}
              className="h-[60vh] object-cover object-center  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
          <div className="relative group ">
            <img
              src={pic4}
              className="h-[40vh] object-cover object-center  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
        </div>
        <div className="w-1/3  ">
          <div className="relative group ">
            <img
              src={pic8}
              className="h-[50vh] object-cover object-top  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
          <div className="relative group ">
            <img
              src={pic2}
              className="h-[50vh] object-cover object-center  w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
          <div className="relative group ">
            <img
              src={pic3}
              className="h-[60vh] object-cover object-center   w-[100%]"
            />
            {/* Overlay */}
            <a className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/40 transition ease-in-out cursor-pointer duration-500 ">
              <p className="text-gray-300 ">
                <FaInstagram
                  size={30}
                  className=" opacity-[0]  group-hover:opacity-[100%]"
                />
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weekly;
