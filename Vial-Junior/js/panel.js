// Obtener elementos del DOM
const punto = document.getElementById('punto');
const punto1 = document.getElementById('punto1');
const punto2 = document.getElementById('punto2');
const menu = document.getElementById('menu');
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');


// Mostrar el menú al pasar el mouse por encima del punto
punto.addEventListener('mouseover', function () {
    menu.style.display = 'block';
});
punto1.addEventListener('mouseover', function () {
    menu1.style.display = 'block';
});
punto2.addEventListener('mouseover', function () {
    menu2.style.display = 'block';
});

//Ocultar el menu
punto.addEventListener('mouseout', function () {
    menu.style.display = 'none';
});
punto1.addEventListener('mouseout', function () {
    menu1.style.display = 'none';
});
punto2.addEventListener('mouseout', function () {
    menu2.style.display = 'none';
});

// Ocultar el menú al quitar el mouse del punto
menu.addEventListener('mouseleave', function () {
    menu.style.display = 'none';
});
menu1.addEventListener('mouseleave', function () {
    menu1.style.display = 'none';
});
menu2.addEventListener('mouseleave', function () {
    menu2.style.display = 'none';
});