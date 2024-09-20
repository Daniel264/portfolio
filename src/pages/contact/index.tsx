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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch("https://formspree.io/f/xyzgaavq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                handleSuccess();
            } else {
                setError("Something went wrong. Please try again later.");
            }
        } catch (error) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleSuccess = () => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div id="contact" className="contact-page px-2 py-20 text-center md:px-10 lg:py-0">
                    <div className="hero flex h-full flex-col items-center justify-center pt-20 text-white md:pt-24 lg:flex-row lg:items-start lg:justify-between lg:pb-20 lg:pt-32">
                        <div className="lg:w-1/2 lg:pr-10">
                            <h1 id="#big" className="mb-10 text-5xl font-bold md:text-7xl ">
                                Get In Touch
                            </h1>
                            <p className="reveal-text sf-ui text-center text-base text-[#abadb1]">
                                Currently, I&apos;m looking for new opportunities. <br />
                                If you have one, my inbox is always open. <br />
                                Whether you have a job proposal or question <br />
                                or you just want to say hi, I&apos;ll definitely get back to you.
                            </p>
                        </div>
                        <div className="hero-content w-full flex-col lg:w-1/2 lg:flex-row">
                            <div className="card max-h-fit w-full shrink-0 bg-transparent shadow-2xl md:max-w-2xl">
                                <form onSubmit={handleSubmit} className="sf-ui card-body">
                                    <div className="space-y-2 lg:flex lg:space-x-5 lg:space-y-0">
                                        <div className="form-control w-full text-sm ">
                                            <label className="label text-[#D1D5DB]">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="input rounded-none border-x-0 border-b-[1px] border-t-0 border-solid  border-[#212531] bg-transparent placeholder:text-[#7B7E86] placeholder:text-sm"
                                                placeholder="Enter your name..."
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-control w-full text-sm">
                                            <label className="label text-[#D1D5DB]">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="input rounded-none border-x-0 border-b-[1px] border-t-0 border-solid  border-[#212531] bg-transparent placeholder:text-[#7B7E86] placeholder:text-sm"
                                                placeholder="Enter your email address..."
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="text-sm">
                                        <label className="label text-[#D1D5DB]">Your Message</label>
                                        <textarea
                                            name="message"
                                            className="textarea textarea-md w-full max-w-full rounded-none border-x-0 border-b-[1px] border-t-0 border-solid border-[#212531] bg-black bg-transparent placeholder:text-[#7B7E86] placeholder:text-sm"
                                            placeholder="Hi! Your services will be needed at our company X. How quickly can you hop on this?"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn rounded-3xl border-none bg-[#212531] text-white">
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
