const verbs = [];
const stories = [];
let verbIndex = 0;

// Functions to add verbs and stories
function addVerb(id, baseForm, past, present, future, group, definition) {
    if(verbs.find(v => v.id == id)){ console.error(`Already have ${id}`)}
    verbs.push({ id, baseForm, past, present, future, group, definition });
    verbIndex++;
}

function addStory(verbId, past, present, future) {
    stories.push({ verbId, past, present, future });
}

// 1. Be
addVerb('be', 'be', 'was/were', 'being', 'will be', 'Helping Verbs',
    'Used to describe the state of something or someone. It\'s different from action verbs as it doesn\'t show action.');
addStory('be',
    'Yesterday, I was very tired after school.',
    'Right now, I am being careful with my homework.',
    'Tomorrow, I will be excited for the field trip.');

// 2. Have
addVerb('have', 'have', 'had', 'having', 'will have', 'Possession and Giving',
    'Used to show possession or to form perfect tenses. It\'s different from "own" as it can be used for temporary possession.');
addStory('have',
    'Last week, I had a cold and stayed home.',
    'I am having a great time at the party now.',
    'Next year, I will have a new teacher.');

// 3. Do
addVerb('do', 'do', 'did', 'doing', 'will do', 'Basic Actions',
    'Used to perform an action or as a helping verb in questions and negatives. It\'s more general than specific action verbs.');
addStory('do',
    'I did my homework before dinner yesterday.',
    'I am doing my best to learn new things.',
    'I will do better on the next test.');

// 4. Say
addVerb('say', 'say', 'said', 'saying', 'will say', 'Communication',
    'Used to express words or opinions. It\'s different from "tell" as it doesn\'t require a direct object.');
addStory('say',
    'The teacher said we did a good job.',
    'My mom is saying it\'s time for bed.',
    'I will say "thank you" when I get a gift.');

// 5. Go
addVerb('go', 'go', 'went', 'going', 'will go', 'Movement',
    'Used to move from one place to another. It\'s different from "come" as it indicates movement away from the current location.');
addStory('go',
    'We went to the park last Saturday.',
    'I am going to the library now.',
    'They will go on vacation next month.');

// 6. Get
addVerb('get', 'get', 'got', 'getting', 'will get', 'Basic Actions',
    'Used to obtain or receive something. It\'s more versatile than "receive" and can be used in many contexts.');
addStory('get',
    'I got a new bike for my birthday last month.',
    'She is getting better at math every day.',
    'We will get the test results next week.');

// 7. Make
addVerb('make', 'make', 'made', 'making', 'will make', 'Basic Actions',
    'Used to create or produce something. It\'s different from "do" as it usually results in a tangible object or outcome.');
addStory('make',
    'We made cookies for the bake sale yesterday.',
    'The chef is making a delicious meal right now.',
    'I will make my bed every morning next week.');

// 8. Know
addVerb('know', 'know', 'knew', 'knowing', 'will know', 'Thinking and Feeling',
    'Used to have information or be aware of something. It\'s different from "think" as it implies certainty.');
addStory('know',
    'I knew the answer to the question in class.',
    'She is knowing more about science every day.',
    'We will know the results of the competition tomorrow.');

// 9. Think
addVerb('think', 'think', 'thought', 'thinking', 'will think', 'Thinking and Feeling',
    'Used to form opinions or consider ideas. It\'s different from "know" as it implies less certainty and more active mental processing.');
addStory('think',
    'I thought the movie was exciting.',
    'He is thinking about his next move in the game.',
    'We will think carefully before making a decision.');

// 10. See
addVerb('see', 'see', 'saw', 'seeing', 'will see', 'Senses',
    'Used to perceive with the eyes or understand. It\'s different from "look" as it doesn\'t imply intention or effort.');
addStory('see',
    'We saw a beautiful rainbow after the rain.',
    'I am seeing improvements in my handwriting.',
    'They will see their grandparents during the holidays.');

