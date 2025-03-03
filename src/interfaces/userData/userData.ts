
export interface IUserData {
    id: string
    name: string,
    email: string,
    bio: string,
    location: string,
    profilePicture: string,
    coverPicture: string,
    friends: number,
    token: string
}

export interface IUser {
    user: IUserData
}