import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-base-300 p-4 text-base-content">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
