import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './landing';
import Privacy from './privacy';
import AppShowcase from './AppShowcase';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/funtions" element={<AppShowcase />} />

      </Routes>
    </Router>
  );
}


export default App;
