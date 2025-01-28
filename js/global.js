console.log ('test');

function menuMobile() {
    const burger = document.querySelector('.burger'); // Sélecteur pour le bouton burger
    const body = document.querySelector('body'); // Sélecteur pour l'élément qui gère la classe show-nav
    const links = document.querySelectorAll('.navbar a'); // Les ancres du menu

    // Ajout ou suppression de la classe show-nav au clic sur le burger
    burger.addEventListener('click', () => {
        body.classList.toggle('show-nav');
    });

    // Suppression de la classe show-nav au clic sur un lien
    links.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('show-nav');
        });
    });
}

// Appel de la fonction
menuMobile();

function smoothScroll() {
    const header = document.querySelector('header'); // Sélectionne ton header sticky
    const headerHeight = header.offsetHeight; // Récupère la hauteur du header
    const links = document.querySelectorAll('.navbar a'); // Sélectionne toutes les ancres de navigation

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Empêche le comportement par défaut
            const targetId = link.getAttribute('href'); // Récupère l'ID de la section cible
            const targetSection = document.querySelector(targetId); // Sélectionne la section cible

            // Calcule la position de défilement en soustrayant la hauteur du header
            const targetPosition = targetSection.offsetTop - headerHeight;

            // Défile vers la position cible avec un effet fluide
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

smoothScroll();