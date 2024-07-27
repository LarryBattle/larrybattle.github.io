// Data
// const verbs = [
//     { id: 'eat', baseForm: 'eat', past: 'ate', present: 'eating', future: 'eat' },
//     { id: 'run', baseForm: 'run', past: 'ran', present: 'running', future: 'run' },
//     { id: 'sleep', baseForm: 'sleep', past: 'slept', present: 'sleeping', future: 'sleep' }
// ];

// const stories = [
//     { 
//         verbId: 'eat', 
//         past: 'Yesterday, I ate a delicious hamburger.',
//         present: 'Right now, I am eating a tasty taco.',
//         future: 'Tomorrow, I will eat some fresh sushi.'
//     },
//     { 
//         verbId: 'run', 
//         past: 'Last week, I ran a marathon.',
//         present: 'I am running in the park right now.',
//         future: 'Next month, I will run in a charity race.'
//     },
//     { 
//         verbId: 'sleep', 
//         past: 'Last night, I slept for eight hours.',
//         present: 'The baby is sleeping peacefully now.',
//         future: 'Tomorrow, I will sleep in late.'
//     }
// ];

// DOM Elements
const learningBtn = document.getElementById('learning-btn');
const practiceBtn = document.getElementById('practice-btn');
const learningSection = document.getElementById('learning-section');
const practiceSection = document.getElementById('practice-section');
const verbList = document.getElementById('verb-list');
const storyDiv = document.getElementById('story');
const practiceVerbs = document.getElementById('practice-verbs');
const practiceQuestion = document.getElementById('practice-question');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');

// State
let currentVerbIndex = 0;
let currentTenseIndex = 0;
let currentQuestionIndex = 0;
let totalQuestions = 0;

// Event Listeners
learningBtn.addEventListener('click', showLearningSection);
practiceBtn.addEventListener('click', showPracticeSection);
nextBtn.addEventListener('click', nextQuestion);

// Functions
function showLearningSection() {
    learningSection.style.display = 'block';
    practiceSection.style.display = 'none';
    renderVerbList();
}

function showPracticeSection() {
    learningSection.style.display = 'none';
    practiceSection.style.display = 'block';
    renderPracticeVerbs();
    resetPractice();
}

function renderVerbList() {
    verbList.innerHTML = verbs.map(verb => 
        `<button class="btn" onclick="showStory('${verb.id}')">${verb.baseForm}</button>`
    ).join('');
}

function showStory(verbId) {
    const story = stories.find(s => s.verbId === verbId);
    storyDiv.innerHTML = `
        <p>${story.past}</p>
        <p>${story.present}</p>
        <p>${story.future}</p>
    `;
}

function renderPracticeVerbs() {
    practiceVerbs.innerHTML = verbs.map(verb => 
        `<button class="btn" onclick="startPractice('${verb.id}')">${verb.baseForm}</button>`
    ).join('');
}

function resetPractice() {
    currentVerbIndex = 0;
    currentTenseIndex = 0;
    currentQuestionIndex = 0;
    totalQuestions = verbs.length * 3; // 3 tenses per verb
    updateProgressBar();
}

function startPractice(verbId) {
    currentVerbIndex = verbs.findIndex(v => v.id === verbId);
    currentTenseIndex = 0;
    presentQuestion();
}

function presentQuestion() {
    const verb = verbs[currentVerbIndex];
    const story = stories.find(s => s.verbId === verb.id);
    const tenses = ['past', 'present', 'future'];
    const correctTense = tenses[currentTenseIndex];
    
    let question = story[correctTense].replace(verb[correctTense], '___');
    
    practiceQuestion.innerHTML = `
        <p>${question}</p>
        ${tenses.map(tense => 
            `<button class="btn" onclick="checkAnswer('${tense}', '${correctTense}')">${verb[tense]}</button>`
        ).join('')}
    `;
    feedbackDiv.innerHTML = '';
    nextBtn.style.display = 'none';
}

function checkAnswer(selectedTense, correctTense) {
    if (selectedTense === correctTense) {
        feedbackDiv.innerHTML = '<p class="feedback correct">Correct! Well done! 🎉</p>';
    } else {
        feedbackDiv.innerHTML = `<p class="feedback incorrect">Incorrect. The correct answer was: ${correctTense} 😕</p>`;
    }
    nextBtn.style.display = 'inline-block';
    
    currentQuestionIndex++;
    updateProgressBar();
}

function nextQuestion() {
    currentTenseIndex++;
    if (currentTenseIndex >= 3) {
        currentTenseIndex = 0;
        currentVerbIndex++;
    }
    
    if (currentVerbIndex >= verbs.length) {
        endPractice();
    } else {
        presentQuestion();
    }
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
}

function endPractice() {
    practiceQuestion.innerHTML = '<h2>Great job! You\'ve completed all the questions.</h2>';
    feedbackDiv.innerHTML = '';
    nextBtn.style.display = 'none';
}

// Initialize app
showLearningSection();
