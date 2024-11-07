import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Resources from './pages/Resources';
import Tools from './pages/Tools';
import Dashboard from './pages/Dashboard';
import HealthData from './pages/Healthdata'; // Import HealthData component
import { FirebaseProvider } from './context/Firebase'; // Import FirebaseProvider
import ProgressPage from './pages/ProgressPage';

function App() {
  return (
    <FirebaseProvider>
      <Router>
        <div>

          {/* Route definitions */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/health" element={<HealthData />} /> {/* Add HealthData route */}
            <Route path="/pro" element={<ProgressPage/>} /> {/* Add HealthData route */}
            
            {/* 404 Not Found route */}
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </FirebaseProvider>
  );
}

export default App;
