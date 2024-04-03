import './App.css';
import Navbar from './comp/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './comp/Aboutus';
import AppointmentBooking from './comp/Booking';
import Describe from './comp/Describe';
import ImageSlider from './comp/ImageSlider';
import Services from './comp/Services';
import Features from './comp/Features';
import Footer from './comp/Footer';
import Home from './comp/Home';
import Blogs from './comp/Blog/mainBlog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/booking' element={<AppointmentBooking />} />
        <Route path='/describe' element={<Describe />} />
        <Route path='/imageSlider' element={<ImageSlider />} />
        <Route path='/features' element={<Features />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer email="magan@gmail.com"/>
    </Router>
  );
}

export default App;