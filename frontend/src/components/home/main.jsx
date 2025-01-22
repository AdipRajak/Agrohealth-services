import React from "react";
import Mysvg from "../../image/svg/home.svg";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";

const Main = () => {
    return (
        <div className="flex justify-between items-center flex-col md:flex-row gap-8 h-[90vh]">
            {/* Left Side: Image */}
            <div className="flex-1">
                <img src={Mysvg} alt="Agrohealth & Service" className="w-full h-auto" />
            </div>

            {/* Right Side: Text and Button */}
            <div className="flex-1 flex flex-col gap-4 justify-center items-center">
                <div className="space-y-3 flex flex-col">
                    <h1 className="font-bold text-[35px] sm:text-[45px] md:text-[55px] text-primary">
                    Connecting Farmers, Vets, and Progress, <br />for a Healthier Tomorrow!
                    </h1>
                    <p className="font-medium text-justify text-sm sm:text-base md:text-lg">
                    AgroHealth & Service is an innovative online platform designed
                    to revolutionize cattle farming by seamlessly connecting farmers, 
                    veterinary doctors, and local government authorities.
                    Our platform empowers farmers to access timely veterinary care, apply for subsidies, 
                    and stay informed about the latest in cattle farming practices.
                    </p>
                    <div className="flex justify-center md:justify-end">
                        <button className="flex gap-2 items-center px-9 bg-primary border-2 border-primary text-white py-3 rounded-sm font-semibold transition-all duration-500 ease-in-out hover:bg-white hover:text-primary">
                            Post <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
