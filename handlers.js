import * as App from './app.js';
let allRepos;
const btn1 = document.getElementById('5stars')
const btn2 = document.getElementById('last5')
const btn3 = document.getElementById('sumstars')
const responsediv = document.querySelector('#response')

function clearContent (container){
    container.innerHTML = ""
}
function writeContent (container, content){
    container.innerHTML += "<h4>" + content + "</h4>";
    container.innerHTML +="<br></br>";
}
async function assignRepos (){
    allRepos = await App.getAllRepos();
    console.log(allRepos)    
}
window.addEventListener("load", function(){
    assignRepos();
});

btn1.addEventListener('click',()=>{
    clearContent(responsediv);
    const filteredRepos = App.filter5Stars(allRepos);
    filteredRepos.forEach((currentRepo)=>{
        writeContent(responsediv,JSON.stringify(currentRepo))
        console.log(currentRepo);
    });
})
btn2.addEventListener('click', ()=>{
    clearContent(responsediv);
    const sortedRepos = App.sortByDate(allRepos);
    const last5Repos = App.filterLast5Updated(sortedRepos);
    last5Repos.forEach((currentRepo)=>{
        writeContent(responsediv,JSON.stringify(currentRepo))
        console.log(currentRepo);
    });
})

btn3.addEventListener('click', ()=>{
    clearContent(responsediv);
    const sumStars = App.sumAllStars(allRepos);
    writeContent(responsediv, sumStars)
})