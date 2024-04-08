const happyBirthdayAudio = new Audio("happy-bday.mp3"); // Source: https://www.youtube.com/watch?v=qCJSNMqub8g
const yayAudio = new Audio("yay.mp3"); // Source: https://www.youtube.com/watch?v=NB1GCI8uvyo

export function stopHappyBdayAudio() {
  if (happyBirthdayAudio) happyBirthdayAudio.pause();
}

function togglePlayHappyBday() {
  if (happyBirthdayAudio) {
    if (happyBirthdayAudio.paused) {
      happyBirthdayAudio.play();
    } else {
      happyBirthdayAudio.pause();
    }
  }
}

export function playYay() {
  if (yayAudio) yayAudio.play();
}

// Example: Trigger playing the YouTube audio
document.getElementById('play-audio-btn').addEventListener('click', togglePlayHappyBday);