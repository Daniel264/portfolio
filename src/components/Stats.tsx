import React from "react";

const Stats = () => {
    return (
        <div>
            <div className=" stats stats-horizontal w-[400px] bg-[#181C14] text-base-200 shadow sm:stats-vertical sm:w-max ">
                <div className="stat">
                    <div className="stat-value">3+</div>
                    <div className="stat-title text-neutral-400">
                        Years of <br /> experience
                    </div>
                </div>
                <hr className="" />

                <div className="stat">
                    <div className="stat-value">2000</div>
                    <div className="stat-title text-neutral-400">
                        Combined <br />
                        followers
                    </div>
                </div>
                <hr />
                <div className="stat">
                    <div className="stat-value">20+</div>
                    <div className="stat-title text-neutral-400">Projects</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
