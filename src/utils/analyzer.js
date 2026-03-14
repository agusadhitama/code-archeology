export function analyzeDeveloper(user,repos){

let stars = 0
let languages = {}

repos.forEach(repo=>{

stars += repo.stargazers_count || 0

if(repo.language){
languages[repo.language] = (languages[repo.language] || 0) + 1
}

})

let dominant = "Unknown"

if(Object.keys(languages).length > 0){
dominant = Object.keys(languages).reduce((a,b)=>
languages[a] > languages[b] ? a : b
)
}

let score = repos.length + stars * 2

let rank = "Rising Developer"

if(score > 200) rank = "Advanced Developer"
if(score > 500) rank = "Legendary Architect"

return {
repos: repos.length,
stars,
dominant,
rank
}

}