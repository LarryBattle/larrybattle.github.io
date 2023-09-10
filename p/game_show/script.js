// Sample questions in JSON format
const allQuestions = [
    {
        "question": "What is the capital of France?",
        "options": ["Berlin", "Madrid", "Paris", "Rome"],
        "correctAnswer": 2,
        "prize": 10
    },
    {
        "question": "Which planet is known as the \"Red Planet\"?",
        "options": [
            "Mars",
            "Venus",
            "Jupiter",
            "Saturn"
        ],
        "correctAnswer": 0,
        "prize": 10
    },
    {
        "question": "What's the largest planet in our solar system?",
        "options": [
            "Earth",
            "Mars",
            "Jupiter",
            "Venus"
        ],
        "correctAnswer": 2,
        "prize": 10
    },
    {
        "question": "Who is known as the \"Father of History\"?",
        "options": [
            "Socrates",
            "Homer",
            "Herodotus",
            "Aristotle",
            "Herodotus"
        ],
        "correctAnswer": 2,
        "prize": 10
    },
    {
        "question": "What is the largest mammal in the world?",
        "options": [
            "Elephant",
            "Blue Whale",
            "Giraffe",
            "Hippopotamus"
        ],
        "correctAnswer": 1,
        "prize": 20
    },
    {
        "question": "Which bird is known for its beautiful tail feathers and courtship dance?",
        "options": [
            "Peacock",
            "Swan",
            "Eagle",
            "Penguin"
        ],
        "correctAnswer": 0,
        "prize": 20
    },
    {
        "question": "What is the process by which plants make their own food using sunlight?",
        "options": [
            "Respiration",
            "Digestion",
            "Photosynthesis",
            "Fermentation",
            "Photosynthesis"
        ],
        "correctAnswer": 2,
        "prize": 20
    },
    {
        "question": "What color do you get when you mix red and blue?",
        "options": [
            "Green",
            "Orange",
            "Purple",
            "Brown"
        ],
        "correctAnswer": 2,
        "prize": 30
    },
    {
        "question": "Which number comes after 19?",
        "options": [
            "20",
            "18",
            "21",
            "22"
        ],
        "correctAnswer": 0,
        "prize": 30
    },
    {
        "question": "If you subtract 5 from 10, what do you get?",
        "options": [
            "2",
            "3",
            "5",
            "6",
            "5"
        ],
        "correctAnswer": 2,
        "prize": 30
    },
    {
        "question": "Who was the first woman to fly solo across the Atlantic Ocean?",
        "options": [
            "Sally Ride",
            "Amelia Earhart",
            "Valentina Tereshkova",
            "Harriet Quimby"
        ],
        "correctAnswer": 1,
        "prize": 40
    },
    {
        "question": "Which pharaoh was known for her relationship with Roman leaders Julius Caesar and Mark Antony?",
        "options": [
            "Cleopatra",
            "Nefertiti",
            "Hatshepsut",
            "Ramses II"
        ],
        "correctAnswer": 0,
        "prize": 40
    },
    {
        "question": "In which year did World War II end?",
        "options": [
            "1939",
            "1944",
            "1945",
            "1950",
            "1945"
        ],
        "correctAnswer": 2,
        "prize": 40
    },
    {
        "question": "What is the chemical symbol for gold?",
        "options": [
            "Gd",
            "Ga",
            "Ge",
            "Au"
        ],
        "correctAnswer": 3,
        "prize": 50
    },
    {
        "question": "What planet is known as the \"Ringed Planet\"?",
        "options": [
            "Mars",
            "Venus",
            "Jupiter",
            "Saturn"
        ],
        "correctAnswer": 3,
        "prize": 50
    },
    {
        "question": "Which element is necessary for combustion?",
        "options": [
            "Hydrogen",
            "Nitrogen",
            "Oxygen",
            "Carbon",
            "Oxygen"
        ],
        "correctAnswer": 2,
        "prize": 50
    },
    {
        "question": "Who wrote the play \"Romeo and Juliet\"?",
        "options": [
            "Charles Dickens",
            "William Shakespeare",
            "George Orwell",
            "Jane Austen"
        ],
        "correctAnswer": 1,
        "prize": 60
    },
    {
        "question": "Which book features a character named Atticus Finch?",
        "options": [
            "Pride and Prejudice",
            "1984",
            "To Kill a Mockingbird",
            "Moby Dick"
        ],
        "correctAnswer": 2,
        "prize": 60
    },
    {
        "question": "What is the native land of the hobbits in J.R.R. Tolkien's novels?",
        "options": [
            "Tolkien's novels?",
            "Gondor",
            "Mordor",
            "The Shire",
            "Rivendell",
            "The Shire"
        ],
        "correctAnswer": 2,
        "prize": 60
    },
    {
        "question": "Which famous artist painted the \"Mona Lisa\"?",
        "options": [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Michelangelo"
        ],
        "correctAnswer": 2,
        "prize": 70
    },
    {
        "question": "Who composed the \"Moonlight Sonata\"?",
        "options": [
            "Wolfgang Amadeus Mozart",
            "Johann Sebastian Bach",
            "Ludwig van Beethoven",
            "Franz Schubert"
        ],
        "correctAnswer": 2,
        "prize": 70
    },
    {
        "question": "The \"Starry Night\" is a painting by which artist?",
        "options": [
            "Salvador Dali",
            "Vincent van Gogh",
            "Pablo Picasso",
            "Rembrandt",
            "Vincent van Gogh"
        ],
        "correctAnswer": 1,
        "prize": 70
    },
    {
        "question": "What is the derivative of x^2 with respect to x?",
        "options": [
            "x",
            "2x",
            "x^2",
            "2x^2"
        ],
        "correctAnswer": 1,
        "prize": 80
    },
    {
        "question": "If an object is at rest, which law of motion states that it will remain at rest unless acted upon by an external force?",
        "options": [
            "Newton's First Law",
            "Newton's Second Law",
            "Newton's Third Law",
            "The Law of Universal Gravitation"
        ],
        "correctAnswer": 0,
        "prize": 80
    },
    {
        "question": "In Einstein's famous equation E=mc^2, what does c represent?",
        "options": [
            "Speed of Light",
            "Speed of Sound",
            "Centripetal Force",
            "Coulomb's Constant",
            "Speed of Light"
        ],
        "correctAnswer": 0,
        "prize": 80
    },
    {
        "question": "In which continent is the Sahara Desert located?",
        "options": [
            "Asia",
            "South America",
            "Africa",
            "Australia"
        ],
        "correctAnswer": 2,
        "prize": 90
    },
    {
        "question": "Which river is the longest in the world?",
        "options": [
            "Amazon",
            "Nile",
            "Yangtze",
            "Mississippi"
        ],
        "correctAnswer": 1,
        "prize": 90
    },
    {
        "question": "Which country is known as the \"Land of the Rising Sun\"?",
        "options": [
            "China",
            "South Korea",
            "India",
            "Japan",
            "Japan"
        ],
        "correctAnswer": 3,
        "prize": 90
    },
    {
        "question": "What is the smallest prime number?",
        "options": [
            "0",
            "2",
            "1",
            "3"
        ],
        "correctAnswer": 1,
        "prize": 100
    },
    {
        "question": "Which of these is not a gas at room temperature?",
        "options": [
            "Helium",
            "Neon",
            "Bromine",
            "Nitrogen"
        ],
        "correctAnswer": 2,
        "prize": 100
    },
    {
        "question": "What is the capital city of Australia?",
        "options": [
            "Sydney",
            "Melbourne",
            "Brisbane",
            "Canberra",
            "Canberra"
        ],
        "correctAnswer": 3,
        "prize": 100
    }
];



