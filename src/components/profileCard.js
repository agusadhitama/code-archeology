export function renderProfile(user,analysis){

const profile = document.getElementById("profile")

profile.innerHTML = `

<img src="${user.avatar_url}" width="120">

<h2>${user.name}</h2>

<p>${user.bio || ""}</p>

<div>

<p>Repositories : ${analysis.repos}</p>
<p>Stars : ${analysis.stars}</p>
<p>Main Language : ${analysis.dominant}</p>
<p>Rank : ${analysis.rank}</p>

</div>

`

}