// console.log(`Progress: ${verbIndex} verbs added out of 50`);

// v3: ========================
// ... [Previous code remains the same]

// 11. Come
addVerb('come', 'come', 'came', 'coming', 'will come', 'Movement',
    'Used to move towards a person or place. It\'s different from "go" as it indicates movement towards the speaker or a specified location.');
addStory('come',
    'My friends came to my house for a sleepover last night.',
    'The bus is coming around the corner now.',
    'Grandma will come to visit us next month.');

// 12. Want
addVerb('want', 'want', 'wanted', 'wanting', 'will want', 'Wanting and Needing',
    'Used to express desire or wish for something. It\'s different from "need" as it doesn\'t imply necessity, just preference.');
addStory('want',
    'I wanted to play outside, but it was raining.',
    'She is wanting to learn how to play the guitar.',
    'They will want to join the team after seeing how fun it is.');

// 13. Look
addVerb('look', 'look', 'looked', 'looking', 'will look', 'Senses',
    'Used to direct one\'s gaze or to search for something. It\'s different from "see" as it implies intentional action.');
addStory('look',
    'We looked for seashells on the beach yesterday.',
    'He is looking at the beautiful sunset right now.',
    'I will look both ways before crossing the street.');

// 14. Use
addVerb('use', 'use', 'used', 'using', 'will use', 'Basic Actions',
    'Used to employ something for a purpose. It\'s different from other action verbs as it always involves a tool or method.');
addStory('use',
    'I used colored pencils to draw a picture.',
    'She is using a calculator to solve math problems.',
    'We will use the new computer lab next semester.');

// 15. Find
addVerb('find', 'find', 'found', 'finding', 'will find', 'Basic Actions',
    'Used to discover or locate something. It\'s different from "look for" as it implies success in the search.');
addStory('find',
    'I found my lost toy under the bed.',
    'The detective is finding clues at the crime scene.',
    'We will find a solution to this problem soon.');

// 16. Give
addVerb('give', 'give', 'gave', 'giving', 'will give', 'Possession and Giving',
    'Used to transfer something to someone else. It\'s different from "take" as it focuses on the act of providing rather than receiving.');
addStory('give',
    'She gave me a beautiful card for my birthday.',
    'The teacher is giving us homework for the weekend.',
    'I will give my old toys to charity next month.');

// 17. Tell
addVerb('tell', 'tell', 'told', 'telling', 'will tell', 'Communication',
    'Used to communicate information to someone. It\'s different from "say" as it usually requires a direct object (the person being told).');
addStory('tell',
    'My mom told me to clean my room yesterday.',
    'The storyteller is telling an exciting tale right now.',
    'I will tell you the secret tomorrow.');

// 18. Work
addVerb('work', 'work', 'worked', 'working', 'will work', 'Basic Actions',
    'Used to perform a job or task. It\'s different from "play" as it implies effort towards a specific goal or duty.');
addStory('work',
    'My dad worked late at the office last night.',
    'The students are working on their science projects.',
    'We will work hard to improve our grades this year.');

// 19. Call
addVerb('call', 'call', 'called', 'calling', 'will call', 'Communication',
    'Used to contact someone by phone or to use one\'s voice to get attention. It\'s different from other communication verbs as it often involves distance or technology.');
addStory('call',
    'I called my grandmother on her birthday.',
    'The birds are calling to each other in the trees.',
    'She will call you back as soon as the meeting is over.');

// 20. Try
addVerb('try', 'try', 'tried', 'trying', 'will try', 'Basic Actions',
    'Used to attempt to do something. It\'s different from "do" as it implies effort without guaranteeing success.');
addStory('try',
    'I tried to solve the puzzle, but it was too difficult.',
    'He is trying to learn how to juggle.',
    'We will try our best to win the game tomorrow.');

// console.log(`Progress: ${verbIndex} verbs added out of 50`);

