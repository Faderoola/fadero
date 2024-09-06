const questions = [
        {
            "question": "What is the capital of France?",
            "options": {
                "a": "Paris",
                "b": "London",
                "c": "Berlin",
                "d": "Madrid"
            },
            correct: "a"
        },
        {
            "question": "What is the chemical symbol for water?",
            "options": {
                "a": "H2O",
                "b": "O2",
                "c": "CO2",
                "d": "NaCl"
            },
            correct: "a"
        },
        {
            "question": "What is the largest planet in our solar system?",
            "options": {
                "a": "Earth",
                "b": "Mars",
                "c": "Jupiter",
                "d": "Saturn"
            },
            correct: "c"
        },
        {
            "question": "Which element has the atomic number 1?",
            "options": {
                "a": "Helium",
                "b": "Hydrogen",
                "c": "Lithium",
                "d": "Beryllium"
            },
            correct: "b"
        },
        {
            "question": "In what year did the Titanic sink?",
            "options": {
                "a": "1912",
                "b": "1905",
                "c": "1898",
                "d": "1923"
            },
            correct: "a"
        },
        {
            "question": "Who wrote 'To Kill a Mockingbird'?",
            "options": {
                "a": "Harper Lee",
                "b": "Mark Twain",
                "c": "J.K. Rowling",
                "d": "Ernest Hemingway"
            },
            correct: "a"
        },
        {
            "question": "What is the powerhouse of the cell?",
            "options": {
                "a": "Nucleus",
                "b": "Ribosome",
                "c": "Mitochondria",
                "d": "Endoplasmic Reticulum"
            },
            correct: "c"
        },
        {
            "question": "Who painted the Mona Lisa?",
            "options": {
                "a": "Vincent van Gogh",
                "b": "Pablo Picasso",
                "c": "Leonardo da Vinci",
                "d": "Claude Monet"
            },
            correct: "c"
        },
        {
            "question": "What is the smallest prime number?",
            "options": {
                "a": "0",
                "b": "1",
                "c": "2",
                "d": "3"
            },
            correct: "c"
        },
        {
            "question": "What gas do plants primarily use for photosynthesis?",
            "options": {
                "a": "Oxygen",
                "b": "Nitrogen",
                "c": "Carbon Dioxide",
                "d": "Hydrogen"
            },
            correct: "c"
        },
        {
            "question": "Which continent is the Sahara Desert located on?",
            "options": {
                "a": "Africa",
                "b": "Asia",
                "c": "Australia",
                "d": "South America"
            },
            correct: "a"
        },
        {
            "question": "What is the hardest natural substance on Earth?",
            "options": {
                "a": "Gold",
                "b": "Iron",
                "c": "Diamond",
                "d": "Platinum"
            },
            correct: "c"
        },
        {
            "question": "Which planet is known as the Red Planet?",
            "options": {
                "a": "Venus",
                "b": "Mars",
                "c": "Mercury",
                "d": "Neptune"
            },
            correct: "b"
        },
        {
            "question": "What is the main language spoken in Brazil?",
            "options": {
                "a": "Spanish",
                "b": "Portuguese",
                "c": "French",
                "d": "English"
            },
            correct: "b"
        },
        {
            "question": "What is the chemical formula for table salt?",
            "options": {
                "a": "NaCl",
                "b": "H2O",
                "c": "CO2",
                "d": "CH4"
            },
            correct: "a"
        },
        {
            "question": "Which famous scientist developed the theory of relativity?",
            "options": {
                "a": "Isaac Newton",
                "b": "Galileo Galilei",
                "c": "Albert Einstein",
                "d": "Nikola Tesla"
            },
            correct: "c"
        },
        {
            "question": "What is the longest river in the world?",
            "options": {
                "a": "Nile",
                "b": "Amazon",
                "c": "Yangtze",
                "d": "Mississippi"
            },
            correct: "b"
        },
        {
            "question": "How many continents are there on Earth?",
            "options": {
                "a": "5",
                "b": "6",
                "c": "7",
                "d": "8"
            },
            correct: "c"
        },
        {
            "question": "What is the largest mammal in the world?",
            "options": {
                "a": "African Elephant",
                "b": "Blue Whale",
                "c": "Giraffe",
                "d": "Hippopotamus"
            },
            correct: "b"
        },
        {
            "question": "What is the primary currency used in Japan?",
            "options": {
                "a": "Yen",
                "b": "Dollar",
                "c": "Euro",
                "d": "Won"
            },
            correct: "a"
        },
        {
            "question": "Which planet is closest to the Sun?",
            "options": {
                "a": "Earth",
                "b": "Venus",
                "c": "Mercury",
                "d": "Mars"
            },
            correct: "c"
        },
        {
            "question": "Who is known as the 'Father of Computers'?",
            "options": {
                "a": "Alan Turing",
                "b": "Charles Babbage",
                "c": "Bill Gates",
                "d": "Steve Jobs"
            },
            correct: "b"
        },
        {
            "question": "What is the capital city of Canada?",
            "options": {
                "a": "Toronto",
                "b": "Vancouver",
                "c": "Ottawa",
                "d": "Montreal"
            },
            correct: "c"
        },
        {
            "question": "What element does 'O' represent on the periodic table?",
            "options": {
                "a": "Oxygen",
                "b": "Gold",
                "c": "Osmium",
                "d": "Omnium"
            },
            correct: "a"
        },
        {
            "question": "What is the most spoken language in the world?",
            "options": {
                "a": "English",
                "b": "Mandarin",
                "c": "Spanish",
                "d": "Hindi"
            },
            correct: "b"
        },
        {
            "question": "Which organ is vital for pumping blood throughout the body?",
            "options": {
                "a": "Brain",
                "b": "Liver",
                "c": "Lungs",
                "d": "Heart"
            },
            correct: "d"
        },
        {
            "question": "Who wrote 'Romeo and Juliet'?",
            "options": {
                "a": "William Shakespeare",
                "b": "Charles Dickens",
                "c": "Jane Austen",
                "d": "Mark Twain"
            },
            correct: "a"
        },
        {
            "question": "What is the main ingredient in guacamole?",
            "options": {
                "a": "Tomato",
                "b": "Avocado",
                "c": "Onion",
                "d": "Pepper"
            },
            correct: "b"
        },
        {
            "question": "Which ocean is the largest by surface area?",
            "options": {
                "a": "Atlantic Ocean",
                "b": "Indian Ocean",
                "c": "Arctic Ocean",
                "d": "Pacific Ocean"
            },
            correct: "d"
        },
        {
            "question": "In which country would you find the Eiffel Tower?",
            "options": {
                "a": "Italy",
                "b": "Spain",
                "c": "France",
                "d": "Germany"
            },
            correct: "c"
        },
        {
            "question": "What is the currency used in the United Kingdom?",
            "options": {
                "a": "Euro",
                "b": "Dollar",
                "c": "Pound Sterling",
                "d": "Yen"
            },
            correct: "c"
        },
        {
            "question": "What is the smallest country in the world by land area?",
            "options": {
                "a": "Vatican City",
                "b": "Monaco",
                "c": "San Marino",
                "d": "Liechtenstein"
            },
            correct: "a"
        },
        {
            "question": "Which planet is known for its rings?",
            "options": {
                "a": "Uranus",
                "b": "Saturn",
                "c": "Neptune",
                "d": "Jupiter"
            },
            correct: "b"
        },
        {
            "question": "What is the main component of the sun?",
            "options": {
                "a": "Oxygen",
                "b": "Hydrogen",
                "c": "Carbon",
                "d": "Helium"
            },
            correct: "b"
        },
        {
            "question": "What is the largest desert in the world?",
            "options": {
                "a": "Sahara",
                "b": "Gobi",
                "c": "Antarctic Desert",
                "d": "Arabian Desert"
            },
            correct: "c"
        },
        {
            "question": "Who was the first person to walk on the moon?",
            "options": {
                "a": "Buzz Aldrin",
                "b": "Neil Armstrong",
                "c": "Yuri Gagarin",
                "d": "Michael Collins"
            },
            correct: "b"
        },
        {
            "question": "Which ocean is the smallest?",
            "options": {
                "a": "Atlantic Ocean",
                "b": "Indian Ocean",
                "c": "Arctic Ocean",
                "d": "Pacific Ocean"
            },
            correct: "c"
        },
        {
            "question": "What is the hardest natural mineral?",
            "options": {
                "a": "Quartz",
                "b": "Topaz",
                "c": "Diamond",
                "d": "Sapphire"
            },
            correct: "c"
        },
        {
            "question": "Who is the author of '1984'?",
            "options": {
                "a": "George Orwell",
                "b": "Aldous Huxley",
                "c": "Ray Bradbury",
                "d": "H.G. Wells"
            },
            correct: "a"
        },
        {
            "question": "What is the chemical symbol for gold?",
            "options": {
                "a": "Au",
                "b": "Ag",
                "c": "Pb",
                "d": "Fe"
            },
            correct: "a"
        }
        
    
];

