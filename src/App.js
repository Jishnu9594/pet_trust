import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import About from "./pages/about";
import Service from "./pages/service";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import AppointmentPopup from "./pages/ Popup Component";
import ContactForm from "./pages/contactform";
import BetterPaws from "./pages/betterpaws";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment-popup" element={<AppointmentPopup />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/better-paws/" element={<BetterPaws />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
