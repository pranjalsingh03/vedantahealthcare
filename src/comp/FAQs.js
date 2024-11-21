import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the AI assist in patient care?",
      answer: "Our AI analyzes patient data to provide actionable insights, enabling personalized treatment plans and improved outcomes.",
    },
    {
      question: "Can the platform integrate with electronic health records (EHR)?",
      answer: "Yes, our platform integrates seamlessly with popular EHR systems to streamline patient data access and management.",
    },
    {
      question: "What support options are available for healthcare providers?",
      answer: "We offer 24/7 priority support, onboarding assistance, and training tailored for healthcare professionals.",
    },
    {
      question: "Is the data compliant with HIPAA and other regulations?",
      answer: "Yes, we ensure full compliance with HIPAA, GDPR, and other healthcare data privacy regulations.",
    },
    {
      question: "How secure is patient data on your platform?",
      answer: "We use state-of-the-art encryption and robust security measures to protect patient data and ensure confidentiality.",
    },
    {
      question: "What healthcare-specific integrations are available?",
      answer: "Our platform supports integrations with EHR systems, telemedicine tools, and healthcare analytics platforms.",
    },
  ];
  

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-brew py-20 px-8 mt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4">
          Frequently Asked <span className="text-purple-500">Questions</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Have questions about our AI-Powered Health Assistant? Find answers to the most common questions and learn how our platform can enhance your Health.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-800 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
