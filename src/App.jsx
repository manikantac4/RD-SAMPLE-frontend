import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AcademicHeader from './components/AcademicHeader';
import './App.css';
import CodeFusionHero from './components/hero';
import Aboutsection from "./components/about";
import Eventtimeline from "./components/eventtimeline";
import Contact from "./components/contact";
import RegistrationForm from "./components/RegistrationForm";

// Main Landing Page Component
const LandingPage = () => {
  return (
    <>
      <AcademicHeader/>
      <CodeFusionHero/>
      <Aboutsection/>
      <Eventtimeline/>
      <Contact/>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;