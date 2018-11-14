import * as React from 'react'
export { Counter} from './components/Counter'
export {default as UsersList} from './components/UsersList'
export {default as ProfileView} from './components/ProfileView'

export const DebugProps = (props: any) =>
    React.createElement(
        'div',
        {},
        JSON.stringify(props),
    )
