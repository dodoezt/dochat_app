export type UserAtributType = {
    id : number,
    userId: number,
    pfp_id: string | null,
    tags_used: number[] | null,
    special_tags: number[] | null,
}

export type UserInfoType = {
    userId: number,
    username: string,
    email: string,
    email_name: string,
    createdAt: string,
    user_atribut: UserAtributType,
}

export type UserPublicType = {
    userId: number,
    username: string,
    createdAt: string,
    user_atribut: UserAtributType,
}