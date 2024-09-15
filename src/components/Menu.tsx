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
            <ul className=" menu hidden rounded-box bg-inherit sm:flex">
                <li className="my-menu">
                    <a href="https://github.com/Daniel264" className="tooltip tooltip-right transition-transform hover:scale-125" data-tip="Twitter" target="_blank" rel="noopener noreferrer ">
                        <i className="fab fa-twitter fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
                <li className="my-menu">
                    <a href="https://github.com/Daniel264" className="tooltip tooltip-right transition-transform hover:scale-125" data-tip="Instagram" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
                <li className="my-menu">
                    <a href="https://github.com/Daniel264" className="tooltip tooltip-right transition-transform hover:scale-125" data-tip="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
                <li className="my-menu">
                    <a href="https://github.com/Daniel264" className="tooltip tooltip-right transition-transform hover:scale-125" data-tip="GitHub" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
