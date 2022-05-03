/* Variavéis */
var seta = document.querySelector(".seta-menu")
var nav = document.querySelector("#nav");
var logo = document.querySelector("#btn");

/* Função */
logo.addEventListener("click", function () {
  /* Estrutura condicional do menu */
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }

  /* Estrutura condicional da seta */
  if (seta.style.display === "block") {
    seta.style.display = "none";
  } else {
    seta.style.display = "block";
  }
});
