export declare function getAllRepos(): Promise<any>;
export interface Irepo {
    id: string;
    name: string;
    stargazers_count: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
}
export declare function reduceProperties(repos: Irepo[]): {
    id: string;
    name: string;
    stargazers_count: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
}[];
export declare function filter5Stars(repos: Irepo[]): Irepo[];
export declare function sortByDate(repos: Irepo[]): Irepo[];
export declare function filterLast5Updated(repos: Irepo[]): Irepo[];
export declare function sumAllStars(repos: Irepo[]): number;
