import {filter5Stars, getAllRepos,sortByDate, filterLast5Updated, sumAllStars } from './app.js';
let allRepos;
const btn1 = document.querySelector('#5stars')
const btn2 = document.querySelector('#last5')
const btn3 = document.querySelector('#sumsstars')
const responsediv = document.querySelector('#response')

function clearContent (container){
    container.innerHTML = ""
}
function writeContent (container, content){
    container.innerHTML = "<h4>" + content + "</h4>";
    container.innerHTML +="<br></br>";
}

btn1.addEventListener('click',()=>{
    clearContent(responsediv);
    const filteredRepos = filter5Stars(allRepos);
    filteredRepos.forEach((currentRepo)=>writeContent(responsediv,currentRepo ));
})
