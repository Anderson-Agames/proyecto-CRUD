let usuarios = [];

function agregar() {
    const nombre = document.getElementById("nombre").value.trim();
  
    if(nombre.length < 3){
        alert("El nombre debe tener al menos 3 caracteres");
        return;
    }

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

    document.getElementById("totalUsuarios").textContent = usuarios.length;
}

function eliminar(index) {
    usuarios.splice(index,1);
    mostrar();
}

function actualizar(index) {
    const nuevoNombre = prompt("Nuevo nombre:");

    if(nuevoNombre !== null && nuevoNombre.trim() !== ""){
        usuarios[index] = nuevoNombre.trim();
        mostrar();
    }
}

mostrar();