// v4: ========================

// 21. Ask
addVerb('ask', 'ask', 'asked', 'asking', 'will ask', 'Communication',
    'Used to request information or help. It\'s different from "tell" as it seeks information rather than giving it.');
addStory('ask',
    'I asked my teacher for help with the math problem.',
    'She is asking her parents for permission to go to the party.',
    'We will ask for directions if we get lost.');

// 22. Need
addVerb('need', 'need', 'needed', 'needing', 'will need', 'Wanting and Needing',
    'Used to express necessity or requirement. It\'s different from "want" as it implies something is essential, not just desired.');
addStory('need',
    'We needed warm coats for the winter trip.',
    'The plant is needing more water; its leaves are drooping.',
    'You will need to study hard for the upcoming test.');

// 23. Feel
addVerb('feel', 'feel', 'felt', 'feeling', 'will feel', 'Thinking and Feeling',
    'Used to experience emotions or physical sensations. It\'s different from "think" as it relates to emotions and physical senses rather than thoughts.');
addStory('feel',
    'I felt happy when I got an A on my test.',
    'He is feeling nervous about the presentation.',
    'They will feel proud after completing the project.');

// 24. Become
addVerb('become', 'become', 'became', 'becoming', 'will become', 'Starting and Ending',
    'Used to indicate a change of state or condition. It\'s different from "be" as it implies a transformation or development.');
addStory('become',
    'The caterpillar became a beautiful butterfly.',
    'She is becoming more confident in her abilities.',
    'I will become a doctor when I grow up.');

// 25. Leave
addVerb('leave', 'leave', 'left', 'leaving', 'will leave', 'Movement',
    'Used to depart from a place. It\'s different from "go" as it emphasizes the act of departing rather than the destination.');
addStory('leave',
    'We left the party early because we were tired.',
    'The train is leaving the station now.',
    'They will leave for their vacation tomorrow morning.');

// 26. Put
addVerb('put', 'put', 'put', 'putting', 'will put', 'Basic Actions',
    'Used to place something in a particular position. It\'s different from "get" as it involves moving an object to a specific location.');
addStory('put',
    'I put my toys away before dinner.',
    'She is putting the dishes in the dishwasher.',
    'We will put the decorations up for the party.');

// 27. Mean
addVerb('mean', 'mean', 'meant', 'meaning', 'will mean', 'Thinking and Feeling',
    'Used to indicate significance or intention. It\'s different from "say" as it relates to the underlying significance rather than the words used.');
addStory('mean',
    'I didn\'t mean to hurt your feelings.',
    'This symbol is meaning "peace" in many cultures.',
    'Your support will mean a lot to me during the competition.');

// 28. Keep
addVerb('keep', 'keep', 'kept', 'keeping', 'will keep', 'Basic Actions',
    'Used to continue having or doing something. It\'s different from "have" as it emphasizes retention or continuation.');
addStory('keep',
    'I kept my promise and didn\'t tell anyone the secret.',
    'She is keeping a diary of her summer adventures.',
    'We will keep practicing until we perfect our dance routine.');

// 29. Let
addVerb('let', 'let', 'let', 'letting', 'will let', 'Helping and Allowing',
    'Used to allow or permit something to happen. It\'s different from "make" as it involves allowing rather than forcing an action.');
addStory('let',
    'My parents let me stay up late on Friday night.',
    'The teacher is letting us work in groups for this project.',
    'I will let you borrow my book when I\'m finished reading it.');

// 30. Begin
addVerb('begin', 'begin', 'began', 'beginning', 'will begin', 'Starting and Ending',
    'Used to start doing or happening. It\'s different from "start" as it\'s often used in more formal contexts.');
addStory('begin',
    'The movie began with an exciting action scene.',
    'The flowers are beginning to bloom in the garden.',
    'School will begin next week after the summer break.');

// console.log(`Progress: ${verbIndex} verbs added out of 50`);
// v5: ========================
// ... [Previous code remains the same]

