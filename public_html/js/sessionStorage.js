var d = document;

function crearSesion(evento)
{
    evento.preventDefault();
    
    var user = d.querySelector('#user').value,
        pass = d.querySelector('#pass').value;

    if(user === 'maria' && pass === 'javascript')
    {
        sessionStorage.setItem('nombre', user);
        window.location.href = 'protegido.html';
    }
    
    else
    {
        alert('Datos incorrectos');
        evento.target.reset();
    }
}

function iniciarSesion()
{
    var login = d.querySelector('#login');
    login.onsubmit = crearSesion;
}

window.onload = iniciarSesion;