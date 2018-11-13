
export type Users = User[]


export type UserId = string

type Person = {
    id: UserId
    name: string
    age?: number
    url?: string
}

export type User =
    Person
    & {
    languages?: string[]
}

export type Profile =
    & Person
    & {
    city?: string
    knowledge?: Knowledge[]
}

export type Knowledge =  {
    language: string
    frameworks?: string[]
}


export default {}
