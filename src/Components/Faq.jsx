import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services, including elderly care, critical care, mother and baby care, physiotherapy, ICU setup at home, home sample collection, medical equipment rental and sales, and ambulance services.",
    },
    {
      question: "How can I book your services?",
      answer:
        "You can book our services through our website or by contacting our customer support team. We’ll guide you through the process and address any specific needs you have.",
    },
    {
      question: "Are your caregivers trained and certified?",
      answer:
        "Yes, all our caregivers are thoroughly trained and certified professionals with experience in providing high-quality healthcare services.",
    },
    {
      question: "What is the process for setting up an ICU at home?",
      answer:
        "Our team will visit your home to assess the requirements and install all necessary medical equipment. Trained professionals will ensure proper setup and provide ongoing support for patient care.",
    },
    {
      question: "Do you offer emergency ambulance services?",
      answer:
        "Yes, we provide both emergency and non-emergency ambulance services. Our ambulances are equipped with life-saving equipment and staffed by trained paramedics.",
    },
    {
      question: "Can I rent medical equipment for short-term needs?",
      answer:
        "Absolutely. We offer a wide range of medical equipment for rent, including hospital beds, oxygen concentrators, and wheelchairs, to meet your temporary needs.",
    },
    {
      question: "How do I know if home healthcare is right for me?",
      answer:
        "Home healthcare is ideal if you or your loved one need medical care, recovery support, or assistance with daily activities in the comfort of your home. Our team can help assess your needs and recommend the best services.",
    },
  ];

  return (
    <div className="p-5 bg-[#191E29]">
      {/* Header Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#01C38D] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-[#FFFFFF] text-lg max-w-3xl mx-auto">
          Here you’ll find answers to common questions about our services. If
          you have more questions, feel free to contact us!
        </p>
      </section>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border-b-2 border-[#696E79]"
          >
            <button
              className="w-full text-left p-4 text-lg font-medium text-[#01C38D] bg-[#132D46] hover:bg-[#191E29] focus:outline-none transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="float-right text-[#01C38D]">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-[#696E79] bg-[#132D46]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;