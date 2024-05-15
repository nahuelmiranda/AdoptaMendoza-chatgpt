const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Escuchar el evento de clic en el botón de alternar modo
themeToggle.addEventListener('click', toggleTheme);

// Función para alternar entre el modo oscuro y el modo claro
function toggleTheme() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? 'Modo claro' : 'Modo oscuro';

    // Guardar la preferencia de modo en el almacenamiento local
    localStorage.setItem('darkMode', isDarkMode);
}

// Cargar la preferencia de modo desde el almacenamiento local al cargar la página
function loadThemePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    body.classList.toggle('dark-mode', isDarkMode);
    themeToggle.textContent = isDarkMode ? 'Modo claro' : 'Modo oscuro';
}

// Cargar la preferencia de modo al cargar la página
loadThemePreference();