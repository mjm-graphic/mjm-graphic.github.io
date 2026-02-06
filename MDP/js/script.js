function verifmdp() {
  let mdp = document.getElementById("password").value;
  mdp = mdp.trimEnd();
  mdp = mdp.toLowerCase();
  mdp = mdp.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (mdp === "matteo") {
    document.getElementById("indice").style.display = "block";
    document.getElementById("error").style.display = "none";
    document.getElementById("icon-lock").style.display = "none";
    document.getElementById("icon-unlock").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
    document.getElementById("indice").style.display = "none";
  }
}
