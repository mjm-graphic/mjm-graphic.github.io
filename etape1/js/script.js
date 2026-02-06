let tentatives = 0;

function verifmdp() {
  let mdp = document.getElementById("password").value;

  mdp = mdp.trimEnd();
  mdp = mdp.toLowerCase();
  mdp = mdp.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (mdp === "ikea") {
    tentatives = 0; // reset si bon
    document.getElementById("indice").style.display = "block";
    document.getElementById("error").style.display = "none";
    document.getElementById("icon-lock").style.display = "none";
    document.getElementById("icon-unlock").style.display = "block";
    document.getElementById("gif").style.display = "block";
  } else {
    tentatives++;

    document.getElementById("error").style.display = "block";
    document.getElementById("indice").style.display = "none";
    document.getElementById("gif").style.display = "none";

    if (tentatives === 3) {
      alert("Indice : un très grand magasin de mobilier en 4 lettres");
      // Choisis ton comportement :
      // 1) Une seule fois -> ne rien faire
      // 2) Tous les 3 essais -> tentatives = 0;
    }
  } 
}
