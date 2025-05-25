// app.js
const { createApp, ref, computed, onMounted } = Vue;

const app = createApp({
    data() {
        return {
            allVerbs: allVerbsData, // from verbs.js
            currentView: 'home', // home, groupSelection, lesson, quiz, quizResults, cheatsheet, tenseLookup
            currentGroup: null,
            currentVerbsInLesson: [],
            currentItemIndex: 0,
            // Quiz state
            currentVerbsInQuiz: [],
            quizQuestionIndex: 0,
            quizScore: 0,
            quizPrompt: {},
            quizOptions: [],
            quizFeedback: '',
            quizFeedbackCorrect: false,
            answerChecked: false,
            celebrationMessage: '',
            // Tense Lookup
            tenseSearchTerm: '',
        };
    },
    computed: {
        verbGroups() {
            const groups = new Set();
            this.allVerbs.forEach(verb => groups.add(verb.group));
            return Array.from(groups).sort();
        },
        currentVerb() {
            if (this.currentVerbsInLesson.length > 0) {
                return this.currentVerbsInLesson[this.currentItemIndex];
            }
            return null;
        },
        progressBarWidth() {
            if (!this.currentVerbsInLesson.length) return 0;
            return ((this.currentItemIndex + 1) / this.currentVerbsInLesson.length) * 100;
        },
        currentQuizVerb() {
            if (this.currentVerbsInQuiz.length > 0) {
                return this.currentVerbsInQuiz[this.quizQuestionIndex];
            }
            return null;
        },
        quizProgressBarWidth() {
            if (!this.currentVerbsInQuiz.length) return 0;
            // Progress based on questions attempted, not just index for next question
            return (this.quizQuestionIndex / this.currentVerbsInQuiz.length) * 100;
        },
        groupedVerbsForCheatsheet() {
            const groups = {};
            this.allVerbs.forEach(verb => {
                if (!groups[verb.group]) {
                    groups[verb.group] = [];
                }
                groups[verb.group].push(verb);
            });
            // Sort verbs within each group alphabetically
            for (const group in groups) {
                groups[group].sort((a, b) => a.verb.localeCompare(b.verb));
            }
            return groups;
        },
        filteredVerbsForLookup() {
            if (!this.tenseSearchTerm.trim()) {
                // Sort all verbs alphabetically if no search term
                return [...this.allVerbs].sort((a, b) => a.verb.localeCompare(b.verb));
            }
            const searchTermLower = this.tenseSearchTerm.toLowerCase();
            return this.allVerbs
                .filter(verb => verb.verb.toLowerCase().includes(searchTermLower))
                .sort((a, b) => a.verb.localeCompare(b.verb));
        }
    },
    methods: {
        setView(viewName) {
            this.currentView = viewName;
            if (viewName === 'tenseLookup') {
                this.tenseSearchTerm = ''; // Reset search on view change
            }
        },
        getVerbsByGroup(groupName) {
            return this.allVerbs.filter(verb => verb.group === groupName);
        },
        startLessonOrQuiz(groupName, mode = 'lesson') {
            this.currentGroup = groupName;
            const verbsForGroup = this.shuffleArray([...this.getVerbsByGroup(groupName)]); // Shuffle for variety

            if (mode === 'lesson') {
                this.currentVerbsInLesson = verbsForGroup;
                this.currentItemIndex = 0;
                this.setView('lesson');
            } else if (mode === 'quiz') {
                this.currentVerbsInQuiz = verbsForGroup;
                this.quizQuestionIndex = 0;
                this.quizScore = 0;
                this.answerChecked = false;
                this.quizFeedback = '';
                this.generateQuizQuestion();
                this.setView('quiz');
            }
        },
        nextItem() {
            if (this.currentItemIndex < this.currentVerbsInLesson.length - 1) {
                this.currentItemIndex++;
            }
        },
        prevItem() {
            if (this.currentItemIndex > 0) {
                this.currentItemIndex--;
            }
        },
        startQuizForCurrentGroup() {
            this.startLessonOrQuiz(this.currentGroup, 'quiz');
        },
        generateQuizQuestion() {
            if (!this.currentQuizVerb) return;
            this.answerChecked = false;
            this.quizFeedback = '';

            const verb = this.currentQuizVerb;
            // Randomly pick an example sentence and blank out the verb
            const exampleSentence = verb.examples[Math.floor(Math.random() * verb.examples.length)];
            const verbRegex = new RegExp(`\\b${verb.verb.split('/')[0]}\\b`, 'i'); // Use first form for regex
            
            this.quizPrompt = {
                image: verb.image,
                sentence: exampleSentence.replace(verbRegex, "_______"),
                text: "" // Could add: "What is the verb?"
            };

            let options = [verb.verb.split('/')[0]]; // Use primary form of verb for options
            while (options.length < 4) {
                const randomVerbObj = this.allVerbs[Math.floor(Math.random() * this.allVerbs.length)];
                const randomVerbPrimaryForm = randomVerbObj.verb.split('/')[0];
                if (!options.includes(randomVerbPrimaryForm)) {
                    options.push(randomVerbPrimaryForm);
                }
            }
            this.quizOptions = this.shuffleArray(options);
        },
        checkAnswer(selectedOption) {
            this.answerChecked = true;
            const correctVerbPrimaryForm = this.currentQuizVerb.verb.split('/')[0];
            if (selectedOption.toLowerCase() === correctVerbPrimaryForm.toLowerCase()) {
                this.quizFeedback = "Correct! 🎉 You're a star!";
                this.quizFeedbackCorrect = true;
                this.quizScore++;
            } else {
                this.quizFeedback = `Oops! The correct answer was "${correctVerbPrimaryForm}". Keep trying! 🤔`;
                this.quizFeedbackCorrect = false;
            }
        },
        getOptionStyle(option) {
            if (!this.answerChecked) return {};
            const correctVerbPrimaryForm = this.currentQuizVerb.verb.split('/')[0];
            if (option.toLowerCase() === correctVerbPrimaryForm.toLowerCase()) {
                return { backgroundColor: '#90ee90', borderColor: 'green' }; // Light green for correct
            } else if (this.quizOptions.find(o => o.toLowerCase() === option.toLowerCase() && o.toLowerCase() !== correctVerbPrimaryForm.toLowerCase()) &&
                       this.quizFeedback && !this.quizFeedbackCorrect &&
                       this.quizOptions.find(o => o.toLowerCase() === option.toLowerCase()) === this.quizOptions.find(o => this.quizFeedback.toLowerCase().includes(`was "${o.toLowerCase()}"`) || this.quizFeedback.toLowerCase().includes(`was "${o.toLowerCase()}"`))) {
                 // this is messy, essentially checking if the button was the one picked *and* it was wrong
                 // A simpler way is to store `selectedAnswer` in data
            }
             // Default style if not the correct one, or if it's an incorrect one that wasn't selected
            return {};
        },
        nextQuizQuestion() {
            if (this.quizQuestionIndex < this.currentVerbsInQuiz.length - 1) {
                this.quizQuestionIndex++;
                this.generateQuizQuestion();
            } else {
                this.showQuizResults();
            }
        },
        showQuizResults() {
            let percentage = (this.quizScore / this.currentVerbsInQuiz.length) * 100;
            this.celebrationMessage = `Quiz Complete for ${this.currentGroup}! You scored ${this.quizScore} out of ${this.currentVerbsInQuiz.length} (${percentage.toFixed(0)}%). `;
            if (percentage === 100) {
                this.celebrationMessage += "Perfect score! You're a Verb Master! 🌟🏆";
            } else if (percentage >= 70) {
                this.celebrationMessage += "Great job! Keep up the fantastic work! 👍";
            } else if (percentage >= 50) {
                this.celebrationMessage += "Good effort! A little more practice and you'll nail it! 😊";
            } else {
                this.celebrationMessage += "Nice try! Review the verbs and try the quiz again soon! 💪";
            }
            this.setView('quizResults');
        },
        printCheatsheet() {
            window.print();
        },
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
    },
    mounted() {
        // console.log("App mounted, verbs loaded:", this.allVerbs.length);
        // You could decide a default view here if needed, e.g.
        // if (!this.currentView) this.setView('home');
    }
});

app.mount('#app');