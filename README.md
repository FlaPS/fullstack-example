# fullstack-example
App with tests, storybook and backend, functional approach.
This repository inspired by test task.
The original task  - ./TEST/ folder. 
# How to run #

```
    npm run with-blackjack-and-hookers
```
This script will install all dependencies and starts three servers:
http://localhost:6006/ - for ui kit
http://localhost:8081/ - frontend in dev mode
http://localhost:3001/ - backend with graphql and RESTful endpoints

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