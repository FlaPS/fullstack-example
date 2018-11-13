"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
var random_1 = require("@sha/random");
var AVATAR_BASE = 'https://picsum.photos/200/300?image=';
var languages = [
    {
        language: 'Java',
        frameworks: ['Spring', 'Play', 'Some other framework', 'JSF', 'Hibernate'],
    },
    {
        language: 'C#',
        frameworks: ['ASP.NET', '.NET', 'Unity', 'SignalR', 'NancyFX'],
    },
    {
        language: 'PHP',
        frameworks: ['Phalcon', 'Laravel', 'CakePHP', 'FuelPHP', 'Yii', 'Zend', 'Symfony', 'CodeIgniter'],
    },
    {
        language: 'ActionScript3',
        frameworks: ['Flex', 'Box2D', 'Alternativa Platform', 'Feathers', 'PureMVC', 'Genome2D', 'Starling'],
    },
    {
        language: 'JavaScript',
        frameworks: ['React', 'AngularJS', 'Angular', 'Node.js', 'TypeORM', 'Backbone', 'Marionette', 'jQuery-UI'],
    },
    {
        language: 'Python',
        frameworks: ['Bottle', 'Flask', 'CherryPy', 'Tornado'],
    },
];
var lensFrameworks = ramda_1.lensProp('frameworks');
var setFrameworks = ramda_1.over(lensFrameworks, random_1.takeRandom(3));
var generateKnowledge = ramda_1.map(setFrameworks);
var createProfile = function (id) {
    return ({
        id: String(id),
        name: random_1.faker.name.firstName() + ' ' + random_1.faker.name.lastName(),
        city: random_1.faker.address.city(),
        age: random_1.faker.random.number({ min: 18, max: 65 }),
        url: AVATAR_BASE + id,
        knowledge: generateKnowledge(random_1.takeRandom()(languages)),
    });
};
exports.default = ramda_1.times(createProfile);
//# sourceMappingURL=seed.js.map