import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
}

export const Reveal = ({ children }: Props) => {
    return (
        <div className="reveal">
            <motion.div
            variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 },
            }}
            >{children}</motion.div>
        </div>
    );
};
