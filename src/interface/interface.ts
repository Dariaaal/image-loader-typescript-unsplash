export interface Result {
    id: string;
    description: null | string;
    likes: number;
}

export interface ResponseAPI {
    results: Result[];
}

