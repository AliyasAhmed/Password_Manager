import React from "react";

const About = () => {
  return (
    <div className="p-5 bg-[#191E29]">
      {/* About Us Section */}
      <section className="mb-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="md:w-1/2 w-full px-6 md:px-0">
          <img
            src="https://img.freepik.com/free-photo/pills-with-injection_23-2148108965.jpg?t=st=1735895093~exp=1735898693~hmac=5ad87fd40541652c56bd864c317575280e4c4b37e16a22debe8ec6f6cbf223ad&w=1380"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#01C38D] mb-4">About Us</h1>
          <p className="text-[#FFFFFF] text-lg max-w-3xl mx-auto">
            We are a trusted provider of home-based healthcare and support
            services, dedicated to enhancing the quality of life for individuals
            of all ages. Our team of compassionate professionals brings expert
            care and personalized attention to ensure your comfort and well-being
            at home.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mb-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-3xl font-semibold text-[#01C38D] mb-6">
            Our Mission
          </h2>
          <p className="text-[#FFFFFF] text-lg">
            Our mission is to provide exceptional, patient-centered care that
            promotes health, independence, and dignity. We strive to be the
            trusted partner for families seeking reliable home healthcare
            solutions, ensuring that every individual receives the care they
            deserve in the comfort of their home.
          </p>
        </div>
        <div className="md:w-1/2 w-full px-6 md:px-0">
          <img
            src="https://img.freepik.com/free-photo/bandages-medical-tools-arrangement_23-2149341608.jpg?t=st=1735895155~exp=1735898755~hmac=bf084380c79e4a0ffa567e5f06df799456e45fc05e6fdc7361e24f0772940f3d&w=1380"
            alt="Our Mission"
            className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-center text-[#01C38D] mb-6">
          Our Values
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ValueCard
            title="Compassion"
            description="We treat every patient and their family with kindness, empathy, and respect."
          />
          <ValueCard
            title="Excellence"
            description="We are committed to delivering high-quality care that exceeds expectations."
          />
          <ValueCard
            title="Integrity"
            description="We uphold honesty and transparency in everything we do."
          />
          <ValueCard
            title="Innovation"
            description="We embrace advanced techniques and technologies to improve patient outcomes."
          />
          <ValueCard
            title="Collaboration"
            description="We work closely with families to create personalized care plans."
          />
          <ValueCard
            title="Dedication"
            description="We are dedicated to improving the lives of our patients and their loved ones."
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-[#01C38D] mb-6">
          Why Choose Us?
        </h2>
        <ul className="text-[#FFFFFF] max-w-2xl mx-auto list-disc pl-5 space-y-2 text-lg">
          <li>Experienced and compassionate caregivers.</li>
          <li>Personalized care tailored to individual needs.</li>
          <li>Comprehensive range of services, from elderly care to critical care.</li>
          <li>Advanced medical equipment and technology for home use.</li>
          <li>Commitment to improving patient health and quality of life.</li>
        </ul>
      </section>
    </div>
  );
};

const ValueCard = ({ title, description }) => {
  return (
    <div className="bg-[#132D46] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      <h3 className="text-xl font-bold text-[#01C38D] mb-3">{title}</h3>
      <p className="text-[#696E79]">{description}</p>
    </div>
  );
};

export default About;