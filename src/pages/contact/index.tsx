import Header from "@/components/Header";
import TopNavigation from "@/components/TopNavigation";
import React, { useState } from "react";

const Contact = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        // Simulate a slow network
        setLoading(false);
    }, 1000);
    return (
        <>
            {loading && <div className="loading-animation"></div>}
            <TopNavigation />
            <div className="contact-page bg-[#101010] px-2 py-20 md:px-10 lg:py-0">
                <div className="hero min-h-screen text-white">
                    <h1 className="absolute top-28 text-5xl font-bold md:top-32">
                        Contact <span className="text-slate-400">Me</span>
                    </h1>
                    <div className="hero-content w-full flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <div className="py-6">
                                <h2 className="text-2xl font-medium">Contact Info</h2>
                            </div>
                        </div>
                        <div className="card max-h-fit w-full shrink-0 bg-[#101010] shadow-2xl md:max-w-2xl">
                            <form className="card-body">
                                <div className="space-y-2 lg:flex lg:space-x-5 lg:space-y-0">
                                    <div className="form-control w-full">
                                        {/* <label className="label">
                                            <span className="label-text text-white">Full Name</span>
                                        </label> */}
                                        <input
                                            type="text"
                                            placeholder="name..."
                                            className="input input-bordered border-none 
                                        bg-black placeholder:text-base-100"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        {/* <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label> */}
                                        <input type="email" placeholder="email..." className="input input-bordered border-none bg-black placeholder:text-base-100" required />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        {/* <label className="label">
                                            <span className="label-text text-white">Title</span>
                                        </label> */}
                                        <input type="text" placeholder="Title..." className="input input-bordered border-none bg-black placeholder:text-base-100" required />
                                    </div>
                                </div>
                                <div>
                                    {/* <label className="label">
                                        {" "}
                                        <span className="label-text text-white">Text area</span>
                                    </label> */}
                                    <textarea placeholder="Enter Message ..." className="textarea textarea-bordered textarea-md w-full max-w-full border-none bg-black placeholder:text-base-100"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn border-none bg-slate-500">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
