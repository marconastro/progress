let currentSlide = 0;
let autoSlideInterval;

const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

// Cambia slide con frecce
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlide();
    resetAutoSlide(); // Resetta il timer automatico quando si usa una freccia
}

// Aggiorna la posizione della slide corrente
function updateSlide() {
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Scorrimento automatico
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1); // Passa alla prossima slide
    }, 3000); // Cambia slide ogni 3 secondi
}

// Resetta il timer automatico
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

// Inizializza lo scorrimento automatico
autoSlide();

<script>
        // Funzione per nascondere/mostrare la tabella
        function mostraTabella(idTabella) {
            const table = document.getElementById(idTabella);
            // Se la tabella è visibile, la nasconde, altrimenti la mostra
            if (table.style.display === "none") {
                table.style.display = "table";
            } else {
                table.style.display = "none";
            }
        }
    </script>


