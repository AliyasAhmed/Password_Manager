import React from "react";

const Contact = () => {
  return (
    <div className="p-5 bg-[#191E29]">
      {/* Header Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#01C38D] mb-4">Contact Us</h1>
        <p className="text-[#FFFFFF] text-lg max-w-3xl mx-auto">
          We’re here to assist you! Whether you have questions about our services, need assistance, or want to provide feedback, feel free to reach out to us.
        </p>
      </section>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto bg-[#132D46] shadow-lg rounded-lg p-6">
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="block text-[#FFFFFF] font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full p-2 border border-[#696E79] bg-[#191E29] text-[#FFFFFF] rounded-md focus:ring-[#01C38D] focus:border-[#01C38D]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#FFFFFF] font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-[#696E79] bg-[#191E29] text-[#FFFFFF] rounded-md focus:ring-[#01C38D] focus:border-[#01C38D]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[#FFFFFF] font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows="5"
              className="mt-1 block w-full p-2 border border-[#696E79] bg-[#191E29] text-[#FFFFFF] rounded-md focus:ring-[#01C38D] focus:border-[#01C38D]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#01C38D] text-[#FFFFFF] font-bold py-2 px-4 rounded-md hover:bg-[#132D46] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Get in Touch Section */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-[#01C38D] mb-4">Get in Touch</h2>
        <p className="text-[#FFFFFF]">You can also reach us at:</p>
        <div className="mt-4">
          <p className="text-[#FFFFFF]">
            <strong>Email:</strong> contact@yourdomain.com
          </p>
          <p className="text-[#FFFFFF]">
            <strong>Phone:</strong> +1-234-567-890
          </p>
          <p className="text-[#FFFFFF]">
            <strong>Address:</strong> 123 HealthCare Lane, Wellness City, Country
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;