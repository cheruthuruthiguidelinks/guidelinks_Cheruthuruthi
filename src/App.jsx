import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Destinations from './pages/Destinations';
import AdmissionSouthIndia from './pages/AdmissionSouthIndia';
import About from './pages/About';
import Courses from './pages/Courses';
import ServicesPage from './pages/ServicesPage';
import CollegePredictor from './pages/CollegePredictor';
import StudyIndia from './pages/StudyIndia';
import StudyAbroad from './pages/StudyAbroad';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Institutions from './pages/Institutions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="institutions" element={<Institutions />} />
          <Route path="college-predictor" element={<CollegePredictor />} />
          <Route path="study-india" element={<StudyIndia />} />
          <Route path="study-abroad" element={<StudyAbroad />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="admission-south-india" element={<AdmissionSouthIndia />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
