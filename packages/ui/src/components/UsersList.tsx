import * as React from 'react'
import {User} from '@local/client-store'
import styled from 'styled-components'
import {map} from 'ramda'
import UserCard from './UserCard'
import {OnChangeCallback} from '../inputs/OnChangeCallback'
import {ExtractProps} from '@sha/react-fp'

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    > * {
      flex: 1 0 21%;
      margin: 10px;
    }
`

const renderCards = (onSelect?: OnChangeCallback<User>) =>
    map(/*addKey(UserCard, 'id')*/ (obj: User) =>
        React.createElement(UserCard, {
                ...obj,
                onClick: (e: any) =>
                    onSelect && onSelect(obj),
                key: obj.id,
            }),
    )


type UsersListProps = {
    data?: User[],
    onSelect?: OnChangeCallback<User>
}

export default ({data, onSelect, ref, ...props}: UsersListProps & ExtractProps<typeof Layout>) =>
    <Layout {...props}>
        {renderCards(onSelect)(data || [])}
    </Layout>
