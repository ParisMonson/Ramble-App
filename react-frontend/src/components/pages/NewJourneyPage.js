import { DropDownList } from "../atomic-components/DropDownList";
import { Page } from "../pages/Page";
import React, { useState } from "react";
import { JourneyRender } from "../atomic-components/journeyRender";
import { useNavigate } from "react-router-dom";


export const NewJourneyPage = (props) => {
   
   
    const [journey, setJourney] = useState()
    const navigate = useNavigate();
    
    
    const navigateToHome = () => {
        navigate('./home')
     }
   
    const saveRoute = (event) => {
      event.preventDefault();
      const user_id = props.user.user_id
      const discipline = event.target.discipline;
      const title = event.target.title;
      const description= event.target.description;
      const startTime = event.target.startTime;
      const startPoint = event.target.startPoint;
      const endPoint = event.target.endPoint;
      

      fetch('/api/save_route', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            host_id: user_id.value,
            discipline: discipline.value, 
            title: title.value, 
            description: description.value, 
            startTime: startTime.value, 
            startPoint: startPoint.value, 
            endPoint:endPoint.value,
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
                <input name="startPoint" placeholder="Where will your journey start?" />
                <input name="endPoint" type="text" placeholder="Where will your journey end?" />
                <input className="button" type="submit" value="Save Route" />
                <input onClick={navigateToHome}className="button" type="Submit" value="Go to Routes" />
            </form>
            </div>
            <div className="journey-container">
             {journey && <JourneyRender journey={journey} />}
            </div>
        </div>
    )
}