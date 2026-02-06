function verifmdp() {
  let mdp = document.getElementById("password").value;
  if (mdp === "oui") {
    mdp.toLowerCase()
    document.getElementById("indice").style.display = "block";
    document.getElementById("error").style.display = "none";
    document.getElementById("icon-lock").style.display = "none";
    document.getElementById("icon-unlock").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
