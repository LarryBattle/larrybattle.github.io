// DOM Elements
const learningBtn = document.getElementById('learning-btn');
const practiceBtn = document.getElementById('practice-btn');
const learningSection = document.getElementById('learning-section');
const practiceSection = document.getElementById('practice-section');
const verbList = document.getElementById('verb-list');
const storyDiv = document.getElementById('story');
const practiceQuestion = document.getElementById('practice-question');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');
const questionStatus = document.getElementById('question-status');
const practiceOptions = document.getElementById('practice-options');
const practiceSelection = document.getElementById('practice-selection');
const quizResults = document.getElementById('quiz-results');


// State
let currentMode = 'learning';
let currentVerbIndex = 0;
let currentTenseIndex = 0;
let completedVerbs = 0;
let totalVerbs = verbs.length;
let practiceMode = '';
let practiceVerbs = [];
let completedQuestions = 0;
let totalQuestions = 0;
let correctAnswers = 0;

// Event Listeners
learningBtn.addEventListener('click', () => setMode('learning'));
practiceBtn.addEventListener('click', () => setMode('practice'));
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

function renderPracticeVerbs() {
    practiceVerbs.innerHTML = verbs.map(verb => 
        `<button class="btn" onclick="startPractice('${verb.id}')">${verb.baseForm}</button>`
    ).join('');
}

function disableAnswerButtons() {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => button.disabled = true);
}

function enableAnswerButtons() {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => button.disabled = false);
}

// Functions
function renderVerbList() {
    const groups = {};
    verbs.forEach(verb => {
        if (!groups[verb.group]) {
            groups[verb.group] = [];
        }
        groups[verb.group].push(verb);
    });

    // Sort groups alphabetically
    const sortedGroups = Object.keys(groups).sort().reduce(
        (obj, key) => { 
            obj[key] = groups[key]; 
            return obj;
        }, 
        {}
    );

    verbList.innerHTML = Object.entries(sortedGroups).map(([group, groupVerbs]) => `
        <div class="verb-group">
            <div class="verb-group-title">${group}</div>
            ${groupVerbs.map(verb => 
                `<button class="btn" onclick="selectVerb('${verb.id}')">${verb.baseForm}</button>`
            ).join('')}
        </div>
    `).join('');
}


function selectVerb(verbId) {
    if (currentMode === 'learning') {
        showStory(verbId);
    } else {
        startPractice(verbId);
    }
}

function showStory(verbId) {
    const verb = verbs.find(v => v.id === verbId);
    const story = stories.find(s => s.verbId === verbId);
    storyDiv.innerHTML = `
        <h3>${verb.baseForm}</h3>
        <p><strong>Definition:</strong> ${verb.definition}</p>
        <p>${story.past}</p>
        <p>${story.present}</p>
        <p>${story.future}</p>
    `;
}

function resetPractice() {
    currentVerbIndex = 0;
    currentTenseIndex = 0;
    completedVerbs = 0;
    updateProgressBar();
    updateQuestionStatus();
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function setMode(mode) {
    currentMode = mode;
    if (mode === 'learning') {
        learningBtn.classList.add('active');
        practiceBtn.classList.remove('active');
        learningSection.style.display = 'block';
        practiceSection.style.display = 'none';
    } else {
        learningBtn.classList.remove('active');
        practiceBtn.classList.add('active');
        learningSection.style.display = 'none';
        practiceSection.style.display = 'block';
        practiceOptions.style.display = 'block';
        practiceSelection.style.display = 'none';
        practiceQuestion.innerHTML = '';
        feedbackDiv.innerHTML = '';
        nextBtn.style.display = 'none';
        quizResults.style.display = 'none';
    }
}

function setPracticeMode(mode) {
    practiceMode = mode;
    practiceOptions.style.display = 'none';
    practiceSelection.style.display = 'block';
    
    switch(mode) {
        case 'single':
            renderVerbList(practiceSelection);
            break;
        case 'group':
            renderVerbGroups();
            break;
        case 'random':
            startRandomPractice();
            break;
    }
}

function renderVerbGroups() {
    const groups = [...new Set(verbs.map(verb => verb.group))].sort();
    practiceSelection.innerHTML = groups.map(group => 
        `<button class="btn" onclick="startGroupPractice('${group}')">${group}</button>`
    ).join('');
}

function startSingleVerbPractice(verbId) {
    practiceVerbs = [verbs.find(v => v.id === verbId)];
    startPractice();
}

function startGroupPractice(group) {
    practiceVerbs = verbs.filter(v => v.group === group);
    startPractice();
}

function startRandomPractice() {
    practiceVerbs = shuffle([...verbs]).slice(0, 10);
    startPractice();
}

function startPractice() {
    currentVerbIndex = 0;
    currentTenseIndex = 0;
    completedQuestions = 0;
    correctAnswers = 0;
    totalQuestions = practiceVerbs.length * 3; // 3 tenses per verb
    updateProgressBar();
    presentQuestion();
    practiceSelection.style.display = 'none';
}

function presentQuestion() {
    if (currentVerbIndex >= practiceVerbs.length) {
        endPractice();
        return;
    }

    const verb = practiceVerbs[currentVerbIndex];
    const story = stories.find(s => s.verbId === verb.id);
    const tenses = ['past', 'present', 'future'];
    const correctTense = tenses[currentTenseIndex];
    
    let question = story[correctTense].replace(verb[correctTense], '___');
    
    const answers = shuffle(tenses.map(tense => ({
        tense: tense,
        text: verb[tense],
        isCorrect: tense === correctTense
    })));
    
    practiceQuestion.innerHTML = `
        <p>${question}</p>
        ${answers.map(answer => 
            `<button class="btn answer-btn" onclick="checkAnswer('${answer.tense}', '${correctTense}')">${answer.text}</button>`
        ).join('')}
    `;
    feedbackDiv.innerHTML = '';
    nextBtn.style.display = 'none';
    enableAnswerButtons();
    updateQuestionStatus();
}

function checkAnswer(selectedTense, correctTense) {
    completedQuestions++;
    if (selectedTense === correctTense) {
        correctAnswers++;
        feedbackDiv.innerHTML = '<p class="feedback correct">Correct! Well done! 🎉</p>';
    } else {
        feedbackDiv.innerHTML = `<p class="feedback incorrect">Incorrect. The correct answer was: ${correctTense} 😕</p>`;
    }
    nextBtn.style.display = 'inline-block';
    disableAnswerButtons();
    updateProgressBar();
}

function nextQuestion() {
    currentTenseIndex++;
    if (currentTenseIndex >= 3) {
        currentTenseIndex = 0;
        currentVerbIndex++;
    }
    presentQuestion();
}

function updateProgressBar() {
    const progress = (completedQuestions / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
}

function updateQuestionStatus() {
    const currentQuestion = completedQuestions + 1;
    questionStatus.textContent = `Question ${currentQuestion} of ${totalQuestions}`;
}

function endPractice() {
    const accuracy = (correctAnswers / totalQuestions) * 100;
    quizResults.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your accuracy: ${accuracy.toFixed(2)}%</p>
        <p>Correct answers: ${correctAnswers} out of ${totalQuestions}</p>
        <button class="btn" onclick="setMode('practice')">Practice Again</button>
    `;
    quizResults.style.display = 'block';
    practiceQuestion.innerHTML = '';
    feedbackDiv.innerHTML = '';
    nextBtn.style.display = 'none';
    questionStatus.textContent = '';
}

// Initialize app
setMode('learning');
renderVerbList(verbList);
