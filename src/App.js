import React from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';
import Menu2 from './pages/Menu2';
import GalleryPage from './pages/Gallery';
import ContactsInfos from './pages/ContactsInfos';

function App() {

 
  return (
    <>
      <SideNavBar />
      <Homepage />
      <AboutUs />
      <Menu />
      <Menu2 />
      <GalleryPage />
      <ContactsInfos />
      
    </>
  );
}

export default App