let currentQuestionIndex = 0;
let currentPrize = 0;

// DOM elements
const questionText = document.getElementById('question-text');
const optionsButtons = document.querySelectorAll('.option');
const prizeLadderElement = document.querySelector('.prize-ladder');
const prizeText = document.getElementById('current-prize');
const questions = selectRandomQuestions(allQuestions);
const startButton = document.getElementById('start-button');
const contentWrapper = document.querySelector('.content-wrapper');

startButton.addEventListener('click', function() {
    // Hide the start button
    startButton.style.display = 'none';

    // Show the game content
    contentWrapper.style.display = 'block';

    // Load the first question
    loadQuestion(currentQuestionIndex);
});


// Load the first question
loadQuestion(currentQuestionIndex);

function selectRandomQuestions(questionList) {
    const selectedQuestions = [];
    const groupedByPrize = {};

    // Group questions by prize value
    questionList.forEach(question => {
        if (!groupedByPrize[question.prize]) {
            groupedByPrize[question.prize] = [];
        }
        groupedByPrize[question.prize].push(question);
    });

    // Randomly select one question from each prize group
    for (let prize in groupedByPrize) {
        const randomIndex = Math.floor(Math.random() * groupedByPrize[prize].length);
        selectedQuestions.push(groupedByPrize[prize][randomIndex]);
    }

    return selectedQuestions;
}

