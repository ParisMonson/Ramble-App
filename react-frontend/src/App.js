import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from './components/pages/IndexPage';
import { NewUserPage } from './components/pages/NewUserPage';
import { NewSessionPage } from './components/pages/NewSessionPage';
import { HomePage } from './components/pages/HomePage';
import { JourneyPage } from './components/pages/JourneyPage';
import { Mission } from './components/pages/Mission';
import { AppFunctionality } from './components/pages/AppFunctionality';
import { NewJourneyPage } from './components/pages/NewJourneyPage';

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoicG1vbnNvbjEiLCJhIjoiY2w3b2x5eGd1MDhldjN1bzc2bHdrZWt4aCJ9.j1NGCKtR_vtfwz9JdVGi3A';

import './App.css';


function App() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });




  return (
  
      

    <div className= "App">
      <div>
        <div ref={mapContainer} className="map-container" />
      </div>
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/user/new' element={<NewUserPage />} />
          <Route path='/session/new' element={<NewSessionPage />} />
          <Route path='/home' element={<HomePage />} /> 
          <Route path='/journey' element={<JourneyPage />} /> 
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
