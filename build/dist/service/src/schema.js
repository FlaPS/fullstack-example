"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tools_1 = require("graphql-tools");
var graphql_import_1 = require("graphql-import");
var typeDefs = graphql_import_1.importSchema(__dirname + '/types.graphql');
var UsersRepository_1 = require("./UsersRepository");
var resolvers = {
    Query: {
        profile: function (_, _a) {
            var id = _a.id;
            return UsersRepository_1.default.getProfileById(id);
        },
        totalUsers: UsersRepository_1.default.getTotalUsers,
        getAllUsers: UsersRepository_1.default.getAllUsers,
    },
    Mutation: {
        patchProfile: function (_, user) {
            return UsersRepository_1.default.updateProfile(user);
        },
    },
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers });
//# sourceMappingURL=schema.js.map