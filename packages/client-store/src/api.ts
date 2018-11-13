import axios from 'axios'
// import * as R from 'ramda'
import { Users, Profile, UserId} from '@local/value-types'

type GQLResponseData<T> = {

    result: T
    errors?: Array<{ message: string, path: string }>
}

type GQLResponse<T> = {
    data: GQLResponseData<T>
}
// type GQLPromise<Response> = Promise<GQLResponse<Response>>

type Invoker<Response, Request> =
    Request extends void
        ? () => GQLResponseData<Response>
        : (variables: Request) => GQLResponseData<Response>

const getAllUsersQuery = `
    {
        result: getAllUsers {
            id
            name
            age
            city
            url
            languages
        }
    }
`


const getProfileQuery = `
    query getUser($id: ID!){
      result: profile(id: $id) {
        id
        name
        age
        city
        url
        knowledge {
            language
            frameworks
      	}
      }
    }
`

const patchUserQuery = `
    mutation patchProfile($id: ID!, $city: String!){
      result: patchProfile(id: $id, city: $city) {
            id
            name
            age
            city
            url
            knowledge {
                language
                frameworks
            }
      }
    }
`

const createPoster = (url: string) => <Response, Request = void>(query: string) => (
    (variables = {}) =>
        axios
            .post<GQLResponse<Response>>(
                url,
                JSON.stringify({
                    query,
                    variables,
                }),
                { headers: {'Content-Type': 'application/json'}},
            )
        .then<GQLResponseData<Response>>(
            ({data}) => {
                console.log('data recieved', data)
                return {result: data.data.result, errors: data.data.errors}
            },
        )
            .catch((e: any) => {
                console.error('error', e)

            })
    ) as any as Invoker<Response, Request>

export default (gateway: string = 'http://localhost:3001/graphql', gql = createPoster(gateway)) => ({
    getAllUsers: gql<Users>(getAllUsersQuery),
    getProfile: gql<Profile, {id: UserId}>(getProfileQuery),
    patchProfile: gql<Profile, Partial<Profile>>(patchUserQuery),
})
