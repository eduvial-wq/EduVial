document.querySelectorAll('.carta').forEach(carta => {
    const questionText = carta.getAttribute('data-question');
    const correctAnswer = carta.getAttribute('data-answer');

    carta.addEventListener('mouseenter', () => {
        const back = carta.querySelector('.carta-back');
        back.querySelector('.question').innerText = questionText;
        
        // Define opciones (puedes hacer estas dinámicas)
        const options = ['Contramano', 'No Adelantar', 'No Avanzar', 'Ceda el paso', 'No Cambiar de Carril', 'Prohibido Estacionar', 'No Estacionar ni Detenerse', 'Prohibido girar a la Derecha', 'No girar en 180', 'No ruidos molestos'];
        const optionsHtml = options.map(option => {
            return `<button class="option">${option}</button>`;
        }).join('');
        
        back.querySelector('.options').innerHTML = optionsHtml;

        // Muestra la parte posterior de la carta
        carta.querySelector('.carta-inner').style.transform = 'rotateY(180deg)';

        // Maneja clics en las opciones
        back.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => {
                if (option.innerText === correctAnswer) {
                    updateScore(true);
                } else {
                    updateScore(false);
                }
                carta.querySelector('.carta-inner').style.transform = 'rotateY(0deg)'; // Vuelve a girar
            });
        });
    });

    carta.addEventListener('mouseleave', () => {
        carta.querySelector('.carta-inner').style.transform = 'rotateY(0deg)'; // Vuelve a girar al frente
    });
});

let correctCount = 0;
let incorrectCount = 0;

function updateScore(isCorrect) {
    if (isCorrect) {
        correctCount++;
    } else {
        incorrectCount++;
    }
    document.getElementById('correctCount').innerText = correctCount;
    document.getElementById('incorrectCount').innerText = incorrectCount;
}
