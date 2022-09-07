import { Request, Response, NextFunction } from "express";

/**
 *
 * @route GET /api/route
 */
const api_key = process.env.MAPBOX_API;


export const getMap = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log("Response Body: ", req.body);

  const start = req.body.start_place
  const end = req.body.end_place;
  const discipline = req.body.discipline;
  const routeObject = {
    host_id: req.body.host_id,
    discipline: discipline,
    duration: null,
    distance: null,
    title: req.body.title,
    description: req.body.description,
    startTime: req.body.startTime,
    startPoint: req.body.startPoint,
    endPoint: req.body.endPoint,
    img: null,
    participants: []
  }
  const URL = `https://api.mapbox.com/directions/v5/mapbox/${discipline}/${start.lng},${start.lat};${end.lng},${end.lat}?geometries=polyline&overview=full&annotations=duration&access_token=${api_key}`;
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => getStaticMapURL(data, start, end, routeObject))
    .then((url) => res.send(url))
    .catch((err) => console.error("Error: ", err));
};

// This should get the static map

const getStaticMapURL = async (data, start, end, routeObject) => {
  const line = encodeURIComponent(data.routes[0].geometry);
  
  const URL = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-a+9ed4bd(${start.lng},${start.lat}),pin-s-b+000(${end.lng},${end.lat}),path-5+f44-0.5(${line})/auto/500x300?access_token=${api_key}`;
  // Adding new attributes to rout object
  if (routeObject.discipline === "running") {
    routeObject.duration = data.routes[0].duration * 2
  }
  else {
    routeObject.duration = data.routes[0].duration
  }
  routeObject.distance = data.routes[0].distance
  routeObject.img = URL
  return routeObject
};
