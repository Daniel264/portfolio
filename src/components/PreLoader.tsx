import React, { use, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const PreLoader = () => {
    useEffect(() => {
        const splitTypes = document.querySelectorAll(".preloader");

        splitTypes.forEach((splitType) => {
            const split = new SplitType(splitType as HTMLElement);
            gsap.fromTo(
                split.chars,
                {
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
                    duration: 2,
                    opacity: 0,
                    y: 0,
                    stagger: 0.2,
                },
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 2,
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                }
            );
        });
    });
    return (
        <div className="preloader flex min-h-screen w-full items-center text-center justify-center text-xl  md:text-4xl font-extrabold text-white ">
            <span className="px-7">Loading</span>
            <span className="px-7">Transforming</span>
            <span className="px-7">Unveiling</span>
        </div>
    );
};

export default PreLoader;
