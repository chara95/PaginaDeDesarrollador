document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los ítems de habilidad
    const skillItems = document.querySelectorAll('.skill-item');
    // Seleccionar el modal y sus elementos internos
    const skillModal = document.getElementById('skillModal');
    const modalSkillTitle = document.getElementById('modalSkillTitle');
    const modalSkillDescription = document.getElementById('modalSkillDescription');
    const closeButton = document.querySelector('.close-button');

    // Función para mostrar el modal
    const openModal = (title, description) => {
        modalSkillTitle.textContent = title;
        modalSkillDescription.textContent = description;
        skillModal.classList.add('show'); // Añadir clase 'show' para mostrar y animar
        document.body.style.overflow = 'hidden'; // Evita el scroll en el body cuando el modal está abierto
    };

    // Función para cerrar el modal
    const closeModal = () => {
        skillModal.classList.remove('show'); // Quitar clase 'show' para ocultar y animar
        document.body.style.overflow = ''; // Habilita el scroll en el body
    };

    // Añadir event listener a cada ítem de habilidad
    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            const skillName = item.textContent; // Obtiene el texto (nombre de la habilidad)
            // Usa .dataset.description para obtener el valor del atributo data-description
            const skillDescription = item.dataset.description;
            openModal(skillName, skillDescription);
        });
    });

    // Añadir event listener al botón de cerrar del modal
    closeButton.addEventListener('click', closeModal);

    // Añadir event listener para cerrar el modal haciendo clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === skillModal) {
            closeModal();
        }
    });

    // Opcional: Cerrar con la tecla 'Escape'
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && skillModal.classList.contains('show')) {
            closeModal();
        }
    });
});