import { barcelona,roma,paris,londres } from './ciudades.js';

let enlaces = document.querySelectorAll('a');

let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemnto = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(event) {
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('activo');

        });


        this.classList.add('activo');

        let contenido = obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemnto.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;

    });



});


function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];

}