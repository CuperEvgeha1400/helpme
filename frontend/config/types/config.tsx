export interface Path {
    plugin : string,
    entry : string,
    output : string,
    devserver : string,
    src : string
}
export interface DevServer {
    port : number,
    directory : string
}
export type mode = 'development' | 'production'

export interface EnvBuild {
    port : number,
    mode : mode,
}

export interface BuildOption {
    mode : mode,
    path : Path,
    isDev : boolean,
    server : DevServer
}