import {projects} from  "./data.js";

let projectList = "";

for(let project of projects){
    projectList+=`
    <div class="card">
                <img src="${project.projectImage}" class="image">
                <div class="text">
                    <h2>${project.projectTitle}</h2>
                    <div class="icons">
                        <a href="${project["live-url"]}" target="_blank"><img src="icons/link.svg"></a>
                        <a href="${project["github-url"]}" target="_blank"><img src="icons/github.svg"></a>
                    </div>
                </div>
    </div>
    `;
}

document.getElementById("container").innerHTML=projectList;