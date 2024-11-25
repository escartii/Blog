// Función para resaltar el elemento seleccionado
function highlightItem(item) {
    document.querySelectorAll('.aside-item, .aside-subitem').forEach(el => {
        el.classList.remove('highlighted');
    });
    item.classList.add('highlighted');
}

// Manejo de clics en los elementos del menú lateral
document.querySelectorAll('.aside-item').forEach(item => {
    // Verificar si el elemento tiene un submenú
    if (item.querySelector('.submenu')) {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            // Toggle del submenú
            item.classList.toggle('open');
            // Resaltar el elemento
            highlightItem(item);
            // Cargar contenido si corresponde
            cargarContenido(item.id);
        });
    } else {
        // Evento para los elementos sin submenú
        item.addEventListener('click', (e) => {
            highlightItem(item);
            cargarContenido(item.id);
        });
    }
});

// Manejo de clics en los subitems del menú desplegable
document.querySelectorAll('.aside-subitem').forEach(subitem => {
    subitem.addEventListener('click', (e) => {
        e.stopPropagation();
        highlightItem(subitem);
        cargarContenido(subitem.id);
    });
});

// Función para cargar el contenido según el ID
function cargarContenido(id) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Limpiar el contenido anterior
    let codeSnippet;

    switch (id) {
        case 'introduccion':
            codeSnippet = `<h2 class='text-3xl highlighted'>Introducción a JavaScript</h2>
            <p class='mt-2'>JavaScript es un lenguaje de programación que permite crear sitios web dinámicos e interactivos. Este apartado cubre conceptos básicos sobre el lenguaje y su sintaxis.</p>`;
            break;
        case 'tipos-datos':
            codeSnippet = `<h2 class='text-3xl highlighted'>Tipos de Datos</h2>
            <p class='mt-2'>JavaScript soporta distintos tipos de datos como <span class='highlighted'>Number</span>, <span class='highlighted'>String</span>, <span class='highlighted'>Boolean</span>, etc.</p>`;
            break;
        case 'arrays':
            codeSnippet = `<h2 class='text-3xl highlighted'>Arrays</h2>
            <p class='mt-2'>Los <span class='highlighted'>arrays</span> son colecciones de elementos que se almacenan secuencialmente. Puedes trabajar con ellos usando diferentes métodos y funciones.</p>`;
            break;
        case 'que-es-array':
            codeSnippet = `<h2 class='text-3xl highlighted'>¿Qué es un array?</h2>
            <p class='mt-2'>Un <span class='highlighted'>array</span> es una estructura de datos que permite almacenar múltiples valores en una sola variable. Cada valor en un array tiene un índice asociado que comienza desde cero.</p>`;
            break;
        case 'metodos-array':
            codeSnippet = `<h2 class='text-3xl highlighted'>Métodos de Arrays</h2>
            <p class='mt-2'>JavaScript proporciona varios métodos para manipular arrays, como <span class='highlighted'>push</span>, <span class='highlighted'>pop</span>, <span class='highlighted'>shift</span>, <span class='highlighted'>unshift</span>, entre otros.</p>`;
            break;
        case 'funciones':
            codeSnippet = `<h2 class='text-3xl highlighted'>Funciones</h2>
            <p class='mt-2'>Las <span class='highlighted'>funciones</span> son bloques reutilizables de código que se ejecutan cuando son llamadas. Pueden recibir parámetros y devolver valores.</p>`;
            break;
        case 'declarar-funcion':
            codeSnippet = `<h2 class='text-3xl highlighted'>Declarar una Función</h2>
            <p class='mt-2'>Puedes declarar una función usando la sintaxis <span class='highlighted'>function nombreFuncion() { /* código */ }</span>.</p>`;
            break;
        case 'funciones-arrow':
            codeSnippet = `<h2 class='text-3xl highlighted'>Funciones Flecha</h2>
            <p class='mt-2'>Las funciones flecha son una sintaxis más compacta para escribir funciones en JavaScript. Ejemplo: <span class='highlighted'>const suma = (a, b) => a + b;</span></p>`;
            break;
        case 'objetos':
            codeSnippet = `<h2 class='text-3xl highlighted'>Objetos</h2>
            <p class='mt-2'>Un <span class='highlighted'>objeto</span> en JavaScript es una entidad que tiene propiedades y métodos. Es la manera de organizar datos de forma estructurada.</p>`;
            break;
        default:
            codeSnippet = `<h2 class='text-3xl highlighted'>Contenido no encontrado</h2>
            <p class='mt-2'>El contenido que buscas no está disponible.</p>`;
    }

    content.innerHTML = codeSnippet;
}