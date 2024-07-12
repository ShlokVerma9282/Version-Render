import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";


// npm i @emailjs/browser

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
    <div className="max-w-md mx-auto w-10/12">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
        <label className="mt-4">Name</label>
        <input type="text" name="user_name" className="w-full h-9 p-2 rounded border border-gray-300 focus:outline-none focus:border-teal-400" />
        
        <label className="mt-4">Email</label>
        <input type="email" name="user_email" className="w-full h-9 p-2 rounded border border-gray-300 focus:outline-none focus:border-teal-400" />
        
        <label className="mt-4">Message</label>
        <textarea name="message" className="w-full h-24 p-2 rounded border border-gray-300 focus:outline-none focus:border-teal-400" />
        
        <input type="submit" value="Send" className="mt-6 cursor-pointer bg-orange-500 text-white p-2 rounded" />
      </form>
    </div>
  );
};

export default ContactUs;
