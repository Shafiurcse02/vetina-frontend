import { LucideImageUpscale } from "lucide-react";
import React from "react";
import { images } from "../assets/assets";
import { FaLongArrowAltRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 w-full">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          book Appointment <br /> with TYrusted Doctirs.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img src={images.grouppictures} alt="Doctors" className="w-24" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <br className="hidden sm:block" /> Magnam magni temporibus possimus
            optio eos nostrum commodi exercitationem consectetur?
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white  px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 duration-300"
        >
          Book Appointment <FaLongArrowAltRight className="w-3" />
        </a>
      </div>
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto  rounded-lg"
          src={images.doc3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
