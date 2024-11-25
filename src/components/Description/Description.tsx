import React, { useRef } from "react";
import styles from "./Description.module.css";

const Description = () => {
    return (
        <article className={styles.article}>
            <p className={styles.text_block}>
                I&apos;m probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts
            </p>
            <p className={styles.text_block}>In building JavaScript applications, I&apos;m equipped with just the right tools, and can absolutely function independently of them to deliver fast,</p>
        </article>
    );
};

export default Description;
