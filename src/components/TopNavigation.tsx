import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// const poppins = Poppins({
//     subsets: ["latin"],
//     weight: ["200", "400", "700"],
// });

const TopNavigation = () => {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle function to open/close the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Smooth scroll function
    const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <nav className={`fixed top-0 z-50 w-full border-none bg-opacity-30 px-0 backdrop-blur lg:h-20 lg:px-9 `}>
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <a href="#" className="flex items-center space-x-3 text-primary rtl:space-x-reverse">
                        {/* <Image src="/assets/logo/logo.png" width={80} height={50} className="mt-5" alt="my website's logo" /> */}
                        <p className="text-2xl font-bold sf-uibold text-white">
                            <div className="avatar mr-3">
                                <div className="flex h-fit w-9 items-center justify-center rounded-full border-2 bg-white text-center pt-1">
                                    <i className="fa-solid fa-user text-black"></i>
                                </div>
                            </div>
                            Daniel
                        </p>
                    </a>
                    <button
                        onClick={toggleMenu} // Toggle menu on click
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none md:hidden dark:text-white"
                        aria-controls="navbar-multi-level"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                            <i className="fa-solid fa-x"></i>
                        ) : (
                            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        )}
                    </button>
                    <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:items-center md:justify-center md:w-auto lg:border-[#1a1a1a] py-3 px-5 rounded lg:border-2`} id="navbar-multi-level">
                        <ul className="mt-4 flex flex-col rounded-lg border-white border-2 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-none dark:bg-inherit">
                            <li>
                                <Link href="/" scroll={false}>
                                    <button className="block rounded px-3 py-2 text-sm text-[rgba(174,174,174,1)] md:bg-transparent md:p-0" onClick={(e) => handleSmoothScroll(e, "#home")}>
                                        HOME
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" scroll={false}>
                                    <button
                                        className="flex w-full items-center justify-between px-3 py-2 text-sm text-[rgba(174,174,174,1)] hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-[#4a4e59] dark:text-[rgba(174,174,174,1)] dark:hover:bg-gray-700 dark:focus:text-[rgba(174,174,174,1)] md:dark:hover:bg-transparent md:dark:hover:text-[#4a4e59]"
                                        onClick={(e) => handleSmoothScroll(e, "#about")}
                                    >
                                        ABOUT
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio" scroll={false}>
                                    <button
                                        className="block rounded px-3 py-2 text-sm text-[rgba(174,174,174,1)] hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-[#4a4e59] dark:text-[rgba(174,174,174,1)] dark:hover:bg-gray-700 dark:hover:text-[rgba(174,174,174,1)] md:dark:hover:bg-transparent md:dark:hover:text-[#4a4e59]"
                                        onClick={(e) => handleSmoothScroll(e, "#portfolio")}
                                    >
                                        PROJECTS
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" scroll={false}>
                                    <button
                                        className="block rounded px-3 py-2 text-sm text-[rgba(174,174,174,1)] hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-[#4a4e59] dark:text-[rgba(174,174,174,1)] dark:hover:bg-gray-700 dark:hover:text-[rgba(174,174,174,1)] md:dark:hover:bg-transparent md:dark:hover:text-[#4a4e59]"
                                        onClick={(e) => handleSmoothScroll(e, "#contact")}
                                    >
                                        CONTACT
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link href="#next" scroll={false}>
                            <button
                                className="block rounded px-3 py-2 text-sm text-[rgba(174,174,174,1)] hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-[#4a4e59] dark:text-[rgba(174,174,174,1)] dark:hover:bg-gray-700 dark:hover:text-[rgba(174,174,174,1)] md:dark:hover:bg-transparent md:dark:hover:text-[#4a4e59]"
                                onClick={(e) => handleSmoothScroll(e, "#next")}
                            >
                                <i className="fa-solid fa-globe "></i>
                            </button>
                        </Link>
                        {/* <Link href="#next" scroll={false}>
                            <button
                                className="block rounded px-3 py-2 text-sm border-2 border-[#171717] text-[rgba(174,174,174,1)] hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-[#4a4e59] dark:text-[rgba(174,174,174,1)] dark:hover:bg-gray-700 dark:hover:text-[rgba(174,174,174,1)] md:dark:hover:bg-transparent md:dark:hover:text-[#4a4e59]"
                                onClick={(e) => handleSmoothScroll(e, "#next")}
                            >
                                Hire me
                            </button>
                        </Link> */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TopNavigation;
