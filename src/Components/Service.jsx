import React from "react";

const Service = () => {
  const services = [
    {
      title: "Elderly Care",
      description:
        "Elderly care focuses on the specific needs and challenges faced by senior citizens, ensuring they live with dignity and comfort. This includes assistance with daily activities, medical support, and companionship to enhance their quality of life.",
      img: "https://img.freepik.com/free-photo/senior-woman-caregiver_23-2148663603.jpg",
    },
    {
      title: "Critical Care",
      description:
        "Critical care involves specialized medical services provided to patients dealing with severe, life-threatening conditions. It includes constant monitoring, medication administration, and advanced equipment use to stabilize patients at home.",
      img: "https://img.freepik.com/free-photo/doctor-explaining-intensive-care-unit_23-2149377754.jpg",
    },
    {
      title: "Mother and Baby Care",
      description:
        "Supports new mothers and newborns during the postnatal period, providing guidance on breastfeeding, recovery, and mental health while fostering a healthy bond between mother and baby.",
      img: "https://img.freepik.com/free-photo/mother-baby-bond_23-2148377750.jpg",
    },
    {
      title: "Nancy Care",
      description:
        "Provides trained caregivers or nannies to look after children in a safe, engaging environment, focusing on educational and emotional development through age-appropriate activities.",
      img: "https://img.freepik.com/free-photo/children-playing-together_23-2148394561.jpg",
    },
    {
      title: "Physiotherapy",
      description:
        "Restores movement and functionality in individuals affected by injury or disability using tailored exercises, manual therapy, and advanced equipment.",
      img: "https://img.freepik.com/free-photo/physiotherapist-working-with-patient_23-2148734210.jpg",
    },
  ];

  return (
    <div className="bg-[#191E29]">
      {services.map((service, index) => (
        <section
          key={index}
          className={`h-screen flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 px-5 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <div className="md:w-1/2 w-full p-5">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 w-full text-left text-[#FFFFFF] p-5">
            <h1 className="text-4xl font-bold text-[#01C38D] mb-4">
              {service.title}
            </h1>
            <p className="text-lg">{service.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Service;
