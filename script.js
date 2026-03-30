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
            <button onclick="eliminar(${index})">Eliminar</button>
        </li>`;
    });

    document.getElementById("totalUsuarios").textContent = usuarios.length;
}

function eliminar(index) {
    usuarios.splice(index,1);
    mostrar();
}

mostrar();