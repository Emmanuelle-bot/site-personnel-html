// ===== PARALLAXE & SOURIS =====
const parallaxItems = document.querySelectorAll(".intro [data-speed]");
const mouse = { x: 0, y: 0 };

document.addEventListener("mousemove", e => {
  mouse.x = e.clientX - window.innerWidth / 2;
  mouse.y = e.clientY - window.innerHeight / 2;

  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;

  parallaxItems.forEach(item => {
    const speed = item.dataset.speed || 1;
    item.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

// ===== MACHINE À ÉCRIRE =====
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
  const subtitle = document.querySelector(".intro-subtitle");
  subtitle.textContent = "";
  setTimeout(typeWriter, 600);
};

// ===== PARTICULES =====
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
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.beginPath();
    ctx.arc(
      this.x + mouse.x * 0.02,
      this.y + mouse.y * 0.02,
      this.size,
      0,
      Math.PI * 2
    );
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
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== INTRO CINÉMATIQUE =====
document.body.classList.add("locked");

document.querySelector(".intro-btn").addEventListener("click", e => {
  e.preventDefault();

  const intro = document.querySelector(".intro");
  const contenu = document.getElementById("contenu");

  intro.classList.add("cinematic-out");

  setTimeout(() => {
    intro.classList.add("hide");
    document.body.classList.remove("locked");
    contenu.scrollIntoView({ behavior: "smooth" });
  }, 1000);
});

// ===== STORY AU SCROLL =====
const storyLines = document.querySelectorAll(".story-line");

function revealStory() {
  storyLines.forEach(line => {
    if (line.getBoundingClientRect().top < window.innerHeight - 100) {
      line.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealStory);
revealStory();

// ===== SKILLS =====
const skills = document.querySelectorAll(".progress");

function animateSkills() {
  skills.forEach(skill => {
    if (skill.getBoundingClientRect().top < window.innerHeight - 100) {
      skill.style.width = skill.dataset.level;
    }
  });
}
window.addEventListener("scroll", animateSkills);
animateSkills();

// ===== DARK MODE =====
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


