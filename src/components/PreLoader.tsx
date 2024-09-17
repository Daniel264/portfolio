import React, { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const PreLoader = () => {
    useEffect(() => {
        const splitTypes = document.querySelectorAll(".preloader");

        splitTypes.forEach((splitType) => {
            const split = new SplitType(splitType as HTMLElement, { types: "words" });

            gsap.fromTo(
                split.words,
                {
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
                    opacity: 0,
                    y: 50,
                },
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: 0.5,
                    stagger: 0.3, // Stagger each word's animation
                }
            );
        });
    }, []);

    return (
        <div className="preloader flex min-h-screen w-full items-center justify-center bg-black text-center text-sm font-extrabold text-white md:text-4xl">
            <span className="px-2 md:px-7">Loading</span>
            <span className="px-2 md:px-7">Transforming</span>
            <span className="px-2 md:px-7">Unveiling</span>
        </div>
    );
};

export default PreLoader;
