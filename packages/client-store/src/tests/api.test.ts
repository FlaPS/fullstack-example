import apiFactory from '../api'
import {Server} from 'http'
import server from '../../../service/src/index'
const api = apiFactory()

let app: Server
beforeAll(async () =>
    app = await server,
)

afterAll( (done: any) =>
    app.close(done),
)

test('get users list', async () => {
        const result = await api.getAllUsers()
        expect(result.result).toBeDefined()
    }
)

test('Update user city, and check one', async () => {

    const city = String(Math.random())
    const id = '2'
    await api.patchProfile({id, city})
    const selectedUser = await api.getProfile({id})

    expect(selectedUser.result.city).toEqual(city)
})
