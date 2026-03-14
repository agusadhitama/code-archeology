export function renderRepos(repos){

const container = document.getElementById("repos")

container.innerHTML="<h2>Repository Cities</h2>"

repos.slice(0,5).forEach(repo=>{

const div=document.createElement("div")

div.innerHTML=`

<h3>${repo.name}</h3>

<p>⭐ ${repo.stargazers_count}</p>

`

container.appendChild(div)

})

}