import React from "react";

const Loader = () => {
    return (
        <div className="loader absolute z-[999] h-[100vh] w-full">
            <div className="blinder-container absolute top-0 flex h-[100vh] w-full">
                <div className="blinder h-[100vh] flex-1 origin-top bg-[#8da8a2]"></div>
                <div className="blinder h-[100vh] flex-1 origin-top bg-[#8da8a2]"></div>
                <div className="blinder h-[100vh] flex-1 origin-top bg-[#8da8a2]"></div>
                <div className="blinder h-[100vh] flex-1 origin-top bg-[#8da8a2]"></div>
                <div className="blinder h-[100vh] flex-1 origin-top bg-[#8da8a2]"></div>
            </div>
        </div>
    );
};

export default Loader;
