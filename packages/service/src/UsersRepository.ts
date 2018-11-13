import {whereEq} from 'ramda'
import {Profile, User} from '../../value-types/index'
import * as config from '../config.json'
import seed from './seed'
import {path, map} from 'ramda'

/**
 * Why async ?
 * Because the implementation could based on async IO (DB, file system, or what ever)
 * @param id
 */
const users = seed(config.numberOfUsersToSeed)

const getProfileById = async (id: string | number) =>
    users.find(whereEq({id: String(id)}))

const updateProfile = async ({id, ...rest}: Profile): Promise<Profile> => {
    const user = await getProfileById(id)
    Object.assign(user, rest)
    return user as any as Profile
}

const getTotalUsers = async () =>
    users.length

const getName = path<string>(['language'])
const mapNames = map(getName)

const getAllUsers = async (): Promise<User[]> =>
    users.map( ({knowledge = [], ...user}) =>
        ({
            ...user,
            languages: mapNames(knowledge) as any as string[],
        }),
    )

export default {
    getProfileById,
    getTotalUsers,
    updateProfile,
    getAllUsers,
}
