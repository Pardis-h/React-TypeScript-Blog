export type TApiResponse = {
    status: number,
    statusText :string,
    data : any,
    error: any,
    loading: boolean,
}

export type TPostApiResponse = TApiResponse & {
    postAPIData : Function
}

export type TGetApiResponse = TApiResponse & {
    getAPIData : Function
}

export type TDeleteApiResponse = {
    status : number,
    data : any,
    error: string,
    deleteAPIData : Function
}