// 31. Seem
addVerb('seem', 'seem', 'seemed', 'seeming', 'will seem', 'Thinking and Feeling',
    'Used to give an impression of being something. It\'s different from "be" as it expresses appearance rather than definite state.');
addStory('seem',
    'The math problem seemed difficult at first.',
    'He is seeming happier since he joined the soccer team.',
    'The party will seem more fun once more people arrive.');

// 32. Help
addVerb('help', 'help', 'helped', 'helping', 'will help', 'Helping and Allowing',
    'Used to assist or make it easier for someone to do something. It\'s different from "do" as it implies aiding rather than performing the entire action.');
addStory('help',
    'My big sister helped me with my homework.',
    'The volunteers are helping to clean up the park.',
    'I will help you carry those heavy bags.');

// 33. Talk
addVerb('talk', 'talk', 'talked', 'talking', 'will talk', 'Communication',
    'Used to speak or have a conversation. It\'s different from "say" as it implies a back-and-forth exchange rather than a one-way communication.');
addStory('talk',
    'We talked about our favorite books in class yesterday.',
    'Mom and Dad are talking about our summer vacation plans.',
    'I will talk to my teacher about the assignment tomorrow.');

// 34. Turn
addVerb('turn', 'turn', 'turned', 'turning', 'will turn', 'Movement',
    'Used to move in a circular direction or change position. It\'s different from other movement verbs as it specifically involves rotation or direction change.');
addStory('turn',
    'I turned the page to continue reading the story.',
    'The leaves are turning yellow as autumn approaches.',
    'The car will turn left at the next intersection.');

// 35. Start
addVerb('start', 'start', 'started', 'starting', 'will start', 'Starting and Ending',
    'Used to begin doing something. It\'s similar to "begin" but more commonly used in everyday contexts.');
addStory('start',
    'We started our project last week.',
    'The baby is starting to walk on her own.',
    'The movie will start at 8 PM sharp.');

// 36. Show
addVerb('show', 'show', 'showed', 'showing', 'will show', 'Communication',
    'Used to display or explain something. It\'s different from "tell" as it often involves visual demonstration.');
addStory('show',
    'The magician showed us an amazing trick.',
    'The teacher is showing us how to solve the equation.',
    'I will show you my art project when it\'s finished.');

// 37. Hear
addVerb('hear', 'hear', 'heard', 'hearing', 'will hear', 'Senses',
    'Used to perceive sound. It\'s different from "listen" as it doesn\'t imply intentional action, just the ability to perceive sound.');
addStory('hear',
    'I heard a strange noise coming from the attic.',
    'We are hearing lots of birds chirping this morning.',
    'You will hear the bell ring when it\'s time for lunch.');

// 38. Play
addVerb('play', 'play', 'played', 'playing', 'will play', 'Basic Actions',
    'Used to engage in games or fun activities. It\'s different from "work" as it implies enjoyment and leisure rather than obligation.');
addStory('play',
    'The children played hide-and-seek in the park.',
    'She is playing the piano beautifully.',
    'We will play board games on family night.');

// 39. Run
addVerb('run', 'run', 'ran', 'running', 'will run', 'Movement',
    'Used to move quickly on foot. It\'s different from "walk" as it involves faster movement with both feet leaving the ground at times.');
addStory('run',
    'I ran to catch the bus this morning.',
    'The dogs are running around the yard happily.',
    'She will run in the marathon next month.');

// 40. Move
addVerb('move', 'move', 'moved', 'moving', 'will move', 'Movement',
    'Used to change position or location. It\'s a more general term than specific movement verbs like "walk" or "run".');
addStory('move',
    'We moved to a new house last summer.',
    'The chess player is moving her knight across the board.',
    'The company will move to a bigger office next year.');

// 41. Like
addVerb('like', 'like', 'liked', 'liking', 'will like', 'Thinking and Feeling',
    'Used to express enjoyment or preference. It\'s different from "love" as it implies a milder positive feeling.');
