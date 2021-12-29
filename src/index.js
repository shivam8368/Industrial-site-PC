import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import ConatctPage from './Pages/ConatctPage';


const routing = (

    <Router>
      <Routes>
        <Route exact path = '/' element = {<App/>} />
        <Route exact path = '/about' element = {<AboutPage/>} />
        <Route exact path = '/contact' element = {<ConatctPage/>} />
        <Route exact path = '/service' element = {<ServicePage/>} />
      </Routes>
    </Router>

)



ReactDOM.render(
  routing,
  document.getElementById('root')
);

