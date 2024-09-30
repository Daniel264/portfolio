"use client";

import React, { useState } from "react";
import Button from "./Button";

const SideMenu = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <div className="fixed right-[50px] top-[50px]">
                <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
            </div>
        </div>
    );
};

export default SideMenu;
