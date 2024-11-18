import React from 'react';
import spine from '../images/service/spine.png';
import solidarity from '../images/service/solidarity.png';
import massage from '../images/service/massage.png';
import knee from '../images/service/knee.png';
import dumbell from '../images/service/dumbell.png';
import brain from '../images/service/brain.png';


function ServiceCard({ title, description, imageUrl }) {
  return (
    <div className="service border p-4 rounded-md">
      <img src={imageUrl} alt={title} className="service-image h-16" />
      <h2 className='text-white font-semibold text-sm'>{title}</h2>
      <p className='text-white font-thin text-md'>{description}</p>
      {/* <a href="http.js" className="btn text-white">Read More</a> */}
    </div>
  );
}

function Services() {
  const services = [
    {
      title: "Spine Physiotherapist",
      description: "The goal of spine physiotherapist is to alleviate discomfort and enable you to perform any activity independently. Physiotherapy can help you strengthen your core muscles and improve your function. The technique entails stretching, stress-relieving exercises, and posture maintenance. We develop a work plan and carry it out step by step based on the patient's symptoms and condition.",
      imageUrl: spine
    },
    {
        title: "Rehabilitation after surgery",
        description: "It's been a decade since we discovered that home physiotherapy treatments come in a variety of formats. If you are experiencing chronic pain following surgery, you will be treated by experts to help you return to a pain-free normal life. Any type of persistent pain or discomfort is typical following surgery, but you cannot give up your calm life as a result.",
        imageUrl: solidarity
      },
      {
        title: "Cardiopulmonary conditioning (CPC)",
        description: "Cardiopulmonary training significantly aids in the prevention of heart disease. To avoid heart failure, our therapists seek to optimize the function of the lungs and heart as well as improve muscular strength and flexibility. According to our research and the experience of our home physiotherapist, all muscles require a varied set of exercises to remain fit and healthy.",
        imageUrl: massage
      },
      {
        title: "Neuro physiotherapist",
        description: "Neurological rehabilitation frequently improves function, alleviates symptoms, and enhances the patient's well-being. Neurorehabilitation is a multifaceted medical approach that tries to aid in the recovery of individuals with neurological disorders.",
        imageUrl: knee
      },
      {
        title: "Deconditioning",
        description: "Deconditioning is a term that refers to reversible changes in the body caused by a reduction in physical activity as a result of extended hospitalization or other bedridden conditions. It can lead to weakness, reduced cardiovascular fitness, and loss of muscle mass and function. Deconditioning can occur in anyone who is bedridden or sedentary for a prolonged period.",
        imageUrl: dumbell
      },
      {
        title: "Orthopedic physiotherapist",
        description: "Orthopedic physiotherapy is a significant discipline of medicine that focuses on the treatment of skeletal system injuries and disorders, as well as associated muscles, joints, and ligaments. Additionally, it helps patients recover from orthopedic surgeries and regain strength and mobility in affected areas. Our orthopedic physiotherapists provide personalized treatment plans to address each patient's specific needs and goals.",
        imageUrl: brain
      }
  ];

  return (
    <div className='bg-black invert'>
    <div className="container mx-auto px-8 py-8">
      <h1 className="text-xl text-white mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            description={service.description} 
            imageUrl={service.imageUrl} 
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Services;
