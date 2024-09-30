"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface FramerMagneticProps {
    children: React.ReactNode;
}

export default function FramerMagnetic({ children }: FramerMagneticProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { clientX, clientY } = e;

        if (ref.current) {
            const { width, height, left, top } = ref.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            setPosition({ x, y });
        }
    };

    const handleMouseLeave = () => {
        // Reset position when mouse leaves
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    // useEffect(() => {
    //     // Cleanup when component unmounts
    //     return () => {
    //         setPosition({ x: 0, y: 0 });
    //     };
    // }, []);

    return (
        <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} animate={{ x, y }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            {children}
        </motion.div>
    );
}



// import gsap from 'gsap';
// import React, { use, useEffect } from 'react';
// import { useRef } from 'react';

// export default function FramerMagnetic({children}) {

//     useEffect(() => {
//         const mouseMove = (e) => {
//             const {clientX, clientY} = e;
//             gsap.to(ref.current, {x: clientX)}
//         }

//         const mouseLeave = (e) => {

//         }

//         ref.current.addEventListener('mousemove', mouseMove)    
//         ref.current.addEventListener('mouseleave', mouseLeave)    

//         return () => {
//             ref.current.removeEventListener("mousemove", mouseMove);
//             ref.current.removeEventListener("mouseleave", mouseLeave);
//         }
//     })

//     const ref = useRef(null);
//     return (
//         React.cloneElement(children, {ref})
//     )
// }