import React, { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Menu = () => {
    useEffect(() => {
        const splitIcons = new SplitType(".my-menu");

        const tl = gsap.timeline();

        tl.to(
            ".my-menu",
            {
                y: 100,
                opacity: 1,
                stagger: 0.3,
                delay: 0.2,
                duration: 2.5,
            },
            "=1.6"
        ); // You can use time offsets here in a timeline
    }, []);
    return (
        <div>
            <ul className=" menu flex flex-row rounded-box bg-inherit md:flex md:flex-col">
                <li className="my-menu">
                    <a href="https://twitter.com/DanielOlatinsu" className="tooltip tooltip-right scale-75 transition-transform hover:scale-125" data-tip="Twitter" target="_blank" rel="noopener noreferrer ">
                        <i className="fab fa-twitter fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
                <li className="my-menu">
                    <a href="https://www.instagram.com/_.daniel._fo/" className="tooltip tooltip-right scale-75 transition-transform hover:scale-125" data-tip="Instagram" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
                <li className="my-menu">
                    <a href="https://www.linkedin.com/in/daniel-olatinsu-09415a230/" className="tooltip tooltip-right transition-transform scale-75 hover:scale-125" data-tip="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
                <li className="my-menu">
                    <a href="https://github.com/Daniel264" className="tooltip tooltip-right transition-transform scale-75 hover:scale-125" data-tip="GitHub" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
