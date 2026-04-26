# Trabajo Práctico Integrador (Unidad 2)

**Estudiante:** Fabrizio Mejia  
**Tecnologías:** HTML5, CSS3 (Variables, Grid, Flexbox), JavaScript ES6+ (Fetch API, Async/Await)

## Descripción del Proyecto
Este proyecto es una mini-aplicación web que demuestra habilidades de manipulación del DOM, consumo de APIs externas y gestión de la lógica.

## Páginas y Funcionalidades

### 1. Sistema de Filtrado de Productos (`productos.html`)
Un catálogo interactivo de piezas de impresión 3D que permite:
- Filtrado por categorías mediante `.filter()`.
- Búsqueda dinámica por nombre mientras se escribe.
- Ajuste de rango de precio máximo.
- Filtro de disponibilidad (stock).

### 2. Lista de Tareas Interactiva (`todo.html`)
Aplicación de gestión de tareas (To-Do List) con:
- Validación para evitar tareas vacías.
- Contador dinámico de tareas pendientes.
- Funcionalidad de marcar tareas como completadas (tachado).
- Eliminación de tareas individuales.

### 3. Puchadex Dinámica (`api-demo.html`)
Consumo de la **PokéAPI** para mostrar una lista de "Pokemones tambien llamados Puchamones ":
- Carga de 63 entidades.
- Manejo de estados: "Cargando...", error de red y resultados vacíos.
- Buscador dinámico con filtrado local (mínimo 3 caracteres).

## Instrucciones de Uso
1. Clonar este repositorio.
2. Abrir la carpeta raíz en VS Code.
3. Utilizar la extensión **Live Server** para abrir cualquiera de las páginas `.html`.
4. Para la búsqueda de Puchamones, escribir al menos 3 caracteres en el buscador.