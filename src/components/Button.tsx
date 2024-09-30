import React from "react";
import { motion } from "framer-motion";

const Button = ({ isActive, toggleMenu }) => {
    return (
        <div>
            <motion.div className="relative h-full w-full" animate={{ top: isActive ? "-100%" : "0%" }} transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}>
                <div
                    className="h-full w-full bg-[#c9fd74]"
                    onClick={() => {
                        toggleMenu();
                    }}
                >
                    <PerspectiveText label="Menu" />
                </div>
                <div
                    className="h-full w-full bg-[#c9fd74]"
                    onClick={() => {
                        toggleMenu();
                    }}
                >
                    <PerspectiveText label="Close" />
                </div>
            </motion.div>
        </div>
    );
};

export default Button;

function PerspectiveText({ label }) {
    return (
        <div className="flex flex-col justify-center items-center h-full h-full preserve-3d ">
            <p className="text-2xl font-bold">{label}</p>
            <p className="text-2xl font-bold">{label}</p>
        </div>
    );
}
