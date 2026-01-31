// EFFET MACHINE À ÉCRIRE
const text = "Développeuse Web Junior";
const speed = 80;
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.querySelector(".intro-subtitle").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = () => {
  document.querySelector(".intro-subtitle").textContent = "";
  setTimeout(typeWriter, 600);
};
document.querySelector(".intro-btn").addEventListener("click", function () {
  const intro = document.querySelector(".intro");
  intro.classList.add("hide");
});
// PARTICULES ANIMÉES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particlesArray = [];
const numberOfParticles = 80;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = (Math.random() - 0.5) * 0.6;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}
initParticles();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animateParticles);
}

animateParticles();
// BLOQUER LE SCROLL AU DÉMARRAGE
document.body.classList.add("locked");

document.querySelector(".intro-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const intro = document.querySelector(".intro");
  const contenu = document.getElementById("contenu");

  // Lancer l’animation cinématique
  intro.classList.add("cinematic-out");

  // Après l’animation, afficher le contenu
  setTimeout(() => {
    intro.style.display = "none";
    document.body.classList.remove("locked");

    contenu.scrollIntoView({
      behavior: "smooth"
    });
  }, 1000); // durée synchro avec le CSS
});
// ANIMATION STORY AU SCROLL
const storyLines = document.querySelectorAll(".story-line");

function revealStory() {
  storyLines.forEach(line => {
    const position = line.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      line.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealStory);
revealStory();



