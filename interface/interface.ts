export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

export interface Result {
    id: string;
    description: null | string;
    likes: number;
    urls: Urls;
}

export interface ResponseAPI {
    results: Result[];
}

