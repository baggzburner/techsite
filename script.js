document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("mobile");
        navLinks.classList.toggle("active");
    });
});

document.getElementById('service').addEventListener('click',(e)=>{
    window.location.href = 'services.html'
})

document.getElementById('contact').addEventListener('click',(e)=>{
    window.location.href = 'contact.html'
})