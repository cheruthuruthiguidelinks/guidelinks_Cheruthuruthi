import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Destinations from './pages/Destinations';
import AdmissionSouthIndia from './pages/AdmissionSouthIndia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="admission-south-india" element={<AdmissionSouthIndia />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
