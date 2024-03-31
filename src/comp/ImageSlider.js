import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import therapist from '../images/physio.jpeg'

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold mb-4 flex justify-center">Vedanta Health Care</h1>
      <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis alias nisi saepe provident delectus harum, molestiae eius ratione animi hic pariatur</p>
      <Slider {...settings}>
        <div className='slide-items'>
          <img className="mx-auto rounded-full" src={therapist} alt="Specialist" />
          <p className="text-center mt-2">Specialist 1</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-full" src={therapist} alt="Specialist" />
          <p className="text-center mt-2">Specialist 2</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-full" src={therapist} alt="Specialist" />
          <p className="text-center mt-2">Specialist 3</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-full" src={therapist} alt="Specialist" />
          <p className="text-center mt-2">Specialist 4</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-full" src={therapist} alt="Specialist" />
          <p className="text-center mt-2">Specialist 5</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-full" src={therapist} alt="Specialist" />
          <p className="text-center mt-2">Specialist 6</p>
        </div>
        <div className='slide-items'>
          <img className="mx-auto rounded-full" src={therapist} alt="Specialist" />
          <p className="text-center mt-2">Specialist 7</p>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
