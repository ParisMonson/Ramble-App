// import React from 'react';
// import axios from "axios";
// import { DropDownList } from "../atomic-components/DropDownList";
// import { Page } from "../pages/Page";
// // import { Footer } from "../atomic-components/Footer";



// export const JourneyPage = () => {
// const [location, setLocation] = useState("London");
// const [coordinates, setCoordinates] = useState({ coordinates: [0:'-0.1613867', 1:'51.4202429']});

// const handleResponse = (response) => {
//     setCoordinates({
//         // ready: true,
//         coordinates: response.features.3.geometry.coordinates,
//     });
// }

// const search=()=> {
//     const apiKey = "pk.eyJ1IjoicG1vbnNvbjEiLCJhIjoiY2w3b2x5eGd1MDhldjN1bzc2bHdrZWt4aCJ9.j1NGCKtR_vtfwz9JdVGi3A";
//     const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${apiKey}`;
//     axios.get(apiUrl).then(handleResponse);

// }
    
// const handleSubmit = (event) => {
// event.preventDefault()
// search(location);
// }

// const handleLocationChange = (event) => {
//     setLocation(event.target.value);
// }



// }
    
// const disciplines = [
//     "Walking",
//     "Running",
//     "Cycling"
// ]



// return (
//     <div>
//         <Page />
//         <div>
//         <form onSubmit = {handleSubmit}> 
//         <h2>What journey would you like to add?</h2>
//             <DropDownList name="discipline" items={disciplines}/>
//             <input name="title" placeholder="Give your Journey a title" />
//             <input name="description" type="text" placeholder="Give us a quick description of your Journey..." />
//             <input name="startTime" placeholder="When will your journey start?" />
//             <input name="startPoint" type="search" placeholder="Where will your journey start?" onChange={handleLocationChange}/>
//             <input name="endPoint" type="text" placeholder="Where will your journey end?" />
//             <input className="button" type="submit" value="Generate Route" />
//         </form>
//         </div>
        
//     </div>
// )

// } 