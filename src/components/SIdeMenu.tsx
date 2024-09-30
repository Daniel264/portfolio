"use client";

import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const menu = {
    open: {
        width: "480px",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
};

const SideMenu = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="fixed right-[50px] top-[50px] z-50">
            <motion.div className="w-[480px] h-[650px] bg-[#c9fd74] rounded-3xl relative" variants={menu} animate={isActive ? "open" : "closed"} initial="open">
                <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
            </motion.div>
        </div>
    );
};

export default SideMenu;
