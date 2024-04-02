import '../App.css';
import React  from "react";
import Navbar from './Navbar'
import Hero from './Hero';
import formal from '../images/formal.png'
import AppointmentBooking from './Booking';
import Describe from './Describe';
import ImageSlider from './ImageSlider';
import Services from './Services';
import Features from './Features';

function Home() {
  return (
    <>
      <Navbar />
      <Hero name="Pranjal Singh" about="ms btech" pranjal={formal}/>
      <AppointmentBooking/>
      <Describe/>
      <ImageSlider/>
      <Features/>
      <Services/>
    </>
  );
}

export default Home;
