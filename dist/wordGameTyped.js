window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');
const picSwitch = document.querySelector('#picSwitch');


const words = [
  'unify',
  'bond',
  'love',
  'versatility',
  'differences',
  'acceptance',
  'friends',
  'family',
  'networking',
  'experiences',
  'joy',
  'uncomfortability',
  'gathering',
  'event',
  'fun',
  'fellowship',
  'friendliness',
  'selflessness',
  'cohesiveness',
  'forgiveness',
  'laughter',
  'support',
  'study group',
  'coffee date',
  'games',
  'holidays',
  'food'
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);

  showPic(images);
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);

}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  
  // Highscore based on score value for Session Storage
  if (typeof sessionStorage['highscore'] === 'undefined' || score > sessionStorage['highscore']) {
    sessionStorage['highscore'] = score;
  } else {
    sessionStorage['highscore'] = sessionStorage['highscore'];
  }

  // Prevent display of High Score: -1
  if (sessionStorage['highscore'] >= 0) {
  highscoreDisplay.innerHTML = sessionStorage['highscore'];
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'GREAT JOB';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}
function showPic(images) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * images.length);
  // Output random word
  showPic.innerHTML = images [randIndex];
}
// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
const images = [
      "https://res.cloudinary.com/teepublic/image/private/s--cPC9jMSi--/c_crop,x_10,y_10/c_fit,w_758/c_crop,g_north_west,h_1038,w_1038,x_-140,y_-238/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-251,y_-349/b_rgb:000000/c_limit,f_jpg,h_630,q_90,w_630/v1535983455/production/designs/3102910_0.jpg",
      "https://www.lovequotesmessages.com/wp-content/uploads/2018/09/diversity_quotes4.jpg",
      "https://i.etsystatic.com/7849180/r/il/24e3d4/1938003356/il_1588xN.1938003356_jyff.jpg",
      ""
    ]