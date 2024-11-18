import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import therapist1 from '../images/cardio-respiratory-physiotherapist.webp'
import therapist2 from '../images/advanced-physiotherapy-2.webp'
import therapist3 from '../images/chiropractor.webp'
import therapist4 from '../images/ergonomics-consultant.webp'
import therapist5 from '../images/geriatric-physiotherapist.webp'
import therapist6 from '../images/home-physiotherapist.webp'
import therapist7 from "../images/vestibular-rehabilitation-vrt.webp"

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-cyan-100'>
    <div className="container mx-auto px-8 py-20">
      <h1 className="text-xl font-semibold mb-4 flex justify-center">VHC Specialists</h1>
      <p className="mb-8 flex justify-center">Physiotherapy can help you strengthen your core muscles and improve your function.</p>
      <Slider {...settings}>
        <div className='slide-items'>
          <img className="mx-auto rounded-md h-80" src={therapist1} alt="Specialist" />
          <p className="text-center mt-2">Cardio Respiratory Physiotherapist</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-md h-80" src={therapist2} alt="Specialist" />
          <p className="text-center mt-2">Advanced Physiotherapy</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-md h-80" src={therapist3} alt="Specialist" />
          <p className="text-center mt-2">Chiropractor</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-md h-80" src={therapist4} alt="Specialist" />
          <p className="text-center mt-2">Ergonomics Consultant</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-md h-80" src={therapist5} alt="Specialist" />
          <p className="text-center mt-2">Geriatric Physiotherapist</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-md h-80" src={therapist6} alt="Specialist" />
          <p className="text-center mt-2">Home Physiotherapist</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-md h-80" src={therapist7} alt="Specialist" />
          <p className="text-center mt-2">Vestibular Rehabilitation vrt</p>
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default ImageSlider;
