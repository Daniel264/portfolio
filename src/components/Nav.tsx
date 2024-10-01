import React from "react";
import { motion } from "framer-motion";
import { links } from "@/utilities/link";
import { perspective } from "@/Animations/Nav";
import { footerLinks } from "@/utilities/link";

const Nav = () => {
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
                            <motion.div>
                                <a className="text-lg">{title}</a>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Nav;
