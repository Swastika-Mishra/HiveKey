import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Home from './components/home/Home';
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/Layout';
import Signup from './components/signup/Signup';

const App = () => {
  const {isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/dashboard" 
          element={
            isLoading ? (<div>Loading...</div>) : isAuthenticated ? (<Dashboard />) : (<Navigate to="/" />)
          } />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
