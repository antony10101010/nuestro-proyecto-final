const sala = document.getElementById("sala");
let asientoSeleccionado = null;

for (let i = 1; i <= 20; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = () => seleccionarAsiento(i);
    sala.appendChild(btn);
}

function seleccionarAsiento(numero) {
    asientoSeleccionado = numero;
    alert("Asiento seleccionado: " + numero);
}

function confirmarAsiento() {
    if (!asientoSeleccionado) {
        alert("Seleccione un asiento");
        return;
    }

    localStorage.setItem("asiento", asientoSeleccionado);
    window.location.href = "reservas.html";
}