import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-inherit p-4 text-white">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - Daniel Olatinsu</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
