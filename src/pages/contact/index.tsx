import TopNavigation from "@/components/TopNavigation";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Contact = () => {
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const response = await fetch("https://formspree.io/f/xyzgaavq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSubmitting(true);
            } else {
                setError("Something went wrong. Please try again later.");
            }
        } catch (error) {
            setError("Something went wrong. Please try again later.");
        }
    };

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
            {submitting ? (
                <p className="">Submitted</p>
            ) : (
                <div id="contact" className="contact-page px-2 py-20 text-center md:px-10 lg:py-0 ">
                    <div className="hero flex h-full flex-col items-center justify-center pt-20 text-white md:pt-24 lg:flex-row lg:items-start lg:justify-between lg:pb-20 lg:pt-32">
                        <div className="lg:w-1/2 lg:pr-10">
                            <h1 id="#big" className="mb-10 text-5xl font-bold md:text-7xl">
                                Get In Touch
                            </h1>
                            <p className="reveal-text clash-font text-center text-lg">
                                Currently, i&apos;m looking for new opportunities. <br /> If you have one, my inbox is always open. <br /> Whether you have a job proposal or question <br />
                                or you just want to say hi, I&apos;ll definitely get back to you.
                            </p>
                        </div>
                        <div className="hero-content w-full flex-col lg:w-1/2 lg:flex-row">
                            <div className="card max-h-fit w-full shrink-0 bg-transparent shadow-2xl md:max-w-2xl">
                                <form onSubmit={handleSubmit} className="clash-font card-body">
                                    <div className="space-y-2 lg:flex lg:space-x-5 lg:space-y-0">
                                        <div className="form-control w-full">
                                            <label className="label text-[#D1D5DB]">Name</label>
                                            <input type="text" className="input border-2 border-[#212531] bg-transparent  placeholder:text-[#7B7E86]" placeholder="Enter your name..." value={formData.name} onChange={handleChange} required />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label text-[#D1D5DB]">Email</label>
                                            <input type="email" className="input border-2 border-[#212531] bg-transparent  placeholder:text-[#7B7E86]" placeholder="enter your email address..." value={formData.email} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="label text-[#D1D5DB]">Message</label>
                                        <textarea
                                            className="textarea textarea-md w-full max-w-full border-2 border-[#212531] bg-black  bg-transparent placeholder:text-base placeholder:text-[#7B7E86]"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="hi! your services will be needed at our company X. How quickly can you hop on this?"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn rounded-3xl border-none   bg-[#212531] text-white" onClick={handleSuccess}>
                                            {" "}
                                            Submit
                                            <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className="bow-arrow">
                                                <path fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {error && <p>{error}</p>}
        </>
    );
};

export default Contact;
