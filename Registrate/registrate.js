

// Selección de elementos HTML
document.getElementById("btn-iniciar-seccion").addEventListener("click", iniciarSesion);
document.getElementById("btn-register").addEventListener("click", register);

var contenedor_login_register = document.querySelector(".container-form-register");
var formulario_login = document.querySelector(".formulario-login");
var formulario_register = document.querySelector(".formulario-register");
var container_fondo_login = document.querySelector(".container-fondo");
var container_fondo_register = document.querySelector(".container-register");

// Configuración inicial al cargar la página
formulario_register.style.display = "block";
formulario_login.style.display = "none";
contenedor_login_register.style.left = "410px"; // Ajustar la posición para que coincida con el formulario de registro
container_fondo_register.style.opacity = "1"; // Configuración inicial de opacidad (si se requiere)
container_fondo_login.style.opacity = "1";

// Función para mostrar el formulario de inicio de sesión
function iniciarSesion() {
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    container_fondo_register.style.opacity = "1";
    container_fondo_login.style.opacity = "1";
}

// Función para mostrar el formulario de registro
function register() {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    container_fondo_register.style.opacity = "1";
    container_fondo_login.style.opacity = "1";
}



// Captura del formulario de registro y almacenamiento en localStorage
const formularioRegistro = document.querySelector(".formulario-register");

formularioRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombreCompleto").value.trim();
    const correo = document.getElementById("correoRegistro").value.trim();
    const usuario = document.getElementById("nombreUsuario").value.trim();
    const contraseña = document.getElementById("contraseñaRegistro").value.trim();

    const mensajeExito = document.getElementById("mensajeExito");

    if (nombre && correo && usuario && contraseña) {
        // Recuperar usuarios existentes o crear arreglo nuevo
        const usuariosGuardados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

        // Verificar si ya existe ese usuario o correo
        const existe = usuariosGuardados.some(u => u.usuario === usuario || u.correo === correo);
        if (existe) {
            mensajeExito.textContent = "Ese usuario o correo ya está registrado.";
            mensajeExito.style.color = "crimson";
            mensajeExito.style.display = "block";
            return;
        }

        const nuevoUsuario = {
            nombre,
            correo,
            usuario,
            contraseña,
            imagenPerfil: ""
        };

        usuariosGuardados.push(nuevoUsuario);
        localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosGuardados));

        mensajeExito.textContent = "¡Su registro ha sido exitoso!";
        mensajeExito.style.color = "#470606";
        mensajeExito.style.display = "block";

        // Limpia el formulario
        formularioRegistro.reset();
    } else {
        mensajeExito.textContent = "Por favor, complete todos los campos.";
        mensajeExito.style.color = "crimson";
        mensajeExito.style.display = "block";
    }
});


const formularioLogin = document.querySelector(".formulario-login");

formularioLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const campoUsuario = document.getElementById("usuarioLogin").value.trim();
    const campoPassword = document.getElementById("contraseñaLogin").value.trim();

    const mensajeLogin = document.getElementById("mensajeLogin");

    const usuariosGuardados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || [];

    const usuarioEncontrado = usuariosGuardados.find(u =>
        (u.usuario === campoUsuario || u.correo === campoUsuario) &&
        u.contraseña === campoPassword
    );

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));
        window.location.href = "/Index.html"; // ajusta si el path es diferente
    } else {
        mensajeLogin.textContent = "Usuario o contraseña incorrectos.";
        mensajeLogin.style.display = "block";
    }
});
