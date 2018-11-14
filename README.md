# fullstack-example
App with tests, storybook and backend, functional approach.
This repo is not about css, but tool chain and functional approach
This repository inspired by test task.
The original task  - ./TEST_TASK/ folder. 

# How to run #

```
    npm run with-blackjack-and-hookers
```
This script will install all dependencies and start three servers:

http://localhost:6006/ - for ui kit

http://localhost:8081/ - frontend in dev mode

http://localhost:3001/ - backend with graphql and RESTful endpoints

# TODO #
- React hooks are still buggy, it's doesn't work when imported from other package. 
You can find my class-less approach in ```react-fp/Pure.ts``` folder, kinda Elm-architecture with effect resolvers


Hope to bring in consistence one with TypeScript 3 in future
- Clean-up dependencies
- make separate packages for: frontend-builder, tslint.config, tsconfig.json
- Provide composable and memoized lenses/prisms for redux store
- Context depended routing & i18n
- Switch transport feature
- bring here @sha/logger & @sha/config & @sha/actors packages
- Add full e22 test into client-store package based on sagas, 
to emulate several users at the same time


# packages #

Packages with prefix ```@sha/``` developed out of the scope of this test. 
You can find there some other examples of my code there. 
Maybe I will publish them in future, when find the time to apply TS3 features, clean up code and provide TS check tests

There is no any <b>CLASS</b> keywork in ```@local``` packages, only pure functions except @local/client-store/src/sagas folder.
Packages with prefix   ```@local/``` - are in the scope of the task.
Here is the list of packages about the task:

### @local/client-store ###
Isomorphic package of client-store. 
Used by frontend and jest tests to emulate user behavior.
There is no dependency on @local/service, 
but tests use one implicitly to avoid cycle dependencies

### @local/value-type ###
All DTO transfer types, value objects

### @local/service ###
Backend of the app

### @local/ui ###
UI-kit, the set of components with no connection to the store

### @local/front ###
Frontend app

# About Forms #
I don't like store form data into redux-store.
Here is how I used Pure.ts in my other projects, form component composed via Pure.ts for example:
```typescript
import {KeyedMap} from './fp/baseTypes'
import {messageFactory, Pure} from './Pure'
import {assocPath, isEmpty, keys} from 'ramda'
import {createSpec, Scheme} from '@local/biz'
import {getStore} from '@local/root'

type ErrorMap<D> = Partial<KeyedMap<string[], D>>
type TouchMap<D> = Partial<KeyedMap<boolean, D>>
type RequiredMap<D> = Partial<KeyedMap<boolean, D>>
type Validator<D> = (value: D) => ErrorMap<D>

type FormState<D> = {
    model?: Partial<D>
    errors?: Partial<ErrorMap<D>>
    touch?: Partial<TouchMap<D>>
}

type ChangePayload<D, T = any> = {
    property: keyof D;
    value: T
}

const makeFormActions = <D> () => ({
    onChange: messageFactory<ChangePayload<D>>('onChange'),
    onSubmit: messageFactory<Partial<D>>('onSubmit'),
    onCancel: messageFactory<Partial<D>>('onCancel'),
})

const makeValidationEffect = <D> () => ({
    onValid: messageFactory<Partial<D>>('onValid'),
    onInvalid: messageFactory<Partial<D>>('onInvalid'),
})

const makeChangeReducer = <D> () =>
    (state: {model: D, initial: D} = {model: {} as D, initial: undefined}, action) => {
        if (action.type === 'onChange')
            return assocPath(['model', action.payload.property], action.payload.value, state)

        return state
    }

const defaultValidationReducerParams = <D>() => ({
    errors: {} as ErrorMap<D>,
    model: {} as D,
    isValid: true,
})

const makeValidationReducer = <D> (validator) =>
    (state: {errors: ErrorMap<D>, model: D, isValid: boolean} = defaultValidationReducerParams<D>(), action) => {
        if (action.type === 'onChange' || action.type === 'init') {
            const globalState = getStore().getState()
            let newState = assocPath(['errors'], validator(state.model, globalState), state)
            // console.log('invoke validator', state.model, newState.errors)
            newState = assocPath(['isValid'], isEmpty(newState.errors), newState)
            // console.log('state after change', newState)
            return newState
        }
        return state
    }

const defaultTouchReducerParams = <D> () => ({
    touched: {} as TouchMap<D>,
    onlyTouchedErrors: false,
})

const makeTouchReducer = <D> () =>
    (state: {touched: TouchMap<D>, onlyTouchedErrors: boolean} = defaultTouchReducerParams<D>(), action) => {
        if (action.type === 'onChange') {
            const newState = assocPath(['touched', action.payload.property], true, state)
            return newState
        }
        return state
    }

const makeSchemeReducer = <D> (scheme: Scheme<D>) =>
    (state: {scheme: Scheme<D>}, action) =>
        state.scheme
            ? state
            : {...state, scheme}

const makeEditableModel = <D> () =>
    Pure<{model: D}>()
        .addMsg(makeFormActions<D>())
        .addReducer(makeChangeReducer<D>())
        .addReducer(makeTouchReducer<D>())

export const formPure = <T, D = Partial<T>> (scheme: Scheme<T>, fields?: Array<keyof T>) =>
    makeEditableModel<D>()
        .addProps({scheme, forked: true})
        .recieveProps<{forked: boolean}>((state, props, next) => {
                let merge = {}
                if (props.forked !== next.forked) {
                   merge = Object.assign({}, {touched: {}})
                }
                if ((!next.forked || isEmpty(state.touched))) {
                    merge = Object.assign({}, {model: next.model})
                }
                if (state.model !== next.model && !next.forked) {
                    merge = Object.assign(state, {model: next.model, touched: {}})
                    merge = makeValidationReducer<D>(
                            createSpec(scheme, fields || keys(scheme.properties))
                        )(merge, {type: 'init'})

                }
                return Object.assign({}, state, merge)
            }
        )
        .addReducer(makeSchemeReducer(scheme))
        .addReducer(makeValidationReducer<D>(
            createSpec(scheme, fields || keys(scheme.properties))
        ))
        .addEff(makeValidationEffect<D>())
        .addResolver((effects, prev: any, next: any) =>
            (isEmpty(next.errors)
               ? effects.onValid(next.model)
               : effects.onInvalid(next.model))
        )
```