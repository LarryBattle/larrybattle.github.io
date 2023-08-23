// Fetch presets from presets.json and populate the dropdown.
function fetchPresets() {
    fetch('presets.json')
        .then(response => response.json())
        .then(data => {
            const presetDropdown = document.getElementById('preset-dropdown');
            
            data.presets.forEach(preset => {
                const option = document.createElement('option');
                option.value = preset.id;
                option.textContent = preset.name;
                option.dataset.language = preset.language; // store the associated language code in a data attribute
                
                presetDropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error fetching presets:", error);
        });
}

// Event listener for the language dropdown change
document.getElementById('language-dropdown').addEventListener('change', function() {
    recognition.lang = this.value;  // Assuming values are like 'en-US', 'es-ES', etc.
});


// Call the fetchPresets function when the document loads.
document.addEventListener('DOMContentLoaded', function() {
    fetchPresets();
});

// feature set 3
let phrases = []; // This array will hold the phrases for the quiz

// Validate phrases from the textarea
function validatePhrasesInput() {
    const textareaValue = document.getElementById('phrases-textarea').value;
    
    // Clear any existing error messages
    document.getElementById('input-error').textContent = '';
    
    // Split by new lines and filter out any empty lines or just whitespace
    const newPhrases = textareaValue.split('\n').filter(phrase => phrase.trim() !== '');

    if (newPhrases.length === 0) {
        document.getElementById('input-error').textContent = 'Please input at least one valid phrase.';
        return false;
    }
    
    phrases = newPhrases;
    return true;
}

// Update the textarea with phrases from a preset
function updateTextareaWithPreset(presetId) {
    fetch('presets.json')
        .then(response => response.json())
        .then(data => {
            const preset = data.presets.find(p => p.id === presetId);
            if (preset) {
                document.getElementById('phrases-textarea').value = preset.phrases.join('\n');
            }
        })
        .catch(error => {
            console.error("Error fetching presets:", error);
        });
}

// Modify the previous preset dropdown change listener to update the textarea when a preset is selected
document.getElementById('preset-dropdown').addEventListener('change', function(event) {
    const selectedPresetOption = event.target.options[event.target.selectedIndex];
    const associatedLanguage = selectedPresetOption.dataset.language;

    // Set the language dropdown to the associated language of the preset
    document.getElementById('language-dropdown').value = associatedLanguage;

    // Update the textarea with phrases from the selected preset
    updateTextareaWithPreset(event.target.value);

    console.log('Preset changed to:', event.target.value);
});

// feature 4
let currentPhraseIndex = 0; // Keeps track of the current phrase in the quiz

function moveToNextPhrase() {
    currentPhraseIndex++;
    if (currentPhraseIndex < phrases.length) {
        document.getElementById('current-phrase').textContent = phrases[currentPhraseIndex];
    } else {
        document.getElementById('quiz-status').textContent = 'Quiz completed! Well done!';
        SpeechRecognitionService.stop();
        document.getElementById('stop-recording-btn').disabled = true;
        document.getElementById('start-recording-btn').disabled = true;
    }
}

document.getElementById('start-quiz-btn').addEventListener('click', function() {
    if (validatePhrasesInput()) {
        resetQuiz();
        // Hide error message
        document.getElementById('start-quiz-status').textContent = '';
        
        // Show the Quiz Section and set the first phrase
        document.getElementById('current-phrase').textContent = phrases[currentPhraseIndex];
    } else {
        // Display error message
        document.getElementById('start-quiz-status').textContent = 'Please provide valid phrases before starting the quiz.';
    }
});

document.getElementById('start-recording-btn').addEventListener('click', function() {
    console.log('Recording started...');
    this.disabled = true;
    document.getElementById('stop-recording-btn').disabled = false;
    startCountdown();

    // Start speech recognition
    let langCode = document.getElementById('language-dropdown').value;
    SpeechRecognitionService.setLanguage(langCode);
    SpeechRecognitionService.start(function(event) {
        let userInput = event.results[0][0].transcript;
        processUserInput(userInput);
    });
});

document.getElementById('stop-recording-btn').addEventListener('click', function() {
    console.log('Recording stopped...');
    this.disabled = true;
    document.getElementById('start-recording-btn').disabled = false;

    stopCountdown();
    SpeechRecognitionService.stop();
});


// feature 5
let timerId; // To keep track of the countdown interval

function startCountdown() {
    let timeLeft = 10; // Starting countdown time
    document.getElementById('time-left').textContent = timeLeft;

    timerId = setInterval(function() {
        timeLeft -= 1;
        document.getElementById('time-left').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            document.getElementById('quiz-status').textContent = "Time's up! Try the next phrase.";
            moveToNextPhrase();
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(timerId);
    document.getElementById('quiz-status').textContent = ''; // Clear any status messages
}

let score = 0;

function updateScore() {
    score++;
    document.getElementById('score-display').textContent = "Score: " + score;
}


// feature 6.
function logAttempt(expectedPhrase, userInput, isCorrect) {
    // Add the attempt to the table
    let tableBody = document.getElementById('attempts-table').getElementsByTagName('tbody')[0];
    let newRow = tableBody.insertRow(0);  // 0 specifies that the new row will be the first row
    
    // Expected Phrase
    let expectedCell = newRow.insertCell(0);
    expectedCell.textContent = expectedPhrase;

    // User's Input
    let userInputCell = newRow.insertCell(1);
    userInputCell.textContent = userInput;

    // Correctness
    let correctnessCell = newRow.insertCell(2);
    correctnessCell.textContent = isCorrect ? "Correct" : "Incorrect";
    if (isCorrect) {
        correctnessCell.style.color = "green";
        document.getElementById('last-correct-word').textContent = getCorrectWordFromPhrase(expectedPhrase);
    } else {
        correctnessCell.style.color = "red";
    }
}

function getCorrectWordFromPhrase(phrase) {
    // This function can be expanded based on the nature of phrases. 
    // Currently, it just returns the last word of the given phrase.
    let words = phrase.split(' ');
    return words[words.length - 1];
}

// TODO: After processing the user's speech using the Web Speech API, 
// you'll want to call the logAttempt function with the appropriate parameters.

// feature 7
const SpeechRecognitionService = {
    recognition: null,
    init: function() {
        if (!('webkitSpeechRecognition' in window)) {
            console.error('Web Speech API not supported in this browser.');
            return;
        }

        this.recognition = new webkitSpeechRecognition();
        this.recognition.continuous = true; 
        this.recognition.interimResults = false; 
        this.recognition.lang = 'en-US'; // Default is English, but this can be changed based on language selection.
    },
    start: function(callback) {
        if (!this.recognition) {
            this.init();
        }
        this.recognition.onresult = callback;
        this.recognition.start();
    },
    stop: function() {
        if (this.recognition) {
            this.recognition.stop();
        }
    },
    setLanguage: function(langCode) {
        if (this.recognition) {
            this.recognition.lang = langCode;
        }
    }
};

function sanitizeInput(input) {
    return input.replace(/[^a-zA-Z\s]/g, '').trim().toLowerCase();
}

function processUserInput(userInput) {
    let sanitizedInput = sanitizeInput(userInput);
    let expectedPhrase = phrases[currentPhraseIndex];

    if (sanitizedInput && expectedPhrase) {
        let sanitizedExpected = sanitizeInput(expectedPhrase);
        let isCorrect = sanitizedInput === sanitizedExpected;

        logAttempt(expectedPhrase, userInput, isCorrect);

        if (isCorrect) {
            updateScore();
            if (currentPhraseIndex < phrases.length - 1) {
                moveToNextPhrase();
            } else {
                document.getElementById('quiz-status').textContent = 'Quiz completed! Well done!';
                SpeechRecognitionService.stop();
                document.getElementById('stop-recording-btn').disabled = true;
                document.getElementById('start-recording-btn').disabled = true;
            }
        } else {
            document.getElementById('quiz-status').textContent = 'Try again!';
        }
    } else {
        document.getElementById('quiz-status').textContent = 'Error processing your input. Please try again.';
    }
}

// feature 8.1
function resetQuiz() {
    currentPhraseIndex = 0;
    score = 0;
    document.getElementById('score-display').textContent = "Score: " + score;
    document.getElementById('current-phrase').textContent = phrases[currentPhraseIndex];
    document.getElementById('start-recording-btn').disabled = false;
    document.getElementById('stop-recording-btn').disabled = true;  // Start button should be enabled, but the Stop button should initially be disabled.
    document.getElementById('quiz-status').textContent = 'Please pronounce the displayed phrase.';
    document.getElementById('quiz-section').style.display = 'block';

}
