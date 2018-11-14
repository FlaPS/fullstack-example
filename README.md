# fullstack-example
App with tests, storybook and backend, functional approach.
This repository inspired by test task.
The original task  - ./TEST_TASK/ folder. 

# How to run #

```
    npm run with-blackjack-and-hookers
```
This script will install all dependencies and starts three servers:
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


# packages #

Packages with prefix ```@sha/``` developed out of the scope of this test. 
You can find there some other examples of my code.

Packages with prefix   ```@local/``` - are in the scope of the task.
Here is the list of packages about the task:

### @local/client-store ###
Isomorphic package of client-store. 
Used by frontend and jest tests to emulate user behavior

### @local/value-type ###
All dta transfer types, value objects

### @local/service ###
Backend of the app

### @local/ui ###
UI-kit, the set of components with no connection to the store

### @local/front ###
Frontend app