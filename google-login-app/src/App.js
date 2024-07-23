// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleLogin from './components/GoogleLogin';
import UserInfo from './components/UserInfo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoogleLogin />} />
        <Route path="/user-info" element={<UserInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
