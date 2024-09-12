import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const TopNavigation = () => {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle function to open/close the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="fixed top-0 z-50 w-full border-none bg-[#101010] px-9 pt-3 lg:h-20">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <a href="#" className="flex items-center space-x-3 text-2xl text-primary rtl:space-x-reverse">
                        <Image src="/assets/logo/logo.png" width={50} height={50} alt="my website's logo" />
                    </a>
                    <button
                        onClick={toggleMenu} // Toggle menu on click
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm  focus:outline-none  md:hidden dark:text-white"
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
                    <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-multi-level">
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-none dark:bg-inherit ">
                            <li>
                                <Link href="/" className="block rounded px-3 py-2 text-xl text-white md:bg-transparent md:p-0" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <button
                                        id="dropdownNavbarLink"
                                        data-dropdown-toggle="dropdownNavbar"
                                        className="flex w-full items-center justify-between px-3 py-2 text-xl text-gray-900 hover:bg-gray-100 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:focus:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                                    >
                                        About
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio">
                                    <button className="block rounded px-3 py-2 text-xl text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                                        Portfolio
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <button className="block rounded px-3 py-2 text-xl text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                                        Contact
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TopNavigation;
