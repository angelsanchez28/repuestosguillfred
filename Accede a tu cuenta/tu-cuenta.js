document.getElementById("btn-iniciar-seccion").addEventListener("click", iniciarSesion);
document.getElementById("btn-register").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);


//declaracion de variables
var contenedor_login_register = document.querySelector(".container-form-register");
var formulario_login = document.querySelector(".formulario-login");
var formulario_register = document.querySelector(".formulario-register");
var container_fondo_login = document.querySelector(".container-fondo");
var container_fondo_register = document.querySelector(".container-register");

function anchoPagina(){
    if(window.innerWidth > 850){
        container_fondo_login.style.display = "block";
        container_fondo_register.style.display = "block";
    }else{
        container_fondo_register.style.display = "block";
        container_fondo_register.style.opacity = "1";
        container_fondo_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

function iniciarSesion() {

    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        container_fondo_register.style.opacity = "1";
        container_fondo_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        container_fondo_register.style.display = "block";
        container_fondo_login.style.display = "none ";
    }

}

function register() {

    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        container_fondo_register.style.opacity = "0";
        container_fondo_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        container_fondo_register.style.display = "none";
        container_fondo_login.style.display = "block";
        container_fondo_login.style.opacity = "1";
    }

}