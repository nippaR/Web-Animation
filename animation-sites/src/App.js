import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import First from './Frontend/First';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
      </Routes>
    </Router>
  );
}

export default App;