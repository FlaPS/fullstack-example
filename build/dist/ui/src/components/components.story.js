"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_2 = require("@storybook/react");
var Avatar_1 = require("./Avatar");
var UserCard_1 = require("./UserCard");
var UsersList_1 = require("./UsersList");
var ramda_1 = require("ramda");
var InputField_1 = require("../inputs/InputField");
var react_hot_loader_1 = require("react-hot-loader");
var ProfileView_1 = require("./ProfileView");
var userMock = {
    age: 29,
    name: 'Max Shammasov',
    languages: [
        'Java',
        'Python',
        'ActionScript 3',
        'Lua',
        'Ruby on Rails',
        'Closure',
        'TypeScript',
        'C++',
        'C#',
        'Haskell',
        'Erlang',
        'Prolog',
        'Algol',
        'Fortran',
        'Basic',
        'Visual Basic',
        'J#',
    ],
    id: '1',
    url: 'https://24smi.org/public/media/235x307/celebrity/2015/09/04/1441368455-donald-tramp.jpg',
};
var profileMock = {
    'id': '1',
    'name': 'John Smith',
    'age': 29,
    'city': 'United States of America',
    'knowledge': [
        {
            'language': 'Javascript',
            'frameworks': [
                'express.js',
                'Vue',
                'AngularJS',
            ],
        },
        {
            'language': 'PHP',
            'frameworks': [],
        },
        {
            'language': 'Java',
            'frameworks': [
                'Play',
            ],
        },
        {
            'language': 'Turbo Pascal',
            'frameworks': [],
        },
    ],
};
var log = function (value) { return console.log(value); };
// @ts-ignore
var userListMock = ramda_1.range(0, 120).fill(userMock, 0, 120);
react_2.storiesOf('components', module)
    .add('Avatar', function () {
    return react_1.default.createElement(Avatar_1.default, { url: userMock.url });
})
    .add('UserCard', function () {
    return react_1.default.createElement(UserCard_1.default, tslib_1.__assign({}, userMock));
})
    .add('UserList', function () {
    return UsersList_1.default(userListMock);
})
    .add('text input', function () {
    var ColdInputField = react_hot_loader_1.cold(InputField_1.default);
    return react_1.default.createElement(ColdInputField, { value: 'Bara bere', onChange: log, label: 'Confirm' });
})
    .add('Profile view', function () {
    return react_1.default.createElement(ProfileView_1.default, { profile: profileMock, onChange: log });
});
//# sourceMappingURL=components.story.js.map