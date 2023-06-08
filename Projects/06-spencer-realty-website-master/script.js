const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');
const contactForm = document.querySelector(".contact-form");
const sendBtn = document.getElementById("submit-btn");
const formText = document.querySelector(".form-text");
let fname,lname,email,message;

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 

sendBtn.addEventListener("click",function(e){
    e.preventDefault();
    const FormD = new FormData(contactForm);
    fname = FormD.get("fname");
    lname = FormD.get("lname");
    email = FormD.get("email");
    message = FormD.get("message");
    if(FormD.get("fname")){
        formText.textContent="";
        formText.innerHTML=`<p>Thank you <strong>${fname} ${lname}</strong> we will contact you on <strong>${email}</strong></p>`;
    }
    
})

