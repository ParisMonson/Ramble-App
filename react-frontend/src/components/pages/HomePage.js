import "./HomePage.css";
import { DropDownList } from "../atomic-components/DropDownList";
import { Page } from "./Page.js";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


export const HomePage = (props) => {
  const [journeys, setJourneys] = useState([]);
  console.log(props.user);
  
  // Ask information to back-end to get all the journeys
  useEffect(() => {
    fetch('/api/all_routes') //https://jsonplaceholder.typicode.com/todos/ ///api/all_routes
      .then(response => response.json())
      .then(json => setJourneys(json))
      .catch((err) => {
        console.log(err.message);
      })
  }, [])
  
  // Navigate to a page to create new journey
  const navigate = useNavigate();

  const navigateToNewJourney = () => {
    
    navigate('/journey/new')
  }
    
  // Data for dropdown list to do the filter button

  const disciplines = [
    "Walking",
    "Running",
    "Cycling"
]

   return (
    <div> 
        <Page />
      
        <div className="homeHero"> 
            <div className="homeHeroTextBox">
                <h1>Hi {props.user.firstName}!</h1>
                <h2>What would you like to do today?</h2>
                <button onClick={navigateToNewJourney} className="button">ADD NEW JOURNEY</button>
            </div>
            
        </div>

      {journeys.map((journey) => {
       
        return (
        <div className="homeList">
          
          <div className='row'>
            {/* image card */}
            <div className='column'>
              <div className='map-column'>
                <img className="cyclegroup" src={journey.img} alt="map" width="250" />
                <button className="button" href="/journey/id">Join now!</button>
              </div>
            </div>

            {/* text card */}
                  <div className='column'>
                    <div className= 'text-column'>
                      <h3>{journey.title}</h3>
                      <p>{journey.discipline}</p>
                      <p>{journey.description}</p>
                      <p>Date: {journey.date}</p>
                      <p>Time: {journey.startTime}</p>
                      <p>Start location:{journey.startPoint} </p>
                      <p>End location: {journey.endPoint}</p>
                      <p>Distance: {journey.distance} Miles</p>
                      <p>Duration: {journey.duration} Minutes</p>

                    </div>
            </div>
          </div>
        </div>
        
            )})}

            </div>
            
      )}
      