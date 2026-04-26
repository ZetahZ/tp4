const contenedor = document.getElementById('puchamon-container');
const inputBusqueda = document.getElementById('buscador');
let listaPuchamones = [];

const cargarPuchamones = async () => {
    contenedor.innerHTML = '<p class="loading">Invocando Puchamones...</p>';
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=63');
        if (!res.ok) throw new Error('Error al conectar con la base de datos');
        const datos = await res.json();
        
        const promesas = datos.results.map(async (p) => {
            const detalle = await fetch(p.url);
            return await detalle.json();
        });

        listaPuchamones = await Promise.all(promesas);
        renderizar(listaPuchamones);
    } catch (error) {
        contenedor.innerHTML = `<div class="error-container">Error: ${error.message}</div>`;
    }
};

const renderizar = (lista) => {
    if (lista.length === 0) {
        contenedor.innerHTML = '<div class="loading">No se encontraron Puchamones 🔍</div>';
        return;
    }
    contenedor.innerHTML = lista.map(p => `
        <div class="card">
            <img src="${p.sprites.front_default}" alt="${p.name}">
            <h3>${p.name.toUpperCase()}</h3>
            <p>Pucha-ID: #${p.id}</p>
            <p>Tipo: ${p.types[0].type.name}</p>
        </div>
    `).join('');
};

inputBusqueda.addEventListener('input', () => {
    const texto = inputBusqueda.value.toLowerCase().trim();
    if (texto.length >= 3) {
        const filtrados = listaPuchamones.filter(p => p.name.includes(texto));
        renderizar(filtrados);
    } else if (texto.length === 0) {
        renderizar(listaPuchamones);
    }
});

cargarPuchamones();