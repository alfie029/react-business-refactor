export interface BookDetailViewModel {
    name: String,
    author: String,
    price: number,
}

export enum AsyncLoadingState {
    Loading = 1,
    Loaded = 0,
    Error = -1,
}
