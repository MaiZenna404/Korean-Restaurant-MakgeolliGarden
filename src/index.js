import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Menu2 from './pages/Menu2';
import GalleryPage from './pages/Gallery';
import ContactsInfos from './pages/ContactsInfos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path= '/' element={ <App /> } />
        <Route path= '/homepage' element= { <Homepage />} />
        <Route path= '/aboutus' element= { <AboutUs />} />
        <Route path= '/menu' element= { <Menu />} />
        <Route path= '/menu' element= { <Menu2 />} />
        <Route path= '/gallerypage' element= { <GalleryPage />} />
        <Route path= '/contacts-and-infos' element= { <ContactsInfos />} />
      </Routes>
      </Router>
  </React.StrictMode>
);

