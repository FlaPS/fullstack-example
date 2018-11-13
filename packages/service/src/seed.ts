import {Knowledge, Profile} from '@local/client-store'
import {times, lensProp, over, map} from 'ramda'
import {faker, takeRandom} from '@sha/random'

const AVATAR_BASE = 'https://picsum.photos/200/300?image='

type LanguageSet = {
    language: string
    frameworks: string[]
}

const languages: LanguageSet[] = [
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
]

const lensFrameworks = lensProp('frameworks')
const setFrameworks = over(lensFrameworks, takeRandom(3))
const generateKnowledge = map(setFrameworks)

const createProfile = (id: string | number): Profile =>
    ({
        id: String(id),
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        city: faker.address.city(),
        age: faker.random.number({min: 18, max: 65}),
        url: AVATAR_BASE + id,
        knowledge: generateKnowledge(takeRandom()(languages)) as Knowledge[],
    })

export default times(createProfile)
