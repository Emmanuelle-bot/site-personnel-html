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

