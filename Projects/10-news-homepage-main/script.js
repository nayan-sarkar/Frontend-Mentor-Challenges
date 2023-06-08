const openMenu = document.getElementById("open-menu");
const navItem = document.querySelector("nav");
const closeMenu = document.getElementById("close-menu");


openMenu.addEventListener('click',function(){
    navItem.classList.add("navigation-mobile");
});


closeMenu.addEventListener('click',function(){
    navItem.classList.remove("navigation-mobile");
    mainEl.classList.remove("opacity");
})