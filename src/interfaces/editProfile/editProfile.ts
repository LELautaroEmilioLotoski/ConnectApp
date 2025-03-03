export interface IUserDataUpdate {
    name?: string,
    email?: string,
    bio?: string,
    location?: string,
    profilePicture?: string,
    coverPicture?: string,
    friends?: number,
    password?: string
    birthdate?: string
}

export interface IUser {
    user: IUserDataUpdate
}