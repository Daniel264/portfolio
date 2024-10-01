import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/utilities/link";
import { perspective } from "@/Animations/Nav";
import { footerLinks } from "@/utilities/link";
import gsap from "gsap";

const Nav = () => {
    useEffect(() => {
        gsap.to(".lin", {
            opacity: 1,
            y: -50,
            stagger: 0.3,
            duration: 1.4,
            rotateX: 30,
        });
    }, []);
    // gsap.to(".links", {
    //     opacity: 1,
    //     y: 50,
    //     delay: 2,
    //     stagger: 0.3,

    // });

    return (
        <div className="box-border flex h-full flex-col justify-between px-[40px] pb-[50px] pt-[100px]">
            <div className="flex flex-col gap-[10px] ">
                {links.map((link, i) => {
                    const { title, href } = link;
                    return (
                        <div key={`b_${i}`} className="linkContainer">
                            <motion.div href={href} custom={i} variants={perspective} initial="initial" animate="enter" exit="exit">
                                <a className="text-5xl leading-relaxed text-black">{title}</a>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-row gap-4">
                {footerLinks.map((link, i) => {
                    const { title, href } = link;
                    return (
                        <div key={`b_${i}`}>
                            <div className="lin opacity-0">
                                <a className="links text-lg">{title}</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Nav;
