export enum NewsInnerLocation {
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

export interface NewsInnerType {
    location : NewsInnerLocation
    data : NewsDataType
}

export interface NewsDataType {
    img : string,
    title : string,
    description : string,
}