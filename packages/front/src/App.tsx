import * as React from 'react'
import {Provider} from 'react-redux'
import {Counter} from '@local/ui'
import * as clientStore from '@local/client-store'
console.log('clientStore', clientStore)
const store = clientStore.configureFrontendStore()
export default (props: any) =>
            <Provider store={store}>
                <div className='App'>
                    <header className='App-header'>
                        <img  className='App-logo' alt='logo'/>
                        <h1 className='App-title'>Welcome to React</h1>
                    </header>
                    <p className='App-intro'>
                        To get started, edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    Ba-bah!
                <Counter />
                </div>
            </Provider>

