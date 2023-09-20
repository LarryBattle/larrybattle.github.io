// date created : July 30, 2023

var vowels1 = [
  {
    "letter": "a",
    "shortVowel": ["cat", "mat", "rat", "hat", "bat"],
    "longVowel": ["late", "rate", "mate", "hate", "bate"]
  },
  {
    "letter": "e",
    "shortVowel": ["bet", "pet", "met", "let", "net"],
    "longVowel": ["meet", "beat", "feat", "neat", "peat"]
  },
  {
    "letter": "i",
    "shortVowel": ["hit", "sit", "bit", "kit", "pit"],
    "longVowel": ["lite", "site", "bite", "kite", "pite"]
  },
  {
    "letter": "o",
    "shortVowel": ["hot", "lot", "pot", "not", "dot"],
    "longVowel": ["note", "vote", "rote", "dote", "mote"]
  },
  {
    "letter": "u",
    "shortVowel": ["cut", "hut", "but", "nut", "rut"],
    "longVowel": ["mute", "cute", "flute", "brute", "lute"]
  },
  {
    "letter": "y",
    "shortVowel": ["myth", "gym", "sylph", "sync", "syndrome"],
    "longVowel": ["type", "hype", "ripe", "dye", "tyke"]
  }
]
// ===
var vowels2 = [
  {
    "letter": "a",
    "shortVowel": ["cat", "bat", "hat", "rat", "man"],
    "longVowel": ["day", "may", "say", "way", "lay"]
  },
  {
    "letter": "e",
    "shortVowel": ["pen", "men", "bed", "red", "hen"],
    "longVowel": ["he", "me", "we", "she", "be"]
  },
  {
    "letter": "i",
    "shortVowel": ["it", "is", "his", "sit", "hit"],
    "longVowel": ["I", "my", "why", "lie", "tie"]
  },
  {
    "letter": "o",
    "shortVowel": ["hot", "lot", "not", "pot", "got"],
    "longVowel": ["go", "no", "so", "show", "old"]
  },
  {
    "letter": "u",
    "shortVowel": ["us", "up", "but", "run", "sun"],
    "longVowel": ["use", "cube", "mule", "rude", "tune"]
  },
  {
    "letter": "y",
    "shortVowel": ["my", "by", "try", "cry", "fly"],
    "longVowel": ["my", "by", "try", "cry", "fly"]
  }
];

const uniqueArray = (arr) => {
  return [...new Set(arr)]
};

var vowels = vowels1.map((o, i) => {
  var b = vowels2[i];
  return {
    letter : o.letter,
    shortVowel : uniqueArray(o.shortVowel.concat(b.shortVowel)),
    longVowel : uniqueArray(o.longVowel.concat(b.longVowel))
  };
});

console.log(JSON.stringify(vowels, null, 2));