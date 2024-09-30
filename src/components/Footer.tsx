import React from "react";
import SideMenu from "./SIdeMenu";

interface Props {
    text: string;
    background: string;
}

const Footer = ({ text, background }: Props) => {
    return (
        <div>
            <footer className={`sf-ui footer footer-center bg-${background} p-4 text-${text}`}>
                <aside>
                    <p className="text-lg">Copyright © {new Date().getFullYear()} - Daniel Olatinsu</p>
               
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
