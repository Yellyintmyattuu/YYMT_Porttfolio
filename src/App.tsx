import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation.tsx';
import { Portfolio }  from './pages/Portfolio.tsx';
import { Certifications }  from './pages/Certification.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;