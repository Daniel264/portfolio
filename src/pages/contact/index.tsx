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
            <div className="contact-page bg-[#31363F] px-2 md:px-10 py-20 lg:py-0">
                <div className="hero min-h-screen text-white">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Contact Me</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card max-h-fit w-full shrink-0 shadow-2xl md:max-w-2xl">
                            <form className="card-body">
                                <div className="lg:flex lg:space-x-5">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-white">Full Name</span>
                                        </label>
                                        <input type="text" placeholder="name..." className="input input-bordered" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" placeholder="email..." className="input input-bordered" required />
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Title</span>
                                        </label>
                                        <input type="text" placeholder="Title..." className="input input-bordered" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="label">
                                        {" "}
                                        <span className="label-text text-white">Text area</span>
                                    </label>
                                    <textarea placeholder="Message ..." className="textarea textarea-bordered textarea-md w-full max-w-full"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
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
