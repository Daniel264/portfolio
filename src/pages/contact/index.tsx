import TopNavigation from "@/components/TopNavigation";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Contact = () => {
    const [loading, setLoading] = useState(true);
    
    const handleSuccess = () => {
        toast.success("successful!");
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            // Simulate a slow network
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <div className="loading-animation"></div>}
            <TopNavigation />
            <div id="contact" className="contact-page px-2 py-20 text-center md:px-10 lg:py-0">
            <div className="hero flex min-h-screen flex-col items-center justify-center pt-20 text-white md:pt-24 lg:pt-32">
                <h1 className="mb-10 text-5xl font-bold">
                Get In Touch
                </h1>

                <div className="flex h-fit w-full flex-col items-center justify-center gap-4 md:gap-7 lg:flex-row">
                {/* <div className="flex h-[160px] w-[80%] flex-col items-center justify-center rounded-3xl shadow-xl border-2 border-[#7043E3]  lg:w-[32%]">
                    <i className="fa-regular fa-envelope fa-2x"></i>
                    <p className="py-1 text-xl text-[#7043E3]">email</p>
                    <p className="text-xl text-[#D1D5DB] md:text-2xl">danielolatinsu@gmail.com</p>
                </div>
                <div className="flex h-[160px] w-[80%] flex-col items-center justify-center rounded-3xl border-2 border-[#7043E3] shadow-xl lg:w-[32%]">
                    <i className="fa-solid fa-location-dot fa-2x"></i>
                    <p className="py-1 text-xl text-[#7043E3]">location</p>
                    <p className="text-xl text-[#D1D5DB] md:text-2xl">Lagos, lagos Nigeria</p>
                </div> */}
                </div>
                <div className="hero-content w-full flex-col lg:flex-row">
                <div className="card max-h-fit w-full shrink-0 bg-transparent shadow-2xl md:max-w-2xl">
                    <form className="card-body">
                    <div className="space-y-2 lg:flex lg:space-x-5 lg:space-y-0">
                        <div className="form-control w-full">
                        <label className="label text-[#D1D5DB]">Name</label>
                        <input type="text" className="input bg-transparent border-2 border-[#212531]  placeholder:text-[#D1D5DB]" required />
                        </div>
                        <div className="form-control w-full">
                        <label className="label text-[#D1D5DB]">Email</label>
                        <input type="email" className="input bg-transparent border-2 border-[#212531]  placeholder:text-[#D1D5DB]" required />
                        </div>
                    </div>
                    {/* <div>
                        <div className="form-control">
                        <label className="label text-[#D1D5DB]">Title</label>
                        <input type="text" className="input bg-transparent border-2 border-[#7043E3]  placeholder:text-[#D1D5DB]" required />
                        </div>
                    </div> */}
                    <div>
                        <label className="label text-[#D1D5DB]">Message</label>
                        <textarea className="textarea textarea-md w-full max-w-full bg-transparent border-2 border-[#212531]  bg-black placeholder:text-[#D1D5DB]"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn border-none bg-[#212531]   text-white rounded-3xl" onClick={handleSuccess}>Submit</button>
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
