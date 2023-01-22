let homeScoreEl = document.getElementById('home-score')
let homeScoreBtnOne = document.getElementById('home-score-one')
let homeScoreBtnTwo = document.getElementById('home-score-two')
let homeScoreBtnThree = document.getElementById('home-score-three')
let homeScore = 0

function homeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function homeScoreTwo() {
    homeScore += 2
     homeScoreEl.textContent = homeScore
}
function homeScoreThree() {
    homeScore += 3
     homeScoreEl.textContent = homeScore
}

let guestScoreEl = document.getElementById('guest-score')
let guestScoreBtnOne = document.getElementById('guest-score-one')
let guestScoreBtnTwo = document.getElementById('guest-score-two')
let guestScoreBtnThree = document.getElementById('guest-score-three')
let guestScore = 0

function guestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function guestScoreTwo() {
    guestScore += 2
     guestScoreEl.textContent = guestScore
}
function guestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}
  
function resetScores() {
    guestScore = 0
    homeScore = 0
   guestScoreEl.textContent = guestScore
   homeScoreEl.textContent = homeScore
}
   