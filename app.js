let amigos = []; // Array para almacenar los nombres

// Función para agregar amigos
function agregarAmigo() {
    const input = document.querySelector('#amigo');
    const lista = document.querySelector('#listaAmigos');
    const nombre = input.value.trim(); // Quita espacios en blanco al inicio y al final

    if (nombre !== "") {
        amigos.push(nombre); // Agrega el nombre al array
        input.value = ""; // Limpia el campo de entrada
        actualizarLista(lista); // Actualiza la lista en el DOM
    } else {
        alert("Por favor, ingrese un nombre válido."); // Muestra alerta si el campo está vacío
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarLista(lista) {
    lista.innerHTML = ""; // Limpia la lista actual
    amigos.forEach((amigo, index) => {
        // Crea un elemento <li> para cada amigo
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(listItem); // Añade el <li> a la lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ""; // Limpia el resultado anterior

    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para sortear.");
        return;
    }

    const participantes = [...amigos]; // Crea una copia del array
    const sorteados = [];

    while (participantes.length > 0) {
        // Selecciona un participante al azar
        const randomIndex = Math.floor(Math.random() * participantes.length);
        const sorteado = participantes.splice(randomIndex, 1)[0];
        sorteados.push(sorteado);
    }

    // Muestra los resultados del sorteo
    for (let i = 0; i < sorteados.length; i++) {
        const amigo = sorteados[i];
        const siguiente = sorteados[(i + 1) % sorteados.length];
        const resultadoItem = document.createElement('li');
        resultadoItem.textContent = `${amigo} será el amigo secreto de ${siguiente}`;
        resultado.appendChild(resultadoItem);
    }
}
