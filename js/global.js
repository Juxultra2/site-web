//console.log ('test');

// Menu mobile
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

// Porfolio filtre

function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');

    const resetActiveLinks = () => {
        tabs.forEach(elem => {
        elem.classList.remove('active');
        })
    }

    const showProjets = (elem) => {
        //console.log(elem);
        projets.forEach(projet => {

        let filter = projet.getAttribute('data-category');

        if (filter !== elem){
            projet.parentNode.classList.add('hide');
        } else {
            projet.parentNode.classList.remove('hide');
        }

        if (elem === 'all') {
            projet.parentNode.classList.remove('hide');
            return
            }
        });
    }
    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            showProjets(filter)
            resetActiveLinks();
            elem.classList.add('active');
        });
    })
}

tabsFilters()



// effets