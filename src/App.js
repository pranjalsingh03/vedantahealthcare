import './App.css';
import Navbar from './comp/Navbar'
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Aboutus from './comp/Aboutus';
import AppointmentBooking from './comp/Booking/Booking';
import Describe from './comp/Describe';
import ImageSlider from './comp/ImageSlider';
import Services from './comp/Services';
import Features from './comp/Features';
import Footer from './comp/Footer';
import Home from './comp/Home';
import Blogs from './comp/Blog/mainBlog';
import Contact from './comp/Contact'
import Admin from './comp/Admin/Admin';
import AiAssistance from './comp/AiAssistance';

function App() {
  const location = useLocation();

  return (<>
      <Navbar />
      {location.pathname !== '/' && (
        <div className="mt-24">
          <Routes>
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/Blogs' element={<Blogs />} />
            <Route path='/appointmentbooking' element={<AppointmentBooking />} />
            <Route path='/describe' element={<Describe />} />
            <Route path='/imageSlider' element={<ImageSlider />} />
            <Route path='/Ai' element={<AiAssistance />} />
            <Route path='/features' element={<Features />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/admin' element={<Admin/>} ></Route>
          </Routes>
        </div>
      )}
      {location.pathname === '/' && <Home />}
      <Footer email="vhc@info.com"/>
      </>
  );
}

export default App;