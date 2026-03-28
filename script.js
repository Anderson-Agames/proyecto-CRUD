let usuarios = [];

function agregar() {
    const nombre = document.getElementById("nombre").value;

    if(nombre === "") return;

    usuarios.push(nombre);
    mostrar();
}

function mostrar() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    usuarios.forEach((user, index) => {
        lista.innerHTML += `
        <li>
            ${user}
            <button onclick="actualizar(${index})">Actualizar</button>
            <button onclick="eliminar(${index})">Eliminar</button>
        </li>`;
    });
}

function eliminar(index) {
    usuarios.splice(index,1);
    mostrar();
}

function actualizar(index) {
    const nuevoNombre = prompt("Nuevo nombre:");

    if(nuevoNombre !== null && nuevoNombre !== ""){
        usuarios[index] = nuevoNombre;
        mostrar();
    }
}