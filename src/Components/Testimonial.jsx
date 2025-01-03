import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Son of a Patient",
      feedback:
        "The elderly care services provided by your team were exceptional. My mother received the utmost care and attention, which made a huge difference in her recovery.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Jane Smith",
      title: "New Mother",
      feedback:
        "The mother and baby care services were a lifesaver! The support and guidance I received helped me navigate motherhood confidently. Highly recommended!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Michael Lee",
      title: "Recovered Patient",
      feedback:
        "Physiotherapy sessions were professional and effective. The team’s personalized approach helped me recover faster than expected.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Sophia Taylor",
      title: "Family Member",
      feedback:
        "Having an ICU setup at home gave us peace of mind during a critical time. The equipment and care provided were top-notch!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Liam Wilson",
      title: "Corporate Client",
      feedback:
        "The team’s professionalism and attention to detail in providing patient care services exceeded our expectations. Truly a reliable healthcare partner!",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="p-5 bg-[#191E29]">
      {/* Heading Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-[#01C38D] mb-4">
          Testimonials
        </h1>
        <p className="text-[#FFFFFF] text-lg max-w-3xl mx-auto">
          Hear what our clients have to say about the exceptional services we
          provide. Your trust is our greatest reward.
        </p>
      </section>

      {/* Testimonial Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#132D46] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 text-center"
          >
            {/* Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#01C38D]"
            />
            {/* Name and Title */}
            <h2 className="text-xl font-semibold text-[#FFFFFF] mb-2">
              {testimonial.name}
            </h2>
            <p className="text-sm text-[#696E79] mb-4">{testimonial.title}</p>
            {/* Feedback */}
            <p className="text-[#FFFFFF] italic">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;