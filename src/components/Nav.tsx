import React from "react";
import { motion } from "framer-motion";
import { links } from "@/utilities/link";

const Nav = () => {
    return (
        <div>
            <div>
                {links.map((link, i) => {
                    const { title, href } = link;
                    return (
                        <div key={`b_${i}`} className="">
                            <motion.div href={href} custom={i} variants={perspective} initial="initial" animate="enter" exit="exit">
                                <a>{title}</a>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Nav;
