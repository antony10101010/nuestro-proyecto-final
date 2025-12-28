const peliculas = [
    { id: 1, titulo: "Avengers", hora: "18:00" },
    { id: 2, titulo: "Batman", hora: "20:00" }
];

const contenedor = document.getElementById("lista-peliculas");
if (contenedor) {
    peliculas.forEach(p => {
        const div = document.createElement("div");
        div.className = "pelicula";
        div.innerHTML = `
            <h3>${p.titulo}</h3>
            <p>Hora: ${p.hora}</p>
            <button onclick="reservar(${p.id})">Reservar</button>
        `;
        contenedor.appendChild(div);
    });
}

function reservar(id) {
    const pelicula = peliculas.find(p => p.id === id);
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(pelicula);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    alert("Reserva guardada");
}

const lista = document.getElementById("lista-reservas");
if (lista) {
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.forEach(r => {
        const li = document.createElement("li");
        li.textContent = `${r.titulo} - ${r.hora}`;
        lista.appendChild(li);
    });
}