addStory('like',
    'I liked the new ice cream flavor we tried.',
    'She is liking her new school more each day.',
    'I think you will like the surprise party we\'re planning.');

// 42. Live
addVerb('live', 'live', 'lived', 'living', 'will live', 'Basic Actions',
    'Used to reside in a place or be alive. It\'s different from "stay" as it implies a more permanent situation.');
addStory('live',
    'My grandparents lived in the countryside.',
    'Many animals are living in this forest.',
    'We will live in our new apartment starting next month.');

// 43. Believe
addVerb('believe', 'believe', 'believed', 'believing', 'will believe', 'Thinking and Feeling',
    'Used to accept something as true or have faith. It\'s different from "know" as it implies acceptance without absolute proof.');
addStory('believe',
    'I believed in Santa Claus when I was younger.',
    'He is believing in himself more since he started practicing.',
    'They will believe the good news when they see it for themselves.');

// 44. Hold
addVerb('hold', 'hold', 'held', 'holding', 'will hold', 'Basic Actions',
    'Used to keep something in one\'s hand or embrace. It\'s different from "carry" as it doesn\'t always imply movement.');
addStory('hold',
    'The baby held onto her mother\'s finger.',
    'He is holding the door open for others to pass.',
    'We will hold a meeting to discuss the class trip.');

// 45. Bring
addVerb('bring', 'bring', 'brought', 'bringing', 'will bring', 'Movement',
    'Used to carry or transport something to a place. It\'s different from "take" as it implies movement towards the speaker or a specified place.');
addStory('bring',
    'I brought cookies to share with my classmates.',
    'She is bringing her new puppy to show us.',
    'Please bring your textbook to class tomorrow.');

// 46. Happen
addVerb('happen', 'happen', 'happened', 'happening', 'will happen', 'Starting and Ending',
    'Used to occur or take place. It\'s different from other action verbs as it often refers to unplanned events.');
addStory('happen',
    'The accident happened so quickly, no one saw it coming.',
    'Exciting things are happening at school this week.',
    'The solar eclipse will happen next Tuesday.');

// 47. Write
addVerb('write', 'write', 'wrote', 'writing', 'will write', 'Communication',
    'Used to form letters or words on a surface. It\'s different from "speak" as it involves creating a lasting record.');
addStory('write',
    'I wrote a letter to my pen pal last night.',
    'The author is writing a new book about dragons.',
    'We will write our essays over the weekend.');

// 48. Sit
addVerb('sit', 'sit', 'sat', 'sitting', 'will sit', 'Position',
    'Used to rest in a seated position. It\'s different from "stand" as it involves lowering oneself to a resting position.');
addStory('sit',
    'We sat around the campfire and told stories.',
    'The cat is sitting on the windowsill, watching birds.',
    'The students will sit in a circle for the group discussion.');

// 49. Stand
addVerb('stand', 'stand', 'stood', 'standing', 'will stand', 'Position',
    'Used to be in an upright position on one\'s feet. It\'s different from "sit" as it involves being in a vertical position.');
addStory('stand',
    'The whole class stood up when the principal entered the room.',
    'He is standing at the bus stop, waiting for his ride.',
    'We will stand in line to get tickets for the concert.');

// 50. Lose
addVerb('lose', 'lose', 'lost', 'losing', 'will lose', 'Basic Actions',
    'Used to be deprived of or cease to have or retain something. It\'s different from "find" as it involves the opposite action.');
addStory('lose',
    'I lost my favorite pencil during the math test.',
    'The team is losing the game, but they haven\'t given up.',
    'If we\'re not careful, we will lose our way in the forest.');

// console.log(`Progress: ${verbIndex} verbs added out of 50`);
// console.log(JSON.stringify(verbs, null, 2));
// console.log(JSON.stringify(stories, null, 2));
