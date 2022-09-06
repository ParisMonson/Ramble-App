import React from 'react';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from './components/pages/IndexPage';
import { NewUserPage } from './components/pages/NewUserPage';
import { NewSessionPage } from './components/pages/NewSessionPage';
import { HomePage } from './components/pages/HomePage';
import { JourneyPage } from './components/pages/JourneyPage';
import { JourneyPage2 } from './components/pages/JourneyPage2';
import { Mission } from './components/pages/Mission';
import { AppFunctionality } from './components/pages/AppFunctionality';
import { NewJourneyPage } from './components/pages/NewJourneyPage';

// import React, { useRef, useEffect, useState } from 'react';


import './App.css';


function App() {

  
  return (
  
      
    <div className= "App">
     
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/user/new' element={<NewUserPage />} />
          <Route path='/session/new' element={<NewSessionPage />} />
          <Route path='/home' element={<HomePage />} /> 
          <Route path='/journey' element={<JourneyPage />} /> 
          <Route path='/journey2' element={<JourneyPage2 />} /> 

          {/* need to send props of user details into this home page. */}
          <Route path='/mission' element={<Mission />} />  
          <Route path='/app' element={<AppFunctionality />} />   
          <Route path='/journey/new' element={<NewJourneyPage />} /> 
      </Routes>
   </BrowserRouter>     
  </div> 
 );
}

export default App;
