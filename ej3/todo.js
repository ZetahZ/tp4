const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const lista = document.getElementById('todo-list');
const contadorElemento = document.getElementById('contador');

let contadorPendientes = 0;

const actualizarContador = () => {
    contadorElemento.innerText = contadorPendientes;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const textoTarea = input.value.trim();

    if (textoTarea === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // (a) 
    const li = document.createElement('li');
    
    const spanTexto = document.createElement('span');
    spanTexto.innerText = textoTarea;
    spanTexto.style.cursor = "pointer";
    spanTexto.style.flex = "1";

    // (b) 
    spanTexto.addEventListener('click', () => {
        li.classList.toggle('completada');
    });

    // (c) 
    const btnEliminar = document.createElement('button');
    btnEliminar.innerText = "×";
    btnEliminar.className = "btn-borrar";
    btnEliminar.onclick = () => {
        li.remove();
        contadorPendientes--;
        actualizarContador();
    };

    li.appendChild(spanTexto);
    li.appendChild(btnEliminar);
    
    lista.appendChild(li);


    contadorPendientes++;
    actualizarContador();

    input.value = "";
    input.focus();
});