import moment from "../node_modules/moment/dist/moment.js";
export async function getAllRepos() {
    const url = "https://api.github.com/orgs/stackbuilders/repos";
    const response = await fetch(url);
    return response.json();
}
export function reduceProperties(repos) {
    return repos.map(repo => ({ id: repo.id, name: repo.name, stargazers_count: repo.stargazers_count, created_at: repo.created_at, updated_at: repo.updated_at, pushed_at: repo.pushed_at }));
}
export function filter5Stars(repos) {
    return repos.filter(repo => repo.stargazers_count >= 5);
}
export function sortByDate(repos) {
    const reposClone = [...repos];
    return reposClone.sort((a, b) => moment(b.pushed_at).diff(moment(a.pushed_at)));
}
export function filterLast5Updated(repos) {
    return repos.slice(0, 5);
}
export function sumAllStars(repos) {
    return repos.reduce((acc, currentRepo) => acc += currentRepo.stargazers_count, 0);
}
