let homeScore = 0
let guestScore = 0

function addOneHome() {
    homeScore += 1
    document.getElementById("home_score").textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    document.getElementById("home_score").textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    document.getElementById("home_score").textContent = homeScore
}

function addOneGuest() {
    guestScore += 1
    document.getElementById("guest_score").textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    document.getElementById("guest_score").textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    document.getElementById("guest_score").textContent = guestScore
}

function reset() {
    homeScore = 0
    guestScore = 0
    document.getElementById("home_score").textContent = homeScore
    document.getElementById("guest_score").textContent = guestScore
}