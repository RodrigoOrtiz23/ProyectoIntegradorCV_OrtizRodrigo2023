const foto = document.getElementById('foto');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');

const Cargadeperfil = async () => {
    try {
        const url='https://randomuser.me/api/';
        const repuesta = await fetch(url);
        const { results } = await repuesta.json();
        const datos = results[0];
        console.log(datos);
        foto.src = datos.picture.medium;
        nombre.textContent = datos.name.first;
        apellido.textContent = datos.name.last;

    } catch (error) {
        console.log(error);
    }
}

Cargadeperfil();