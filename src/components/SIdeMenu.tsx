"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import Nav from "./Nav";

const SideMenu = () => {
    const [isActive, setIsActive] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

    // Update windowWidth state on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Define the menu animation
    const menu = {
        open: {
            width: windowWidth >= 500 ? "480px" : "90vw", // Use 480px for medium screens and above, 100vw for smaller screens
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

    return (
        <div className="fixed right-[50px] top-[50px] z-50">
            <motion.div className="relative h-[650px] w-[480px] rounded-3xl bg-[#c9fd74]" variants={menu} animate={isActive ? "open" : "closed"} initial="open">
                {isActive && <Nav />}
                <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
            </motion.div>
        </div>
    );
};

export default SideMenu;
