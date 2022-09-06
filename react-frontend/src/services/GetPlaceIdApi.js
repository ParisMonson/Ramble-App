const ApiKey = "";

<<<<<<< HEAD
export const GetPlaceApi = async(journeyPoint) => {
=======
export const GeoCoordsApi = async(journeyPoint) => {
>>>>>>> fa9152b50454a9b911d525c4a043e9f2fe00a22d
    const getPlaceURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters`
    
    const response = await fetch(getPlaceURL, {method: "GET",
})

const body = await response.json()
console.log(body);

return body;

}
