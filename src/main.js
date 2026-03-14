import {getUser,getRepos} from "./api/githubService.js"
import {analyzeDeveloper} from "./utils/analyzer.js"
import {renderProfile} from "./components/profileCard.js"
import {renderRepos} from "./components/repoList.js"
import {initWorld} from "./visualization/worldEngine.js"

const button = document.getElementById("analyze")

button.addEventListener("click", async ()=>{

const username = document.getElementById("username").value

if(!username){
alert("Enter GitHub username")
return
}

try{

const user = await getUser(username)
const repos = await getRepos(username)

const analysis = analyzeDeveloper(user,repos)

renderProfile(user,analysis)
renderRepos(repos)
initWorld(repos)

}catch(err){

console.error(err)
alert("Failed to fetch GitHub data")

}

})