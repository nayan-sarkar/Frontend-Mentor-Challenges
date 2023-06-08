import {projects} from  "./data.js";

const containerEl = document.getElementById("container");

let projectList = "";

for(let project of projects){
    projectList+=`
    <div class="card">
                <img src="${project.projectImage}" class="image">
                <div class="text">
                    <h2>${project.projectTitle}</h2>
                    <div class="icons">
                        <a href="${project["github-url"]}" target="_blank"><img src="icons/github.svg"></a>
                        <a href="${project["live-url"]}" target="_blank"><img src="icons/link.svg"></a>
                    </div>
                </div>
    </div>
    `;
}

containerEl.innerHTML=projectList;