import React from "react";

const Home = () => {
  return (
    <div className="p-5 bg-[#191E29]">
      {/* Welcome Section */}
      <section
        className="flex items-center justify-end mb-10 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/wall-wallpaper-concrete-colored-painted-textured-concept_53876-42939.jpg?t=st=1735901421~exp=1735905021~hmac=0406e0a77d39ce26f506fece662cfae132bf4836a4e785e324d969d20abdb527&w=1380")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "60vh",
          padding: "0 2rem",
        }}
      >
        {/* Text Content */}
        <div className="text-right p-8 text-white bg-opacity-60 bg-[#132D46] rounded-lg max-w-lg h-[50vh]">
          <h1 className="text-4xl font-bold text-[#01C38D] mb-4">
            Welcome to Our Home Care Services
          </h1>
          <p className="text-[#FFFFFF] text-lg">
            We are dedicated to offering compassionate, professional, and
            high-quality care for individuals of all ages. From elderly care to
            critical care, and from physiotherapy to home lab tests, we provide
            services that prioritize your comfort, health, and well-being—all
            within the comfort of your home.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-[#01C38D] mb-8">
          Our Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Elderly Care"
            description="Providing seniors with dignified and compassionate care to enhance their quality of life."
            image="https://via.placeholder.com/300x200"
          />
          <ServiceCard
            title="Critical Care"
            description="Specialized medical care for life-threatening conditions, delivered in a home setting."
            image="https://via.placeholder.com/300x200"
          />
          <ServiceCard
            title="Mother and Baby Care"
            description="Support and guidance for new mothers and newborns during the postnatal period."
            image="https://via.placeholder.com/300x200"
          />
          <ServiceCard
            title="Nancy Care"
            description="Safe and engaging childcare with a focus on emotional and educational development."
            image="https://via.placeholder.com/300x200"
          />
          <ServiceCard
            title="Physiotherapy"
            description="Restorative therapy to improve mobility and strength for injury or disability recovery."
            image="https://via.placeholder.com/300x200"
          />
          <ServiceCard
            title="ICU Setup at Home"
            description="Advanced medical equipment and professional monitoring for critically ill patients."
            image="https://via.placeholder.com/300x200"
          />
          <ServiceCard
            title="Home Lab Tests"
            description="Convenient sample collection from home with fast and accurate reporting."
            image="https://via.placeholder.com/300x200"
          />
          <ServiceCard
            title="Medical Equipment"
            description="Rent or purchase medical equipment for temporary or long-term needs."
            image="https://via.placeholder.com/300x200"
          />
          <ServiceCard
            title="Ambulance Services"
            description="Quick and safe patient transportation with trained paramedics and life-saving tools."
            image="https://via.placeholder.com/300x200"
          />
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#132D46] p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center">
      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Text Section */}
      <div className="w-2/3 pl-4">
        <h3 className="text-xl font-bold text-[#01C38D] mb-3">{title}</h3>
        <p className="text-[#696E79]">{description}</p>
      </div>
    </div>
  );
};

export default Home;
