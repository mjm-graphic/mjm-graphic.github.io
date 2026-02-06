function verifradio() {
  const reponse = document.querySelector('input[name="reponse"]:checked');

  const indice = document.getElementById("indice");
  const error = document.getElementById("error");
  const gif = document.getElementById("gif");

  if (!reponse) {
    alert("Choisis une réponse 😉");
    return;
  }

  // ⬇️ Définis ici la bonne réponse
  if (reponse.value === "b") {
    indice.style.display = "block";
    error.style.display = "none";
    gif.style.display = "block";
  } else {

    error.style.display = "block";
    indice.style.display = "none";
    gif.style.display = "none";

  }
}