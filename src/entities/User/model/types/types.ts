export interface User {
    id: string
    username: string
}

export interface UserStateSchema {
    authData?: User
}
