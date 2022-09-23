import './App.css';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './home';
import Quote from './quote';

// eslint-disable-next-line react/prefer-stateless-function
function App() {
  return (
    <div>
      <Routes>
        <Route path="Quote" element={<Quote />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
