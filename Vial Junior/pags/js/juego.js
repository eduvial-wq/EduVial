const quizData = [
    {
        question: "¿Qué significa esta señal?",
        imgSrc: "img/giroderecha.png",
        correctOptionIndex: 2, // Índice de la opción correcta (0, 1, 2, 3, etc.)
        options: ["Prohibido girar a la derecha", "Detenerse", "Desvío obligatorio a la derecha", "Ceda el paso"]
    },
    {
        question: "¿Qué indica esta señal?",
        imgSrc: "img/pare.png",
        correctOptionIndex: 0,
        options: ["Detenerse", "Prohibido estacionar", "Fin de zona escolar", "Limite de velocidad"]
    },
    {
        question: "¿Qué indica esta señal?",
        imgSrc: "img/contramano.png",
        correctOptionIndex: 3,
        options: ["Detenerse", "Prohibido estacionar", "Ceda el paso", "Contramano"]
    },
];


let currentQuestion = 0;
let score = 0;

const signImage = document.getElementById('sign-image');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    signImage.src = questionData.imgSrc;
    signImage.style.maxWidth = '300px';
    signImage.src = questionData.imgSrc;
    feedback.innerText = '';

    optionsContainer.innerHTML = '';
    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });

    nextButton.style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestion].correctOptionIndex;
    const correctAnswer = quizData[currentQuestion].options[correctIndex];

    if (selectedIndex === correctIndex) {
        feedback.innerText = '¡Respuesta correcta!';
        feedback.style.color = '#14e730';
        feedback.classList.add('correct-answer');
        score++;
    } else {
        feedback.innerText = `Respuesta incorrecta. La respuesta correcta es: ${correctAnswer}`;
        feedback.style.color = 'red';
        feedback.classList.add('correct-answer');
    }

    nextButton.style.display = 'block';
}


nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        // Mostrar puntaje final o cualquier otro mensaje de finalización
        optionsContainer.innerHTML = '';
        signImage.src = 'img/VialJunior.png';
        feedback.innerText = `Juego terminado. Puntaje final: ${score}/${quizData.length}`;
        nextButton.style.display = 'none';
    }
});

// Iniciar el juego cargando la primera pregunta
loadQuestion();