document.addEventListener("DOMContentLoaded", () => {
    cargarNoticias();
    document.getElementById("startButton").addEventListener("click", iniciarJuego);
});

function cargarNoticias() {
    fetch("https://newsapi.org/v2/everything?q=tecnología&apiKey=YOUR_API_KEY")
        .then(response => response.json())
        .then(data => {
            const noticiasContenedor = document.getElementById("noticias-contenido");
            data.articles.forEach(article => {
                const div = document.createElement("div");
                div.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p>`;
                noticiasContenedor.appendChild(div);
            });
        })
        .catch(error => console.error("Error al cargar noticias:", error));
}

let puntuacion = 0;
let juegoActivo = false;
const canvas = document.getElementById("gameCanvas");
const contexto = canvas.getContext("2d");
const sprite = new Image();
sprite.src = "assets/game-sprite.png";

function iniciarJuego() {
    if (juegoActivo) return;
    juegoActivo = true;
    puntuacion = 0;
    document.getElementById("puntuacion").textContent = "Puntuación: " + puntuacion;
    dibujar();
}

function dibujar() {
    if (!juegoActivo) return;
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    // Lógica del juego: dibujar el sprite, incrementar puntuación, etc.
    // Aquí puedes agregar más lógica y niveles
    puntuacion++;
    document.getElementById("puntuacion").textContent = "Puntuación: " + puntuacion;
    
    // Animación
    requestAnimationFrame(dibujar);
}

// Detener el juego y mostrar el mensaje de finalización al perder
function terminarJuego() {
    juegoActivo = false;
    alert("Juego Terminado. Tu puntuación final es: " + puntuacion);
}