function checkAnswer(selectedIndex) {
    // Disable all the options once an option is selected
    optionsButtons.forEach(button => button.disabled = true);

    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;

    if (selectedIndex === correctAnswerIndex) {
        // Highlight the correct answer
        optionsButtons[correctAnswerIndex].classList.add('correct');

        setTimeout(() => {
            currentPrize += questions[currentQuestionIndex].prize;
            prizeText.textContent = `Current Prize: $${currentPrize}`;
            currentQuestionIndex++;

            // Reset the options' styles and enable them
            optionsButtons.forEach(button => {
                button.disabled = false;
                button.classList.remove('correct', 'incorrect');
            });

            if (currentQuestionIndex < questions.length) {
                loadQuestion(currentQuestionIndex);
            } else {
                // Game over, player won
                alert(`Congratulations! You've won $${currentPrize}`);
                // Reset game or do something else here
            }
        }, 1500);  // Wait for 1.5 seconds before moving to the next question
    } else {
        // Highlight the correct answer and the user's incorrect choice
        optionsButtons[correctAnswerIndex].classList.add('correct');
        optionsButtons[selectedIndex].classList.add('incorrect');

        setTimeout(() => {
            alert('Sorry, that was the wrong answer. You didn\'t win.');
            // Here you can reset the game or navigate the user to another page
        }, 1500);  // Wait for 1.5 seconds before showing the alert
    }
}

function loadQuestion(index) {
    const question = questions[index];
    questionText.textContent = question.question;
    optionsButtons.forEach((button, i) => {
        button.textContent = `${String.fromCharCode(65 + i)}: ${question.options[i]}`;
        button.onclick = () => checkAnswer(i);
    });
    populatePrizeLadder();
}

// Populate the prize ladder
function populatePrizeLadder() {
    prizeLadderElement.innerHTML = '';  // Clear any existing entries
    questions.reverse().forEach((q, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `$${q.prize}`;
        if (index === (questions.length - 1 - currentQuestionIndex)) {
            listItem.classList.add('current');
        }
        prizeLadderElement.appendChild(listItem);
    });
    questions.reverse();  // Reverse back to original order for game logic
}

populatePrizeLadder();

// Lifelines
// 50:50
document.getElementById('lifeline-5050').onclick = function () {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    let removed = 0;
    optionsButtons.forEach((button, i) => {
        if (i !== correctAnswer && removed < 2) {
            button.disabled = true;
            removed++;
        }
    });
    this.disabled = true;  // Disable the lifeline after using
};

// Ask the Audience (just a simulation for now)
document.getElementById('lifeline-audience').onclick = function () {
    alert('Audience thinks it\'s option C.');
    this.disabled = true;  // Disable the lifeline after using
};

// Ask ChatGPT (simulated response for now)
document.getElementById('lifeline-chatgpt').onclick = function () {
    const correctOption = String.fromCharCode(65 + questions[currentQuestionIndex].correctAnswer);
    alert(`ChatGPT thinks the answer is option ${correctOption}.`);
    this.disabled = true;  // Disable the lifeline after using
};
