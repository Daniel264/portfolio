import React, { useRef } from "react";
import gsap from "gsap";
import styles from './Description.module.css'
import { useIsomorphicLayoutEffect } from "framer-motion";

const Description = () => {
    const text = useRef(null);
    useIsomorphicLayoutEffect(() => {
        if (typeof window !== "undefined") {
            import("gsap").then((module) => {
                const gsap = module.default;
                import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
                    const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
                    gsap.registerPlugin(ScrollTrigger);

                    ScrollTrigger.create({
                        trigger: text.current,
                        pin: true,
                        start: "top top",
                        end: "bottom left", // Adjust this value as needed
                        pinSpacing: false,
                        markers: true,
                        onEnter: () => {
                            gsap.set(text.current, { opacity: 0, stagger: 0.3 });
                        },
                        onLeave: () => {
                            gsap.set(text.current, { opacity: 1 });
                        },
                    });
                });
            });
        }
    }, []);
    return (
        <article className={styles.article}>
            <p className={styles.text_block}>I&apos;m probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts</p>
            <p className={styles.text_block}>In building JavaScript applications, I&apos;m equipped with just the right tools, and can absolutely function independently of them to deliver fast,</p>
        </article>
    );
};

export default Description;
