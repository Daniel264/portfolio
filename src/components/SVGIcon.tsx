import React from "react";
import MongoDBIcon from "./sprited"; // Ensure correct path
import { JavaScriptIcon } from "./Icons";
// Import other icons as needed

const iconMap: { [key: string]: React.FC } = {
    MongoDB: MongoDBIcon,
    JS: JavaScriptIcon,
    // Add other icons here
};

interface SVGIconProps {
    type?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({ type }) => {
    const IconComponent = type ? iconMap[type] : null; // Get the corresponding icon

    return <div style={{ width: "24px", height: "24px" }}>{IconComponent ? <IconComponent /> : null}</div>;
};

export default SVGIcon;
