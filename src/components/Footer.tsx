import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center sf-ui bg-inherit p-4 text-inherit">
                <aside>
                    <p className="text-lg">Copyright © {new Date().getFullYear()} - Daniel Olatinsu</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
