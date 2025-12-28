const usuarios = [
    { correo: "admin@cine.com", password: "1234", rol: "admin" },
    { correo: "cliente@cine.com", password: "1234", rol: "cliente" }
];

function login() {
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    const usuario = usuarios.find(
        u => u.correo === correo && u.password === password
    );

    if (usuario) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href = "index.html";
    } else {
        document.getElementById("mensaje").textContent = "Credenciales incorrectas";
    }
}