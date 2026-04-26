const productos = [
    { id: 1, nombre: "Dummy 13 Articulado", precio: 2500, categoria: "Figuras", enStock: true },
    { id: 2, nombre: "Soporte de Auriculares", precio: 4500, categoria: "Accesorios", enStock: true },
    { id: 3, nombre: "Maceta Geométrica", precio: 1200, categoria: "Hogar", enStock: false },
    { id: 4, nombre: "Llavero Spotify", precio: 800, categoria: "Accesorios", enStock: true },
    { id: 5, nombre: "Puchamon de Colección", precio: 7500, categoria: "Figuras", enStock: true },
    { id: 6, nombre: "Cortante de Galletas", precio: 600, categoria: "Hogar", enStock: true },
    { id: 7, nombre: "Organizador de Cables", precio: 1500, categoria: "Accesorios", enStock: false },
    { id: 8, nombre: "Lámpara Litofanía", precio: 9000, categoria: "Hogar", enStock: true }
];

const grid = document.getElementById('productos-grid');
const inputs = document.querySelectorAll('.controles input, .controles select');

const filtrar = () => {
    const nombre = document.getElementById('filtro-nombre').value.toLowerCase();
    const cat = document.getElementById('filtro-cat').value;
    const precio = document.getElementById('filtro-precio').value;
    const stock = document.getElementById('filtro-stock').checked;

    document.getElementById('val-precio').innerText = precio;

    const filtrados = productos.filter(p => {
        return p.nombre.toLowerCase().includes(nombre) &&
               (cat === 'todos' || p.categoria === cat) &&
               p.precio <= precio &&
               (!stock || p.enStock);
    });

    grid.innerHTML = filtrados.map(p => `
        <div class="card">
            <h3>${p.nombre}</h3>
            <p>Precio: $${p.precio}</p>
            <p>Categoría: ${p.categoria}</p>
            <p style="color: ${p.enStock ? 'green' : 'red'}">${p.enStock ? '● Stock' : '○ Sin Stock'}</p>
        </div>
    `).join('');
};

inputs.forEach(i => i.addEventListener('input', filtrar));
filtrar(); // Carga inicial