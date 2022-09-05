import { DropDownList } from "../atomic-components/DropDownList";
import { Page } from "../pages/Page";
// import { Footer } from "../atomic-components/Footer";
import React from "react";
import { GeoCoordsApi } from "../../services/GetCoordsApi";


export const NewJourneyPage = () => {
    
const whenSubmit = (event) => {
        event.preventDefault()
        const startPoint = event.target.startPoint
     
       
        GeoCoordsApi(startPoint);
        console.log(startPoint)
    
    }
    
    const disciplines = [
        "Walking",
        "Running",
        "Cycling"
    ]

    return (
        <div>
            <Page />
            <div>
            <form onSubmit = {whenSubmit}> 
            <h2>What journey would you like to add?</h2>
                <DropDownList name="discipline" items={disciplines}/>
                <input name="title" placeholder="Give your Journey a title" />
                <input name="description" type="text" placeholder="Give us a quick description of your Journey..." />
                <input name="startTime" type= "textquery" placeholder="When will your journey start?" />
                <input name="startPoint" placeholder="Where will your journey start?" />
                <input name="endPoint" type="text" placeholder="Where will your journey end?" />
                <input className="button" type="submit" value="Generate Route" />
            </form>
            </div>
        </div>
    )
}