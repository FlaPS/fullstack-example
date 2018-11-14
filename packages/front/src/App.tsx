import * as React from 'react'
import { Provider } from 'react-redux'
import {Redirect, Route, Switch, withRouter} from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import {configureFrontendStore, nav} from '@local/client-store'
import {createBrowserHistory} from 'history'
import UserListPage from './pages/UserListPage'
import {ProfilePage} from './pages'


const history = createBrowserHistory()
const store = configureFrontendStore(history)


// type RouteType<T> = {
//         nav: NavRoute<T>
//         Component: React.ComponentType<T>
// }

const routes = {
    index: {
        nav: nav.index,
        Component: UserListPage,
    },
    profile: {
        nav: nav.profile,
        Component: ProfilePage,
    },
}

const reactRoutes =  Object
    .values(routes)
    .map( ({Component, nav}) =>
        <Route
            exact
            key={nav.pattern}
            path={nav.pattern}
            render={ props =>
                // @ts-ignore
                <Component {...props.match.params as any} history={history} />
            }
        />,
    )
const mainSwitch =
    <Switch>
        <Redirect to='/usersList' from='/' exact/>
        {
            reactRoutes
        }
    </Switch>

const renderContent = () =>
    <ConnectedRouter history={history}>

        {mainSwitch}
    </ConnectedRouter>


const App = (props: any) =>
            <Provider store={store}>
                {renderContent()}
            </Provider>

export default App
