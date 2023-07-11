export interface User {
    id: string
    username: string
    avatar?: string
}

export interface UserStateSchema {
    authData?: User
    mounted?: boolean
}
