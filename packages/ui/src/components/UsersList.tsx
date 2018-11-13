import * as React from 'react'
import {User} from '@local/client-store'
import styled from 'styled-components'
import {map} from 'ramda'
import UserCard from './UserCard'

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    > * {
      flex: 1 0 21%;
      margin: 10px;
    }
`

const renderCards = map(/*addKey(UserCard, 'id')*/ (obj: User) =>
    React.createElement(UserCard, {...obj, key: obj.id}))


export default (users: User[] = []) =>
    <Layout>
        {renderCards(users)}
    </Layout>
