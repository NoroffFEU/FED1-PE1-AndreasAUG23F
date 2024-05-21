// menu.js

// Legg til dette i din eksisterende JavaScript-fil, vanligvis index.js

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const overlay = document.querySelector('.overlay');
    const navbar = document.querySelector('.navbar');

    // Legg til en klikk-lytter på hamburgerikonet
    menuIcon.addEventListener('click', function() {
        // Toggle 'active' klassen på overlay og navbar for å vise/maske dem
        overlay.classList.toggle('active');
        navbar.classList.toggle('open');
    });

    // Legg til en klikk-lytter på overlay for å skjule den når brukeren klikker utenfor navbar
    overlay.addEventListener('click', function() {
        overlay.classList.remove('active');
        navbar.classList.remove('open');
    });
});

