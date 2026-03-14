export async function getUser(username){

const res = await fetch(`https://api.github.com/users/${username}`)

return await res.json()

}

export async function getRepos(username){

const res = await fetch(`https://api.github.com/users/${username}/repos`)

return await res.json()

}