import React from "react";

const Menu = () => {
    return (
        <div>
            <ul className="menu hidden rounded-box bg-inherit sm:flex">
                <li>
                    <a href="https://github.com/Daniel264" className="tooltip tooltip-right hover:scale-125 transition-transform" data-tip="Twitter" target="_blank" rel="noopener noreferrer ">
                        <i className="fab fa-twitter fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Daniel264" className="tooltip tooltip-right hover:scale-125 transition-transform" data-tip="Instagram" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Daniel264" className="tooltip tooltip-right hover:scale-125 transition-transform" data-tip="facebook" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Daniel264" className="tooltip tooltip-right hover:scale-125 transition-transform" data-tip="GitHub" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-2x"></i> {/* Use fa-2x to scale the icon */}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
