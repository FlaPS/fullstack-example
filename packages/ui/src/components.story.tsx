import React from 'react'
import { storiesOf } from '@storybook/react'
import Avatar from './components/Avatar'
import {User} from '../../client-store/src/index'
import UserCard from './components/UserCard'
import UsersList from './components/UsersList'
import {range} from 'ramda'
import InputField from './inputs/InputField'

import {cold} from 'react-hot-loader'
import ProfileView from './components/ProfileView'


const userMock: User = {
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
}

const profileMock =     {
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
    }

const log = value => console.log(value)

// @ts-ignore
const userListMock = (range(0, 120) as User[]).fill(userMock, 0, 120)

storiesOf('components', module)
    .add('Avatar', () =>
        <Avatar
            url={userMock.url as string}
        />,
    )
    .add('UserCard', () =>
        <UserCard {...userMock} />,
    )
    .add('UserList', () =>
        UsersList({data: userListMock}),
    )
    .add('text input', () => {

            return <InputField
                        value={'Saint-Petersburg'}
                        onChange={log}
                        label={'Confirm'}
                    />
        },
    )
    .add('Profile view', () =>
        <ProfileView value={profileMock} onChange={log} onBack={log} />,
    )
