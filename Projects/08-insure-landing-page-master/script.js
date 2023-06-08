const bodyEl = document.querySelector("body");
const navEl = document.querySelector("nav");
const openNav = document.getElementById("open");
const closeNav = document.getElementById("close");

console.log(closeNav);

openNav.addEventListener('click',function(){
    navEl.classList.add("mobile");
    openNav.style.display = "none";
    closeNav.style.display = "block";
    bodyEl.style.position = "fixed";
})

closeNav.addEventListener('click',function(){
    navEl.classList.remove("mobile");
    openNav.style.display = "block";
    closeNav.style.display = "none";
    bodyEl.style.position = "static";
})