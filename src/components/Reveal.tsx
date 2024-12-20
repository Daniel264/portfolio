import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    children: JSX.Element;
}

export const Reveal = ({ children }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} className="reveal">
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};
