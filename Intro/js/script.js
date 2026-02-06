const btn = document.getElementById("btnIndice");
const indice = document.getElementById("indice");

let timerMasquage = null;

btn.addEventListener("click", () => {
  indice.style.display = "block";
  btn.disabled = true;
  btn.textContent = "Indice affiché (10s)…";

  setTimeout(() => {
    indice.style.display = "none";
    btn.disabled = false;
    btn.textContent = "Dévoiler le premier indice";
  }, 10000);
});