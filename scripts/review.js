let count = Number(localStorage.getItem("count")) || 0;
//busca si ya había un contador guardado, 
// Number() lo convierte en número.
//, || 0 significa: si no existe, empezá en 0

count++; // suma 1

localStorage.setItem("count", count); // agrega la cuenta al localstorage
document.querySelector("#p").textContent =
    `You have submitted ${count} reviews.`;