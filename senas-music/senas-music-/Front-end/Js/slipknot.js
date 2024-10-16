const pauseButton = document.getElementById('pauseButton');
const musica = document.getElementById('musica');
const musica2 = document.getElementById('musica2');
const foto = document.querySelector('.foto1'); 
const foto2 = document.querySelector('.foto2'); 

// Variável para controlar qual música está tocando
let currentMusic = null;

// Evento de clique para a primeira imagem
foto.addEventListener('click', () => {
    if (currentMusic === musica2) {
        musica2.pause(); // Para a música 2 se estiver tocando
    }
    musica.play();
    currentMusic = musica; // Atualiza a música atual
    pauseButton.textContent = "Pausar"; // Muda o texto para "Pausar"
});

// Evento de clique para a nova imagem
foto2.addEventListener('click', () => {
    if (currentMusic === musica) {
        musica.pause(); // Para a música 1 se estiver tocando
    }
    musica2.play();
    currentMusic = musica2; // Atualiza a música atual
    pauseButton.textContent = "Pausar"; // Muda o texto para "Pausar"
});

// Evento de clique no botão Pausar/Iniciar
pauseButton.addEventListener('click', () => {
    if (currentMusic) {
        if (currentMusic.paused) {
            currentMusic.play(); // Retoma a música
            pauseButton.textContent = "Pausar"; // Muda o texto para "Pausar"
        } else {
            currentMusic.pause(); // Pausa a música
            pauseButton.textContent = "Iniciar"; // Muda o texto para "Iniciar"
        }
    }
});
    