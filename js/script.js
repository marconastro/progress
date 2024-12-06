// Script per il carosello
const images = document.querySelectorAll('.carousel img');
const prev = document.querySelector('.arrow.left');
const next = document.querySelector('.arrow.right');
let currentIndex = 0;

function showImage(index) {
    images[currentIndex].classList.remove('active');
    currentIndex = (index + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

prev.addEventListener('click', () => showImage(currentIndex - 1));
next.addEventListener('click', () => showImage(currentIndex + 1));

// Cambia immagine automaticamente ogni 3 secondi
setInterval(() => showImage(currentIndex + 1), 3000);

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Reset error messages
    document.getElementById('error-nome').textContent = '';
    document.getElementById('error-cognome').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-oggetto').textContent = '';
    document.getElementById('error-messaggio').textContent = '';

    let isValid = true;

    // Validazione Nome
    const nome = document.getElementById('nome').value.trim();
    if (!/^[a-zA-Z]+$/.test(nome)) {
        document.getElementById('error-nome').textContent = 'Il nome deve contenere solo lettere.';
        isValid = false;
    }

    // Validazione Cognome
    const cognome = document.getElementById('cognome').value.trim();
    if (!/^[a-zA-Z]+$/.test(cognome)) {
        document.getElementById('error-cognome').textContent = 'Il cognome deve contenere solo lettere.';
        isValid = false;
    }

    // Validazione Email
    const email = document.getElementById('email').value.trim();
    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('error-email').textContent = 'Inserisci un\'email valida.';
        isValid = false;
    }

    // Validazione Oggetto
    const oggetto = document.getElementById('oggetto').value.trim();
    if (oggetto.length !== 15) {
        document.getElementById('error-oggetto').textContent = 'L\'oggetto deve avere esattamente 15 caratteri.';
        isValid = false;
    }

    // Validazione Messaggio
    const messaggio = document.getElementById('messaggio').value.trim();
    if (messaggio.length > 60) {
        document.getElementById('error-messaggio').textContent = 'Il messaggio non può superare i 60 caratteri.';
        isValid = false;
    }

    // Invio se valido
    if (isValid) {
        alert('I dati sono stati inviati correttamente.');
        this.reset(); // Reset del form
    }
});