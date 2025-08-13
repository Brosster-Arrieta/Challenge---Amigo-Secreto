let amigosIngresados = [];
//Array de nombres de amigos ingresados. Pensado para no sortear 2 veces el mismo amigo secreto.

let amigosRestantes = [];

const listadoDeAmigos = document.getElementById("listaAmigos");
//Referencia al elemento HTML donde se mostrará la lista de amigos

//El siguiente codigo es para agregar amigos a la lista
function agregarAmigo() {
  const nombreAmigo = document.getElementById("amigo").value.trim(); //Obtener el nombre del amigo, sacando el los espacios al final e inicio

  if (nombreAmigo === "") { //Si el nombre esta vacio
    alert("Por favor, ingresa un nombre válido."); //alerta
  } else if (amigosIngresados.includes(nombreAmigo)) { // Si el nombre ya esta en la lista
    alert("Ese nombre ya está en la lista."); // alerta
    limpiarEntrada(); // limpiar el campo de texto
  } else {
    amigosIngresados.push(nombreAmigo); // Sino, push el nombre al Array
    mostrarListaAmigos(); //Actualizar lista a mostrar
    limpiarEntrada(); // Limpiar el campo de texto
  }
}

//El siguiente codigo muestra la lista completa de amigos en el elemento HTML
function mostrarListaAmigos() {
  listadoDeAmigos.innerHTML = ""; //Limpiar la lista actual
  for (let i = 0; i < amigosIngresados.length; i++) { //Recorrer el array de amigos ingresados. Desde donde empieza. Que el bucle se repita mientra sea menor al total. Despues de cada vuelta el i aumenta en 1.
    const li = document.createElement("li"); //Crear un nuevo elemento de lista
    li.textContent = amigosIngresados[i]; //Asignar el nombre del amigo al elemento de lista
    listadoDeAmigos.appendChild(li); //Agregar el elemento de lista al listado de amigos
  }
}

//El siguiente codigo es para limpiar el texto del cuadrado de entrada
function limpiarEntrada() {
  document.getElementById("amigo").value = ""; //Limpiar el campo de entrada
}


function sortearAmigo() { //Funcion Sortear Amigos
  if (amigosIngresados.length === 0) { //Si el array de amigos esta vacio
    alert("Por favor añade un nombre para realizar el sorteo."); //Mostrar mensaje de alerta
    return; //Detener la funcion si la lista esta vacia
  }

  //Si ya sorteamos todos los amigos, reiniciar el array de restantes
    if (amigosRestantes.length === 0) {
        amigosRestantes = [...amigosIngresados]; //Copiar el array de amigos ingresados a amigos restantes
    }

  const indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length); //Indice aleatoria entre 0 y la longitud del array
  const amigoSeleccionado = amigosRestantes[indiceAleatorio]; //Amigo seleccionado aleatoriamente

  // Eliminar el amigo sorteado del array de restantes.
  //*Activar para evitar repetir amigos en el sorteo
  amigosRestantes.splice(indiceAleatorio, 1);

  alert("El amigo secreto seleccionado es: " + amigoSeleccionado);
  //*Activar para reiniciar el sorteo desde 0, una vez este seleccionado un amigo
  //reiniciarLista();
}

// Función para reiniciar el juego: limpiar array, limpiar lista y limpiar input
// Esta idea es interesante a incorporar, pero habria que incoporar un boton para poder reiniciar el juego en el HTML. Lo otro seria incoporarlo al obtener el nombre seleccionado, pero me parece igual no muy practico, considerando sebe de reescribir los nombres.
function reiniciarLista() {
  amigosIngresados = [];        // Vaciar el array de amigos
  listadoDeAmigos.innerHTML = ""; // Limpiar visualmente la lista
  limpiarEntrada();           // Limpiar campo de texto
}

