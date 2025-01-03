import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[0.5px] w-full bg-[#696E79] mb-10"></div>
      <footer className="bg-[#132D46] text-[#FFFFFF] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#01C38D]">About Us</h3>
              <p className="text-[#696E79]">
                We provide exceptional health care services to your loved ones.
                Your health is our priority, and we're dedicated to bringing you
                the best in medical assistance.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#01C38D]">Quick Links</h3>
              <ul className="text-[#696E79]">
                <li>
                  <a href="/" className="hover:text-[#01C38D]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[#01C38D]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-[#01C38D]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[#01C38D]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#01C38D]">Contact Info</h3>
              <ul className="text-[#696E79]">
                <li>
                  <strong>Email:</strong> contact@yourdomain.com
                </li>
                <li>
                  <strong>Phone:</strong> +1-234-567-890
                </li>
                <li>
                  <strong>Address:</strong> 123 HealthCare Lane, Wellness City,
                  Country
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#01C38D]">Follow Us</h3>
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  className="text-[#696E79] hover:text-[#01C38D]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a
                  href="https://twitter.com"
                  className="text-[#696E79] hover:text-[#01C38D]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="https://instagram.com"
                  className="text-[#696E79] hover:text-[#01C38D]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-[#696E79] hover:text-[#01C38D]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#696E79] mt-8 pt-6">
            <div className="flex items-center justify-between">
              <p className="text-[#696E79]">
                &copy; {new Date().getFullYear()} YourCompany. All rights
                reserved.
              </p>
              <div className="flex space-x-4">
                <a
                  href="/privacy-policy"
                  className="text-[#696E79] hover:text-[#01C38D]"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-of-service"
                  className="text-[#696E79] hover:text-[#01C38D]"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;