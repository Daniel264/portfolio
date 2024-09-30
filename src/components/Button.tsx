import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
    isActive: boolean;
    toggleMenu: () => void;
}

const Button: React.FC<ButtonProps> = ({ isActive, toggleMenu }) => {
    return (
        <div className="width-[100px] height-[40px] absolute right-0 top-0 cursor-pointer overflow-hidden rounded-[25px]">
            <motion.div className="relative h-full w-full" animate={{ top: isActive ? "-100%" : "0%" }} transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}>
                <div
                    className="el h-full w-full bg-[#c9fd74]"
                    onClick={() => {
                        toggleMenu();
                    }}
                >
                    <PerspectiveText label="Menu" />
                </div>
                <div
                    className="el h-full w-full bg-[#c9fd74]"
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

interface PerspectiveTextProps {
    label: string;
}

function PerspectiveText({ label }: PerspectiveTextProps) {
    return (
        <div className="preserve-3d ease-custom-cubic perspectiveText flex h-full w-full flex-col items-center justify-center transition-transform duration-[750ms]">
            <p className="ease-custom-cubic pointer-events-none uppercase transition-all duration-[750ms]">{label}</p>
            <p className="ease-custom-cubic pointer-events-none uppercase transition-all duration-[750ms]">{label}</p>
        </div>
    );
}
