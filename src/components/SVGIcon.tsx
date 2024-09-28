import React from "react"; // Ensure correct path
import MongoDBIcon, { CSSIcon, ExpressIcon, GitHubIcon, HtmlIcon, JavaScriptIcon, NextIcon, NodeIcon, ReactIcon, SASSIcon, TypeScriptIcon, ViteTestIcon } from "./Icons";
// Import other icons as needed

const iconMap: { [key: string]: React.FC } = {
    MongoDB: MongoDBIcon,
    JS: JavaScriptIcon,
    TS: TypeScriptIcon,
    React: ReactIcon,
    Next: NextIcon,
    ViteTest: ViteTestIcon,
    GitHub: GitHubIcon,
    Express: ExpressIcon,
    SASS: SASSIcon,
    HTML: HtmlIcon,
    CSS: CSSIcon,
    Node: NodeIcon, // Add other icons here
    // Add other icons here
};

interface SVGIconProps {
    type?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({ type }) => {
    const IconComponent = type ? iconMap[type] : null; // Get the corresponding icon

    return <div style={{ width: "15px", height: "15px" }}>{IconComponent ? <IconComponent /> : null}</div>;
};

export default SVGIcon;
