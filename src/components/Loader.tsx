import React, { useEffect } from "react";
import gsap from "gsap";

const Loader = () => {
    useEffect(() => {
        const timeline = gsap.timeline({
            delay: 1.5, // Optional delay before the blinders start animating
        });

        // Animate blinders upwards
        timeline.to(".blinder", {
            y: "-100%", // Move each blinder out of the top of the viewport
            stagger: 0.2, // Animate each blinder one after the other
            ease: "power4.inOut",
            duration: 1.5,
            onComplete: () => {
                // Optionally, you can hide the loader after the animation completes
                const loaderElement = document.querySelector(".loader");
                if (loaderElement) {
                    (loaderElement as HTMLElement).style.display = "none";
                }
            },
        });
    }, []);

    return (
        <div className="loader absolute top-0 z-[999] h-[100vh] w-full">
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
