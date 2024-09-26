import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
}

export const Reveal = ({ children }: Props) => {
    return (
        <div className="reveal">
            <motion.div>{children}</motion.div>
        </div>
    );
};
