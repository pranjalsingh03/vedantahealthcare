import '../App.css';
import React  from "react";
import Navbar from './Navbar'
import Hero from './Hero';
import formal from '../images/shivaji.png'
import AppointmentBooking from './Booking/Booking';
import Describe from './Describe';
import ImageSlider from './ImageSlider';
import Services from './Services';
import Features from './Features';
import GetMaps from './Maps/GetMaps';

function Home() {
  return (
    <>
      <Navbar />
      <Hero name="Dr. Shivaji Mall" about="Physiotherapist" photo={formal}/>
      <AppointmentBooking/>
      <Describe/>
      <ImageSlider/>
      <Features/>
      <Services/>
      <GetMaps/>
    </>
  );
}

export default Home;
