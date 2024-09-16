import React, { use, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const PreLoader = () => {

    useEffect(() => {
        const splitTypes = document.querySelectorAll(".reveal-text");

        splitTypes.forEach((splitType) => {
            const split = new SplitType(splitType as HTMLElement);
            gsap.from(split.chars, {
                duration: 0.01,
                opacity: 0,
                y: 10,
                stagger: 0.02,
            });
        });
    })
    return <div className="reveal-text min-h-screen flex justify-center items-center w-full text-4xl font-extrabold text-white">PreLoader</div>;
};

export default PreLoader;
