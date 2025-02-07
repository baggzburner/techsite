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


// Function to initialize particles if the screen width is large enough
function loadParticles() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth > 768) {  // Enable particles only for devices wider than 768px
      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#ffffff" },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.5 },
          "size": { "value": 3 },
          "move": { "speed": 3, "direction": "none", "out_mode": "out" }
        }
      });
    } else {
      document.getElementById("particles-js").style.display = "none"; // Hide particles container
    }
  }
  
  // Load particles when the page is ready
  window.onload = loadParticles;
  window.onresize = loadParticles;  // Reload on screen resize
  