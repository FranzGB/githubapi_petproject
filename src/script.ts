import * as App from './functions.js';
let allRepos: App.Irepo[];
let reducedRepos: App.Irepo[];
const btn1: HTMLElement = document.getElementById('5stars')!;
const btn2: HTMLElement = document.getElementById('last5')!;
const btn3: HTMLElement = document.getElementById('sumstars')!;
const btn4: HTMLElement = document.getElementById("top5stars")!;
const btn5: HTMLElement = document.getElementById("alphabetically")!;
const responsediv: HTMLElement = document.querySelector('#response')!;

function clearContent (container: HTMLElement){
    container.innerHTML = ""
}
function writeContent (container:HTMLElement, content:string | number ){
    container.innerHTML += "<h4>" + content + "</h4>";
    container.innerHTML +="<br></br>";
}
async function assignRepos (){
    const url = "https://api.github.com/orgs/stackbuilders/repos?page=1&per_page=100"
    allRepos = await App.getAllRepos(url);
    reducedRepos = App.reduceProperties(allRepos);
    console.log(reducedRepos)    
}
window.addEventListener('load', function(this:HTMLElement, ev:Event){
    assignRepos();
});

btn1.addEventListener('click',()=>{
    clearContent(responsediv);
    const filteredRepos = App.filter5Stars(reducedRepos);
    filteredRepos.forEach((currentRepo)=>writeContent(responsediv,JSON.stringify(currentRepo)));
});

btn2.addEventListener('click', ()=>{
    clearContent(responsediv);
    const sortedRepos = App.sortByDate(reducedRepos);
    const last5Repos = App.filterFirst5(sortedRepos);
    last5Repos.forEach((currentRepo)=>writeContent(responsediv,JSON.stringify(currentRepo)));
});

btn3.addEventListener('click', ()=>{
    clearContent(responsediv);
    const sumStars = App.sumAllStars(reducedRepos);
    writeContent(responsediv, sumStars);
})

btn4.addEventListener('click', ()=>{
    clearContent(responsediv);
    const sortedStars = App.sortByStars(reducedRepos);
    const first5Repos = App.filterFirst5(sortedStars);
    first5Repos.forEach((currentRepo)=>writeContent(responsediv,JSON.stringify(currentRepo)));
})


btn5.addEventListener('click', ()=>{
    clearContent(responsediv);
    const sortedAlphabetically = App.sortAlphabetically(reducedRepos);
    const withoutH = App.removeRepoWithH(sortedAlphabetically);
    withoutH.forEach((currentRepo)=>writeContent(responsediv,JSON.stringify(currentRepo)))
})
