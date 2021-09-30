import * as App from './functions.js';
let allRepos;
let reducedRepos;
const btn1 = document.getElementById('5stars');
const btn2 = document.getElementById('last5');
const btn3 = document.getElementById('sumstars');
const responsediv = document.querySelector('#response');
function clearContent(container) {
    container.innerHTML = "";
}
function writeContent(container, content) {
    container.innerHTML += "<h4>" + content + "</h4>";
    container.innerHTML += "<br></br>";
}
async function assignRepos() {
    allRepos = await App.getAllRepos();
    reducedRepos = App.reduceProperties(allRepos);
    console.log(reducedRepos);
}
window.addEventListener('load', function (ev) {
    assignRepos();
});
btn1.addEventListener('click', () => {
    clearContent(responsediv);
    const filteredRepos = App.filter5Stars(reducedRepos);
    filteredRepos.forEach((currentRepo) => writeContent(responsediv, JSON.stringify(currentRepo)));
});
btn2.addEventListener('click', () => {
    clearContent(responsediv);
    const sortedRepos = App.sortByDate(reducedRepos);
    const last5Repos = App.filterLast5Updated(sortedRepos);
    last5Repos.forEach((currentRepo) => writeContent(responsediv, JSON.stringify(currentRepo)));
});
btn3.addEventListener('click', () => {
    clearContent(responsediv);
    const sumStars = App.sumAllStars(reducedRepos);
    writeContent(responsediv, sumStars);
});
