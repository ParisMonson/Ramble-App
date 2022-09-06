import React from "react";
import {Page} from "../pages/Page";
import { Map } from "../atomic-components/Map";
import { DropDownList } from "../atomic-components/DropDownList";


export const JourneyPage2 = () => {

    const disciplines = [
        "Walking",
        "Running",
        "Cycling"
    ]

return (

    <div>
        <Page />
        <div>
            <form> 
            <h2>What journey would you like to add?</h2>
                <DropDownList name="discipline" items={disciplines}/>
                <input name="title" placeholder="Give your Journey a title" />
                <input name="description" type="text" placeholder="Give us a quick description of your Journey..." />
                <input name="startTime" placeholder="When will your journey start?" />
                <input name="startPoint" type="search" placeholder="Where will your journey start?" />
                <input name="endPoint" type="text" placeholder="Where will your journey end?" />
                <input className="button" type="submit" value="Generate Route" />
            </form>
        </div>
        
        <Map />
    </div>
);
}

