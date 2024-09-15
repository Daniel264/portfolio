// components/AnimatedSection.js
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        import("gsap/CSSRulePlugin").then(({ CSSRulePlugin }) => {
                            const t1 = gsap.timeline({
                                defaults: { duration: 2, ease: "power4.inOut" },
                            });
                            const rule = CSSRulePlugin.getRule(".card-card:before");
                            t1.to(".card-card", {
                                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                                y: 0,
                                opacity: 1,
                                duration: 2.5,
                            });
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    );
};

export default AnimatedSection;
