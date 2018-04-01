var d = document;

function obtenerSesion()
{
    var nombre = sessionStorage.getItem('nombre');
    
    d.querySelector('#autenticado').innerHTML = nombre;
    
    return ( nombre === null || nombre === undefined)?window.location.href = 'session-storage.html':false;
}

d.querySelector('#logout').onclick = function(){ //función anónima
    sessionStorage.clear();
    
    window.location.href = 'session-storage.html';
};

window.onload = obtenerSesion;