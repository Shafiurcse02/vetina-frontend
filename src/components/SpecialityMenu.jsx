import React from "react";
import { vetSpecialities } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <>
      <div
        id="speciality"
        className="flex items-center flex-col gap-4  py-16 text-gray-800"
      >
        <h2 className="text-3xl text-center mb-1 font-medium text-gray-800">
          Find by Speciality
        </h2>
        <p className=" sm:w-1/3 text-center text-sm text-gray-600 md:text-base">
          Choose from a variety of veterinary specialities to find the right
          doctor for your pet’s needs. Whether it’s surgery, dermatology, or
          dental care – we’ve got you covered.
        </p>
        <div className="flex sm:justify-center gap-4 pt-5  overflow-scroll w-full ">
          {vetSpecialities.map((item, index) => (
            <Link
              key={index}
              to={`/doctors/${item.name}`}
              onClick={() => scrollTo(0, 0)}
              className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            >
              <img
                src={item.image}
                alt=""
                className="w-16 sm:w-24 mb-2 h-16 sm:h-24 rounded-full"
              />

              <p className="mt-2 font-medium">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecialityMenu;
