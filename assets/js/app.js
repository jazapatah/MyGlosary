// Obtengo el control del button mediante el id
let mybutton = document.getElementById('scrollTop');

//Defino parámetros para que aprezca el button luego de scroll mayor a cierto valor
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}
//Ahora creo la función para que el button me lleve al top de la página
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}