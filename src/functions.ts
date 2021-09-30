import moment from "../node_modules/moment/dist/moment.js"

export async function getAllRepos() {
    const url: string = "https://api.github.com/orgs/stackbuilders/repos";
    const response = await fetch(url);
    return response.json();
}

export interface Irepo{
    id: string,
    name: string,
    stargazers_count: number,
    created_at: string,
    updated_at: string,
    pushed_at: string
}

export function reduceProperties(repos: Irepo[]){  
    return repos.map(repo => ({id: repo.id, name: repo.name, stargazers_count: repo.stargazers_count, created_at: repo.created_at, updated_at: repo.updated_at, pushed_at: repo.pushed_at }))
}
export function filter5Stars(repos: Irepo[]) {
    return repos.filter(repo => repo.stargazers_count >= 5);
}

export function sortByDate(repos: Irepo[]){
    const reposClone = [...repos];
    return reposClone.sort((a,b)=> moment(b.pushed_at).diff(moment(a.pushed_at)))
}

export function filterLast5Updated(repos: Irepo[]){
    return repos.slice(0,5)
}

export function sumAllStars(repos: Irepo[]){
    return repos.reduce((acc,currentRepo)=>acc+=currentRepo.stargazers_count,0)
}
