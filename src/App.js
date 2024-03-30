import './App.css';
import Navbar from './comp/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './comp/Aboutus';
import Hero from './comp/Hero';
import formal from './images/formal.png'
import AppointmentBooking from './comp/Booking';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Aboutus} />
        <Route path='/Aboutus' component={Aboutus} />
        <Route path='/Aboutus' component={Aboutus} />
        <Route path='/Aboutus' component={Aboutus} />
      </Routes>
      <Hero name="Pranjal Singh" about="ms btech" pranjal={formal}/>
      <AppointmentBooking/>
    </Router>
  );
}

export default App;
