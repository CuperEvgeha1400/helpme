export enum statusT {
    TREATMENT = "Ve zpracování",
    CLOSE = "uzavřena"
}


export interface FormType {
    pk : string,
    nameCompany : string,
    status : statusT,
    email : string,
    phone : string,
    info : string,
    name : string,
}