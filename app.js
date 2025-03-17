// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo para almacenar los nombres ingresados
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array y agregar cada amigo como un elemento <li>
    for (let amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    // Generar un índice aleatorio y obtener el nombre
    const indice = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indice];

    // Mostrar el resultado en pantalla
    document.getElementById("resultado").innerHTML = `${nombreSorteado} es el amigo secreto`;
}

