import './App.css';
import Navbar from './comp/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './comp/Aboutus';

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
    </Router>
  );
}

export default App;
