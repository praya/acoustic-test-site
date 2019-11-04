export interface Error {
    code: number;
    description: string;
    level: string;
    locale: string;
    message: string;
}

export interface FailResponse {
    errors: Error[] | Error;
}
