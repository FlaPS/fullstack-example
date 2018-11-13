declare module 'data/users.json' {
    const value: Array<any>
    export = value
    export default value
}

declare module '*.graphql' {
    const value: any
    export = value
    export default value
}
export type Config = {
    host: string
    port: number
    numberOfUsersToSeed?: number
}

declare module 'config.json'  {
    export = Config
}
