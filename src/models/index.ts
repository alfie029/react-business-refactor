export interface BookDetailModel {
    name: String,
    author: String,
    discountPrice?: number,
    price?: number,
}

export enum AsyncLoadingState {
    Loading = 1,
    Loaded = 0,
    Error = -1,
}
