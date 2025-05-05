const btnMapa = document.getElementById("btn-mapa");
const btnCalendario = document.getElementById("btn-calendario");
const btnRelatorios = document.getElementById("btn-relatorios");
const formDashboard = document.getElementById("formulario-dashboard");

// Redirecionamento dos cartões
btnMapa.addEventListener("click", () => {
  window.location.href = "mapa.html";
});

btnCalendario.addEventListener("click", () => {
  window.location.href = "calendario.html";
});

btnRelatorios.addEventListener("click", () => {
  window.location.href = "relatorios.html";
});

document.querySelectorAll(".menu-lateral li").forEach(item => {
  item.addEventListener("click", () => {
    if (item.textContent.trim() === "Dashboard") {
      formDashboard.style.display = "block";
    } else {
      formDashboard.style.display = "none";
    }
  });
});
