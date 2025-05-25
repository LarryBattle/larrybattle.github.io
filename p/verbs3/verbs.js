// verbs.js
const allVerbsData = [
    // Group: Basic Actions & Existence
    {
        verb: "be",
        tenses: { present: "am/is/are", past: "was/were", pastParticiple: "been", presentParticiple: "being" },
        meaning: "to exist, state of being",
        image: "🙂",
        group: "Basic Actions & Existence",
        examples: [
            "I AM happy.",
            "The cat IS fluffy.",
            "They ARE friends."
        ]
    },
    {
        verb: "have",
        tenses: { present: "have/has", past: "had", pastParticiple: "had", presentParticiple: "having" },
        meaning: "to own, possess, experience",
        image: "🎁",
        group: "Basic Actions & Existence",
        examples: [
            "I HAVE a blue car.",
            "She HAS a good idea.",
            "We HAD fun at the party."
        ]
    },
    {
        verb: "do",
        tenses: { present: "do/does", past: "did", pastParticiple: "done", presentParticiple: "doing" },
        meaning: "to perform an action",
        image: "💪",
        group: "Basic Actions & Existence",
        examples: [
            "I DO my homework every day.",
            "He DOES his chores.",
            "What did you DO yesterday?"
        ]
    },
    {
        verb: "go",
        tenses: { present: "go/goes", past: "went", pastParticiple: "gone", presentParticiple: "going" },
        meaning: "to move from one place to another",
        image: "🚶‍♀️",
        group: "Movement",
        examples: [
            "We GO to the park on Saturdays.",
            "She GOES to school by bus.",
            "They WENT to the beach last summer."
        ]
    },
    {
        verb: "come",
        tenses: { present: "come/comes", past: "came", pastParticiple: "come", presentParticiple: "coming" },
        meaning: "to move towards",
        image: "➡️",
        group: "Movement",
        examples: [
            "COME here, please!",
            "My friend COMES to my house.",
            "The cat CAME back."
        ]
    },
    {
        verb: "eat",
        tenses: { present: "eat/eats", past: "ate", pastParticiple: "eaten", presentParticiple: "eating" },
        meaning: "to consume food",
        image: "🍎",
        group: "Basic Actions & Existence",
        examples: [
            "I EAT breakfast at 7 AM.",
            "The dog EATS its food quickly.",
            "We ATE pizza for dinner."
        ]
    },
    {
        verb: "drink",
        tenses: { present: "drink/drinks", past: "drank", pastParticiple: "drunk", presentParticiple: "drinking" },
        meaning: "to consume liquid",
        image: "🥤",
        group: "Basic Actions & Existence",
        examples: [
            "DRINK plenty of water.",
            "He DRINKS milk every morning.",
            "I DRANK juice with my lunch."
        ]
    },

    // Group: Communication
    {
        verb: "say",
        tenses: { present: "say/says", past: "said", pastParticiple: "said", presentParticiple: "saying" },
        meaning: "to speak words",
        image: "🗣️",
        group: "Communication",
        examples: [
            "She SAYS hello to everyone.",
            "What did you SAY?",
            "He SAID he was tired."
        ]
    },
    {
        verb: "tell",
        tenses: { present: "tell/tells", past: "told", pastParticiple: "told", presentParticiple: "telling" },
        meaning: "to communicate information to someone",
        image: "💬",
        group: "Communication",
        examples: [
            "TELL me a story.",
            "My mom TELLS me to clean my room.",
            "She TOLD him a secret."
        ]
    },
    {
        verb: "ask",
        tenses: { present: "ask/asks", past: "asked", pastParticiple: "asked", presentParticiple: "asking" },
        meaning: "to request information or a response",
        image: "❓",
        group: "Communication",
        examples: [
            "ASK a question if you don't understand.",
            "She ASKS for help.",
            "I ASKED my teacher about the homework."
        ]
    },
    {
        verb: "call",
        tenses: { present: "call/calls", past: "called", pastParticiple: "called", presentParticiple: "calling" },
        meaning: "to phone someone or give a name",
        image: "📞",
        group: "Communication",
        examples: [
            "I will CALL you later.",
            "She CALLS her grandmother every week.",
            "They CALLED the dog 'Max'."
        ]
    },

    // Group: Senses & Perception
    {
        verb: "see",
        tenses: { present: "see/sees", past: "saw", pastParticiple: "seen", presentParticiple: "seeing" },
        meaning: "to perceive with eyes",
        image: "👀",
        group: "Senses & Perception",
        examples: [
            "I SEE a bird in the tree.",
            "He SEES his friends at school.",
            "I SAW a movie last night."
        ]
    },
    {
        verb: "look",
        tenses: { present: "look/looks", past: "looked", pastParticiple: "looked", presentParticiple: "looking" },
        meaning: "to direct one's gaze in a particular direction",
        image: "🧐",
        group: "Senses & Perception",
        examples: [
            "LOOK at the beautiful flowers!",
            "She LOOKS happy today.",
            "He LOOKED for his keys."
        ]
    },
    {
        verb: "watch",
        tenses: { present: "watch/watches", past: "watched", pastParticiple: "watched", presentParticiple: "watching" },
        meaning: "to look at for a period of time",
        image: "📺",
        group: "Senses & Perception",
        examples: [
            "We WATCH cartoons on Saturday mornings.",
            "He WATCHES the birds fly.",
            "They WATCHED a football game."
        ]
    },
    {
        verb: "listen",
        tenses: { present: "listen/listens", past: "listened", pastParticiple: "listened", presentParticiple: "listening" },
        meaning: "to pay attention to sound",
        image: "👂",
        group: "Senses & Perception",
        examples: [
            "LISTEN to the music.",
            "She LISTENS carefully to the teacher.",
            "I LISTENED to a podcast yesterday."
        ]
    },
    {
        verb: "feel",
        tenses: { present: "feel/feels", past: "felt", pastParticiple: "felt", presentParticiple: "feeling" },
        meaning: "to experience an emotion or sensation",
        image: "😊",
        group: "Senses & Perception",
        examples: [
            "I FEEL happy when I play.",
            "The cat's fur FEELS soft.",
            "She FELT tired after the long day."
        ]
    },

    // Group: Creation & Doing
    {
        verb: "make",
        tenses: { present: "make/makes", past: "made", pastParticiple: "made", presentParticiple: "making" },
        meaning: "to create or construct",
        image: "🛠️",
        group: "Creation & Doing",
        examples: [
            "Let's MAKE a sandcastle.",
            "Mom MAKES delicious cookies.",
            "He MADE a drawing for his friend."
        ]
    },
    {
        verb: "get",
        tenses: { present: "get/gets", past: "got", pastParticiple: "gotten/got", presentParticiple: "getting" },
        meaning: "to receive, obtain, or become",
        image: "🛍️",
        group: "Creation & Doing",
        examples: [
            "I GET good grades in school.",
            "She GETS a new toy for her birthday.",
            "It's GETTING late."
        ]
    },
    {
        verb: "work",
        tenses: { present: "work/works", past: "worked", pastParticiple: "worked", presentParticiple: "working" },
        meaning: "to do a job or task",
        image: "💼",
        group: "Creation & Doing",
        examples: [
            "My dad WORKS in an office.",
            "This machine WORKS very well.",
            "We WORKED hard on the project."
        ]
    },
    {
        verb: "use",
        tenses: { present: "use/uses", past: "used", pastParticiple: "used", presentParticiple: "using" },
        meaning: "to employ for a purpose",
        image: "✏️",
        group: "Creation & Doing",
        examples: [
            "I USE a pencil to write.",
            "She USES a computer for her homework.",
            "Can I USE your phone?"
        ]
    },
    {
        verb: "try",
        tenses: { present: "try/tries", past: "tried", pastParticiple: "tried", presentParticiple: "trying" },
        meaning: "to attempt to do something",
        image: "🧗",
        group: "Creation & Doing",
        examples: [
            "TRY your best in the game.",
            "He TRIES to learn new things.",
            "I TRIED to open the jar, but it was stuck."
        ]
    },
    {
        verb: "find",
        tenses: { present: "find/finds", past: "found", pastParticiple: "found", presentParticiple: "finding" },
        meaning: "to discover something",
        image: "🔍",
        group: "Creation & Doing",
        examples: [
            "I can't FIND my keys.",
            "She FINDS interesting books in the library.",
            "He FOUND a lost puppy."
        ]
    },

    // Group: Cognition & Learning
    {
        verb: "think",
        tenses: { present: "think/thinks", past: "thought", pastParticiple: "thought", presentParticiple: "thinking" },
        meaning: "to use one's mind to consider or reason",
        image: "💡",
        group: "Cognition & Learning",
        examples: [
            "I THINK it will rain today.",
            "She THINKS about her future.",
            "What do you THINK of this idea?"
        ]
    },
    {
        verb: "know",
        tenses: { present: "know/knows", past: "knew", pastParticiple: "known", presentParticiple: "knowing" },
        meaning: "to have information or understanding",
        image: "🧠",
        group: "Cognition & Learning",
        examples: [
            "I KNOW the answer!",
            "He KNOWS how to swim.",
            "She KNEW him from school."
        ]
    },
    {
        verb: "learn",
        tenses: { present: "learn/learns", past: "learned/learnt", pastParticiple: "learned/learnt", presentParticiple: "learning" },
        meaning: "to gain knowledge or skill",
        image: "🧑‍🎓",
        group: "Cognition & Learning",
        examples: [
            "We LEARN new things every day.",
            "She LEARNS to play the piano.",
            "I LEARNED a lot from that book."
        ]
    },
    {
        verb: "teach",
        tenses: { present: "teach/teaches", past: "taught", pastParticiple: "taught", presentParticiple: "teaching" },
        meaning: "to show or explain how to do something",
        image: "🧑‍🏫",
        group: "Cognition & Learning",
        examples: [
            "My teacher TEACHES us math.",
            "Can you TEACH me how to play chess?",
            "He TAUGHT his dog a new trick."
        ]
    },
    {
        verb: "read",
        tenses: { present: "read/reads", past: "read", pastParticiple: "read", presentParticiple: "reading" },
        meaning: "to look at and understand words",
        image: "📖",
        group: "Artistic & Play",
        examples: [
            "I like to READ adventure stories.",
            "She READS a book before bed.",
            "He READ the newspaper this morning."
        ]
    },
    {
        verb: "write",
        tenses: { present: "write/writes", past: "wrote", pastParticiple: "written", presentParticiple: "writing" },
        meaning: "to mark letters or words on a surface",
        image: "✍️",
        group: "Artistic & Play",
        examples: [
            "WRITE your name on the paper.",
            "He WRITES poems in his free time.",
            "She WROTE a letter to her friend."
        ]
    },

    // Group: Movement (Continued)
    {
        verb: "run",
        tenses: { present: "run/runs", past: "ran", pastParticiple: "run", presentParticiple: "running" },
        meaning: "to move fast on foot",
        image: "🏃",
        group: "Movement",
        examples: [
            "Dogs love to RUN in the park.",
            "He RUNS every morning for exercise.",
            "She RAN a marathon last year."
        ]
    },
    {
        verb: "jump",
        tenses: { present: "jump/jumps", past: "jumped", pastParticiple: "jumped", presentParticiple: "jumping" },
        meaning: "to push off ground with feet",
        image: "🤸",
        group: "Movement",
        examples: [
            "Frogs can JUMP very high.",
            "The children JUMP on the trampoline.",
            "He JUMPED over the puddle."
        ]
    },
    {
        verb: "fly",
        tenses: { present: "fly/flies", past: "flew", pastParticiple: "flown", presentParticiple: "flying" },
        meaning: "to move through air with wings or in aircraft",
        image: "🕊️",
        group: "Movement",
        examples: [
            "Birds FLY in the sky.",
            "We will FLY to Paris next month.",
            "The kite FLEW high above the trees."
        ]
    },
    {
        verb: "swim",
        tenses: { present: "swim/swims", past: "swam", pastParticiple: "swum", presentParticiple: "swimming" },
        meaning: "to propel oneself through water",
        image: "🏊",
        group: "Movement",
        examples: [
            "Fish SWIM in the sea.",
            "I like to SWIM in the summer.",
            "She SWAM across the lake."
        ]
    },
    {
        verb: "dance",
        tenses: { present: "dance/dances", past: "danced", pastParticiple: "danced", presentParticiple: "dancing" },
        meaning: "to move rhythmically to music",
        image: "💃",
        group: "Artistic & Play",
        examples: [
            "They DANCE beautifully together.",
            "Let's DANCE to this song!",
            "We DANCED all night at the party."
        ]
    },

    // Group: Daily Routine & Household
    {
        verb: "sleep",
        tenses: { present: "sleep/sleeps", past: "slept", pastParticiple: "slept", presentParticiple: "sleeping" },
        meaning: "to rest with eyes closed",
        image: "😴",
        group: "Daily Routine & Household",
        examples: [
            "The baby is SLEEPING peacefully.",
            "I SLEEP for eight hours every night.",
            "The cat SLEPT on the sofa."
        ]
    },
    {
        verb: "wake (up)",
        tenses: { present: "wake/wakes", past: "woke", pastParticiple: "woken", presentParticiple: "waking" },
        meaning: "to stop sleeping",
        image: "⏰",
        group: "Daily Routine & Household",
        examples: [
            "I WAKE UP at 7 AM on weekdays.",
            "The alarm clock WAKES me up.",
            "She WOKE UP early this morning."
        ]
    },
    {
        verb: "open",
        tenses: { present: "open/opens", past: "opened", pastParticiple: "opened", presentParticiple: "opening" },
        meaning: "to move so as to allow access",
        image: "🔓",
        group: "Daily Routine & Household",
        examples: [
            "OPEN the door, please.",
            "He OPENS the window to get fresh air.",
            "She OPENED her presents."
        ]
    },
    {
        verb: "close",
        tenses: { present: "close/closes", past: "closed", pastParticiple: "closed", presentParticiple: "closing" },
        meaning: "to move so as to block entry",
        image: "🔐",
        group: "Daily Routine & Household",
        examples: [
            "CLOSE the window, it's cold.",
            "The shop CLOSES at 9 PM.",
            "He CLOSED his book and went to sleep."
        ]
    },
    {
        verb: "clean",
        tenses: { present: "clean/cleans", past: "cleaned", pastParticiple: "cleaned", presentParticiple: "cleaning" },
        meaning: "to make free from dirt",
        image: "🧹",
        group: "Daily Routine & Household",
        examples: [
            "CLEAN your room before you play.",
            "She CLEANS the house every weekend.",
            "I CLEANED the kitchen after dinner."
        ]
    },
    {
        verb: "wash",
        tenses: { present: "wash/washes", past: "washed", pastParticiple: "washed", presentParticiple: "washing" },
        meaning: "to clean with water and soap",
        image: "🧼",
        group: "Daily Routine & Household",
        examples: [
            "WASH your hands before eating.",
            "He WASHES his car on Sundays.",
            "She WASHED the dishes."
        ]
    },
    {
        verb: "cook",
        tenses: { present: "cook/cooks", past: "cooked", pastParticiple: "cooked", presentParticiple: "cooking" },
        meaning: "to prepare food by heating",
        image: "🍳",
        group: "Daily Routine & Household",
        examples: [
            "My dad can COOK delicious pasta.",
            "She COOKS dinner for her family.",
            "We COOKED a big meal for the holidays."
        ]
    },

    // Group: Interaction & Play
    {
        verb: "play",
        tenses: { present: "play/plays", past: "played", pastParticiple: "played", presentParticiple: "playing" },
        meaning: "to engage in activity for fun",
        image: "⚽",
        group: "Artistic & Play",
        examples: [
            "Let's PLAY a game together.",
            "Children PLAY in the park.",
            "He PLAYED football with his friends."
        ]
    },
    {
        verb: "sing",
        tenses: { present: "sing/sings", past: "sang", pastParticiple: "sung", presentParticiple: "singing" },
        meaning: "to make musical sounds with voice",
        image: "🎤",
        group: "Artistic & Play",
        examples: [
            "She SINGS beautifully.",
            "We SING songs around the campfire.",
            "He SANG his favorite tune."
        ]
    },
    {
        verb: "draw",
        tenses: { present: "draw/draws", past: "drew", pastParticiple: "drawn", presentParticiple: "drawing" },
        meaning: "to make a picture with a pen or pencil",
        image: "🎨",
        group: "Artistic & Play",
        examples: [
            "I like to DRAW animals.",
            "She DRAWS amazing portraits.",
            "He DREW a map of the treasure."
        ]
    },
    {
        verb: "help",
        tenses: { present: "help/helps", past: "helped", pastParticiple: "helped", presentParticiple: "helping" },
        meaning: "to assist someone",
        image: "🤝",
        group: "Interaction",
        examples: [
            "Can you HELP me with this bag?",
            "She always HELPS her classmates.",
            "He HELPED his neighbor fix the fence."
        ]
    },
    {
        verb: "give",
        tenses: { present: "give/gives", past: "gave", pastParticiple: "given", presentParticiple: "giving" },
        meaning: "to hand over or present",
        image: "🤲",
        group: "Interaction",
        examples: [
            "GIVE me the book, please.",
            "He GIVES presents on birthdays.",
            "She GAVE her friend a hug."
        ]
    },
    {
        verb: "leave",
        tenses: { present: "leave/leaves", past: "left", pastParticiple: "left", presentParticiple: "leaving" },
        meaning: "to go away from",
        image: "🚪",
        group: "Interaction",
        examples: [
            "We have to LEAVE now.",
            "He LEAVES for work at 8 AM.",
            "She LEFT her keys on the table."
        ]
    },
    {
        verb: "sit",
        tenses: { present: "sit/sits", past: "sat", pastParticiple: "sat", presentParticiple: "sitting" },
        meaning: "to rest one's bottom",
        image: "🪑",
        group: "Interaction",
        examples: [
            "SIT down and relax.",
            "The cat SITS on the windowsill.",
            "We SAT by the fireplace."
        ]
    },
    {
        verb: "stand",
        tenses: { present: "stand/stands", past: "stood", pastParticiple: "stood", presentParticiple: "standing" },
        meaning: "to be upright on one's feet",
        image: "🧍",
        group: "Interaction",
        examples: [
            "STAND up when the teacher enters.",
            "He STANDS tall and proud.",
            "She STOOD in line for tickets."
        ]
    },
    {
        verb: "want",
        tenses: { present: "want/wants", past: "wanted", pastParticiple: "wanted", presentParticiple: "wanting" },
        meaning: "to desire or wish for",
        image: "🍦",
        group: "Basic Actions & Existence",
        examples: [
            "I WANT an ice cream.",
            "She WANTS to be a doctor.",
            "They WANTED to go to the zoo."
        ]
    },
    {
        verb: "seem",
        tenses: { present: "seem/seems", past: "seemed", pastParticiple: "seemed", presentParticiple: "seeming" },
        meaning: "to appear to be",
        image: "🤔",
        group: "Senses & Perception", // Could also be basic existence/state
        examples: [
            "It SEEMS like it might rain.",
            "She SEEMS happy with her new toy.",
            "He SEEMED a little sad yesterday."
        ]
    }
    // Ensure we have 50 verbs. This list is approximately 50. Adjust as needed.
];