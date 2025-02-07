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



      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 160, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#ffffff" },
          "shape": { "type": "star" },
          "opacity": { "value": 0.5 },
          "size": { "value": 3 },
          "move": { "speed": 3, "direction": "none", "out_mode": "out" }
        }
      });
    
  