let currentQuestionIndex = 0;
let timeLeft = 30;
let timer;
let score = 0;
let username = '';

const questionElement = document.getElementById('question');
const optionAElement = document.getElementById('optionA-text');
const optionBElement = document.getElementById('optionB-text');
const optionCElement = document.getElementById('optionC-text');
const optionDElement = document.getElementById('optionD-text');
const resultElement = document.getElementById('result');
const timeElement = document.getElementById('time');

function startQuiz() {
    username = document.getElementById('username').value;
    if (username) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        startGame();
    } else {
        alert("Please enter your name to start the quiz.");
    }
}

function startGame() {
    loadQuestion();
    startTimer();
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timeElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            resultElement.textContent = "Time's up answer a little faster next time move to the next question!";
            disableOptions();
        }
    }, 1000);
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionAElement.textContent = currentQuestion.options.a;
    optionBElement.textContent = currentQuestion.options.b;
    optionCElement.textContent = currentQuestion.options.c;
    optionDElement.textContent = currentQuestion.options.d;
    resultElement.textContent = '';
    enableOptions();
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong!";
    }
    clearInterval(timer);
    disableOptions();
}

function disableOptions() {
    document.getElementById('optionA').style.pointerEvents = 'none';
    document.getElementById('optionB').style.pointerEvents = 'none';
    document.getElementById('optionC').style.pointerEvents = 'none';
    document.getElementById('optionD').style.pointerEvents = 'none';
}

function enableOptions() {
    document.getElementById('optionA').style.pointerEvents = 'auto';
    document.getElementById('optionB').style.pointerEvents = 'auto';
    document.getElementById('optionC').style.pointerEvents = 'auto';
    document.getElementById('optionD').style.pointerEvents = 'auto';
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        startTimer();
    } else {
        endQuiz();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
        startTimer();
    }
}

function endQuiz() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('final-score').textContent = `${username}, 
    your score is: ${score} out of 40 questions`;
}

document.getElementById('optionA').addEventListener('click', () => checkAnswer('a'));
document.getElementById('optionB').addEventListener('click', () => checkAnswer('b'));
document.getElementById('optionC').addEventListener('click', () => checkAnswer('c'));
document.getElementById('optionD').addEventListener('click', () => checkAnswer('d'));
