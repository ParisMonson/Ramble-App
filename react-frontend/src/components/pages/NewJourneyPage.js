import { DropDownList } from "../atomic-components/DropDownList";
import { Page } from "../pages/Page";

import {useNavigate} from 'react-router-dom';
import { JourneyRender } from "../atomic-components/journeyRender";
import React, {useRef, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";



export const NewJourneyPage = () => {
    const [journey, setJourney] = useState()
    const [start_coordinates, setStart_coordinates] = useState();
    const [end_coordinates, setEnd_coordinates] = useState();


    const navigate = useNavigate();
    
    
    const navigateToHome = () => {

        navigate('/home');
      };

      const saveRoute = (event) => {
      event.preventDefault()
      console.log("It worked", start_coordinates)
      
      const start_place = start_coordinates
      const end_place = end_coordinates
      const discipline = event.target.discipline
      const title = event.target.title
      const description = event.target.description
      const startTime = event.target.startTime
      const startPoint = event.target.startPoint
      const endPoint = event.target.endPoint
      console.log("Discipline", discipline)


      fetch('/api/save_route', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            discipline: discipline,
            title: title.value, 
            description: description.value, 
            startTime: startTime.value, 
            startPoint: startPoint, 
            endPoint: endPoint,
            start_place: start_place, 
            end_place: end_place
         }),
      })
      .then((response) => (response.json()))
      .then((data) => {
        window.alert("Great! We've Saved your Journey!");
        setJourney(data.journey)
       
      })
      .catch((error) => {
        console.error("Error", error)
      })
    }

    const disciplines = [
        "Walking",
        "Running",
        "Cycling"
    ]


    const StartMapAPI = () => {
        const { ref, autocompleteRef } = usePlacesWidget({
          apiKey:"AIzaSyCVwRHHdtd6XynKpgTNl4SQOM4jT_pTaGk",
          options: {
            types: []
          },
          
          onPlaceSelected: (place) => {
            console.log("1",place);
            setStart_coordinates(place.geometry.location)
          }
        });
        return <input ref={ref} name="startPoint" placeholder="Where will your journey start?" />
      }
      //////////////////
      const EndMapAPI = () => {
        const { ref, autocompleteRef } = usePlacesWidget({
          apiKey:"AIzaSyCVwRHHdtd6XynKpgTNl4SQOM4jT_pTaGk",
          options: {
            types: []
          },
          onPlaceSelected: (place) => {
            console.log("1",place);
            setEnd_coordinates(place.geometry.location)
            console.log("2",place);
          }
        });
        return <input ref={ ref } name="endPoint" type="text" placeholder="Where will your journey end?" />
      }
 
   
    return (
        <div className="whole-page">
            <Page />
            <div className="form-container">
            <form onSubmit = {saveRoute}> 
            <h2>What journey would you like to add?</h2>
                <DropDownList name="discipline" items={disciplines}/>
                <input name="title" placeholder="Give your Journey a title" />
                <input name="description" type="text" placeholder="Give us a quick description of your Journey..." />
                <input name="startTime" placeholder="When will your journey start?" />
                <StartMapAPI/>
                <EndMapAPI/>
                <input className="button" type="submit" value="Generate Route" />
                <input onClick={navigateToHome}className="button" type="submit" value="Go to Routes" />
            </form>
            </div>
                
            <div className="journey-container">
                {journey && <JourneyRender journey={journey} />}
            </div>
        </div>


    )
}