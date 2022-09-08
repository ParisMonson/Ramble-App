"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = exports.saveRoute = void 0;
const route_1 = require("../models/route");
const saveRoute = (req, res) => {
    const route = new route_1.Route(req.body);
    route.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: 'Route was saved successfully!' });
    });
};
exports.saveRoute = saveRoute;
const getRoutes = (req, res) => {
    route_1.Route.find().exec((err, routes) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(routes);
    });
};
exports.getRoutes = getRoutes;
//# sourceMappingURL=route.js.map