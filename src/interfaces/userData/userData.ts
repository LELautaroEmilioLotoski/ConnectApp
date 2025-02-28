export interface IUserData {
    name: string,
    email: string,
    bio: string,
    location: string,
    profilePicture: string,
    coverPicture: string,
    friends: number
}

export interface IUserDataResponseData {
    id: string,
    name: string,
    email: string,
    token: string
}

export interface IUser {
    user: IUserData
}