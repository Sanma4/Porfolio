document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los elementos del nav
    const navItems = document.querySelectorAll('.nav-item');

    // Añadimos un evento de clic a cada elemento
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Eliminamos la clase 'selected' de todos los elementos
            navItems.forEach(nav => nav.classList.remove('selected'));
            
            // Añadimos la clase 'selected' al elemento clicado
            this.classList.add('selected');
        });
    });
});



