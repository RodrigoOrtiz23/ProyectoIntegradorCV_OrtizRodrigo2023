const foto = document.getElementById('foto');
const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const direccion = document.getElementById('direccion');

const Cargadeperfil = async () => {
    try {
        const url='https://randomuser.me/api/';
        const repuesta = await fetch(url);
        const { results } = await repuesta.json();
        const datos = results[0];
        console.log(datos);
        foto.src = datos.picture.medium;
        nombre.textContent = datos.name.first+" "+datos.name.last;
        telefono.textContent = datos.cell;
        email.textContent = datos.email;
        direccion.textContent = datos.location.country+", "+datos.location.city;

    } catch (error) {
        console.log(error);
    }
}

Cargadeperfil();