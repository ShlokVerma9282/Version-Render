import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram, FaTwitter, FaFacebookMessenger } from 'react-icons/fa';

export const ContactUs = () => {
    const form = useRef();

    useEffect(() => {
        // Initialize EmailJS with your user ID
        emailjs.init('AsjtvsOnqjYS3LZkp');
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_oge4lyl', 'template_1ysmxkl', form.current, 'AsjtvsOnqjYS3LZkp')
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
            <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-4">
                    <h1 className="text-3xl font-semibold mb-4 text-orange-400 fuzzy-bubbles-bold mt-5">Contact Us</h1>
                    <p className="text-black mb-8">We'd love to hear from you! Please fill out the form below to get in touch.</p>
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label className="text-lg flex items-start justify-start font-medium text-orange-400" htmlFor="name">Name</label>
                            <input
                                type="text" name="user_name"
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-gray-100"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="text-lg flex items-start justify-start font-medium text-orange-400" htmlFor="email">Email</label>
                            <input
                                type="email" name="user_email"
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-gray-100"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="text-lg flex items-start justify-start font-medium text-orange-400" htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-gray-100"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                value="Send"
                                className="inline-flex justify-center py-4 px-6 border border-transparent shadow-sm text-xl font-normal rounded-md text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full lg:w-1/2 p-4 bg-orange-400 rounded-lg hidden lg:block">
                    <h2 className="ml-3 text-3xl font-semibold text-white fuzzy-bubbles-bold mb-5 mt-5">Company Information</h2>
                    <div className="space-y-5 ml-3 mt-5">
                        <div>
                            <h3 className="text-2xl font-xl text-white font-semibold">About Us</h3>
                            <p className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-xl text-white font-semibold">Address</h3>
                            <p className="text-gray-100">123 Business Rd, Business City, BC 12345</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-xl text-white font-semibold">Email</h3>
                            <p className="text-gray-100">info@company.com</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-xl text-white font-semibold">Phone</h3>
                            <p className="text-gray-100">+1 (234) 567-8900</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-xl text-white font-semibold">Follow Us</h3>
                            <div className="flex space-x-4 mt-2">
                                <a href="https://facebook.com" className="text-white hover:text-white"><FaFacebook size="50" /></a>
                                <a href="https://instagram.com" className="text-white"><FaInstagram size="50" /></a>
                                <a href="https://twitter.com" className="text-white"><FaTwitter size="50" /></a>
                                <a href="https://messenger.com" className="text-white"><FaFacebookMessenger size="50" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
