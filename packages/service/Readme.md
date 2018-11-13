**How to use**

This is modified backend app from the original test task.

The implementation reworked:
0. graphql: user.id is described as Int!, replaced with ID! (which is actual string)
Types User (short info about user without frameworks) and Profile (full user info) are added
1. Migration to TypeScript
2. Repository pattern for users objects, single logic used by graphql and rest router
3. Users list - is an array of short copies of full profiles
4. index.ts module returns a promise for a sync creation into kind of "end-to-end" tests
5. Seed function added
6. Isomorphic request/return types are imported from isomorphic package ```@local/client-store```
