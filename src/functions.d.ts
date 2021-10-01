export declare function getAllRepos(url: string): Promise<any>;
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
export declare function filterFirst5(repos: Irepo[]): Irepo[];
export declare function sumAllStars(repos: Irepo[]): number;
export declare function sortByStars(repos: Irepo[]): Irepo[];
export declare function sortAlphabetically(repos: Irepo[]): Irepo[];
export declare function removeRepoWithH(repos: Irepo[]): Irepo[];
