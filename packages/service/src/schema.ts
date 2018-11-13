import { makeExecutableSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'

const typeDefs = importSchema(__dirname + '/types.graphql')
import {Profile, User} from '@local/client-store'
import UsersRepository from './UsersRepository'

const resolvers = {
    Query: {
        profile: (_, {id}: User) => UsersRepository.getProfileById(id),
        totalUsers: UsersRepository.getTotalUsers,
        getAllUsers: UsersRepository.getAllUsers,
    },
    Mutation: {
        patchProfile: (_, user: Profile) =>
            UsersRepository.updateProfile(user),
      },

}

export default makeExecutableSchema({ typeDefs, resolvers })
