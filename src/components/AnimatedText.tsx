// components/AnimatedText.tsx
import React, { useEffect, useRef } from "react";
import { ReactNode } from "react";

interface AnimatedTextProps {
    children: ReactNode;
    className?: string;
}

const AnimatedText = ({ children, className }: AnimatedTextProps) => {
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const loadGsap = async () => {
            const { default: gsap } = await import("gsap");
            const { CSSRulePlugin } = await import("gsap/CSSRulePlugin");

            gsap.registerPlugin(CSSRulePlugin);

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const t1 = gsap.timeline({
                                defaults: { duration: 2, ease: "power4.inOut" },
                            });
                            t1.to(textRef.current, {
                                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                                y: 0,
                                opacity: 1,
                                duration: 2.5,
                            });
                        }
                    });
                },
                { threshold: 0.1 }
            );

            if (textRef.current) {
                observer.observe(textRef.current);
            }

            return () => {
                if (textRef.current) {
                    observer.unobserve(textRef.current);
                }
            };
        };

        loadGsap();
    }, []);

    return (
        <div ref={textRef} className={className}>
            {children}
        </div>
    );
};

export default AnimatedText;
