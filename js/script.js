const div = document.querySelector("div");

function circulo(evento) {
  const x = evento.clientX;
  const y = evento.clientY;
  div.style.left = x + "px"; 
  div.style.top = y + "px";
}
window.addEventListener("mousemove", circulo);

