"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var getAllUsersQuery = "\n    {\n        result: getAllUsers {\n            id\n            name\n            age\n            city\n            url\n            languages\n        }\n    }\n";
var getProfileQuery = "\n    query getUser($id: ID!){\n      result: profile(id: $id) {\n        id\n        name\n        age\n        city\n        url\n        knowledge {\n            language\n            frameworks\n      \t}\n      }\n    }\n";
var patchUserQuery = "\n    mutation patchProfile($id: ID!, $city: String!){\n      result: patchProfile(id: $id, city: $city) {\n            id\n            name\n            age\n            city\n            url\n            knowledge {\n                language\n                frameworks\n            }\n      }\n    }\n";
var createPoster = function (url) { return function (query) { return (function (variables) {
    if (variables === void 0) { variables = {}; }
    return axios_1.default
        .post(url, JSON.stringify({
        query: query,
        variables: variables,
    }), { headers: { 'Content-Type': 'application/json' } })
        .then(function (_a) {
        var data = _a.data;
        console.log('data recieved', data);
        return { result: data.data.result, errors: data.data.errors };
    })
        .catch(function (e) {
        console.error('error', e);
    });
}); }; };
exports.default = (function (gateway, gql) {
    if (gateway === void 0) { gateway = 'http://localhost:3001/graphql'; }
    if (gql === void 0) { gql = createPoster(gateway); }
    return ({
        getAllUsers: gql(getAllUsersQuery),
        getProfile: gql(getProfileQuery),
        patchProfile: gql(patchUserQuery),
    });
});
//# sourceMappingURL=api.js.map