import moment from "./node_modules/moment/dist/moment.js"
async function getAllRepos() {
    const url = "https://api.github.com/orgs/stackbuilders/repos";
    const response = await fetch(url);
    return response.json();
}


function filter5Stars(repos){
    const filteredRepos = repos.filter(repo => repo.stargazers_count >= 5);
    return filteredRepos
}

function sortByDate(repos){
    const reposClone = [...repos];
    const sortedRepos =  reposClone.sort((a,b)=> moment(b.pushed_at).diff(moment(a.pushed_at)))
    return sortedRepos
}

function filterLast5Updated(repos){
    const filteredLast5 = repos.slice(0,5);
    return filteredLast5
}

function sumAllStars(repos){
    const sum =repos.reduce((acc,currentRepo)=>acc+=currentRepo.stargazers_count,0)
    return sum;
}
export {getAllRepos,filter5Stars,sortByDate,filterLast5Updated, sumAllStars};

