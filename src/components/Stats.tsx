import React from "react";

const Stats = () => {
    return (
        <div>
            <div className=" stats stats-horizontal shadow sm:stats-vertical bg-[#181C14] text-base-200 w-[400px] sm:w-max ">
                <div className="stat">
                    <div className="stat-title text-base-200">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-base-200">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title text-base-200">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
