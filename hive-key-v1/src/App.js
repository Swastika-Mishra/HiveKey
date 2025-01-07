import { Route, Routes } from 'react-router-dom';
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/Layout';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
