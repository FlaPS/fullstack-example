"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var apollo_server_express_1 = require("apollo-server-express");
var router_1 = require("./router");
var schema_1 = require("./schema");
var config_json_1 = require("../config.json");
var app = express();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        return res.status(200).send({});
    }
    return next();
});
app.use('/api', bodyParser.json({ type: 'application/json' }), router_1.default);
app.use('/graphql', bodyParser.json(), apollo_server_express_1.graphqlExpress({ schema: schema_1.default }));
app.use('/graphiql', apollo_server_express_1.graphiqlExpress({
    endpointURL: '/graphql',
}));
exports.default = new Promise(function (resolve) {
    var server = app.listen(config_json_1.port, config_json_1.host, function () {
        console.log("Server on " + config_json_1.port);
        resolve(server);
    });
});
//# sourceMappingURL=index.js.map