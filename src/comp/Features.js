import React from 'react';


function Features() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-8">Why Choose Us</h1>
            <p className="text-lg mb-12">Provide you a complete healing Solution</p>
            <p className="text-base mb-4">
              <strong>Expertise in Health Care Solutions:</strong> Our team brings extensive experience in developing health care software solutions, ensuring that your project aligns with the latest industry standards and innovations. We understand the complex needs of the health care industry, from data security to seamless patient interactions, and deliver solutions that reflect this deep knowledge.
            </p>
            <p className="text-base mb-4">
              <strong>Customized Approach:</strong> We believe in creating tailored solutions to fit the unique requirements of Vedanta Health Care. By thoroughly understanding your goals and challenges, we develop a strategy that is perfectly aligned with your vision and operational needs.
            </p>
            <p className="text-base mb-4">
              <strong>Advanced Technology Stack:</strong> Leveraging cutting-edge technologies, including cloud computing, AI, and secure database management, we build robust and scalable health care solutions. Our technology focus ensures enhanced performance, data protection, and adaptability to future advancements.
            </p>
            <p className="text-base mb-4">
              <strong>Commitment to Data Security and Compliance:</strong> In health care, data security and regulatory compliance are paramount. Our team is well-versed in HIPAA and other relevant regulations, ensuring that your project is built with the highest level of data security and adherence to legal standards.
            </p>

          </div>
          <div className='img-feat'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
