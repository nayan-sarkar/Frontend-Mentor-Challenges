import {projects} from  "./data.js";

const containerEl = document.getElementById("container");

// for(let project of projects){
//     const cardEl=document.createElement('div');
//     cardEl.classList.add("card");
//     const cardImgEl=document.createElement('img');
//     cardImgEl.classList.add("image");
//     cardImgEl.src=project.projectImage;
//     cardEl.appendChild(cardImgEl);
//     const textBoxEl = document.createElement("div");
//     textBoxEl.classList.add("text");
//     const ProjectTitleEl = document.createElement("h2");
//     ProjectTitleEl.textContent=project.projectTitle;
//     textBoxEl.appendChild(ProjectTitleEl);
//     const iconsContainerEl = document.createElement("div");
//     iconsContainerEl.classList.add("icons");
//     textBoxEl.appendChild(iconsContainerEl);

//     cardEl.appendChild(textBoxEl);
//     containerEl.appendChild(cardEl);
// }


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

containerEl.innerHTML=projectList;