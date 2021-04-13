
var userScores = [0, 0, 0]

function evaluation(userSelectCode) {
    console.log('TEST - This has gotten into the evaluation function!')
    var compRand = Math.floor((Math.random() * 3) + 1);
    console.log('TEST - evalauation function:  ' + compRand)
    var result = (userSelectCode === compRand) ? 't'
    : (userSelectCode === 3 && compRand === 2) ? 'w'
    : (userSelectCode === 2 && compRand === 3) ? 'l'
    : (userSelectCode === 1 && compRand === 2) ? 'l'
    : (userSelectCode === 2 && compRand === 1) ? 'w'
    : (userSelectCode === 3 && compRand === 1) ? 'l'
    : (userSelectCode === 1 && compRand === 3) ? 'w'
    : 'x'
    return result
}

function finalResults(result) {
    if (result === 'w') {
        userScores[0] += 1
        alert(`User WINS!\n\nWINS:       ${userScores[0]}\nLOSSES:  ${userScores[1]}\nTIES:        ${userScores[2]}`)
    } else if (result === 'l') {
        userScores[1] += 1
        alert(`User LOSES!\n\nWINS:       ${userScores[0]}\nLOSSES:  ${userScores[1]}\nTIES:        ${userScores[2]}`)
    } else if (result === 't') {
        userScores[2] += 1
        alert(`User and Computer TIES!\n\nWINS:       ${userScores[0]}\nLOSSES:  ${userScores[1]}\nTIES:        ${userScores[2]}`)
    } else if (result === 'x') {
        alert('Something unexpected occurred.  Please try again')
    }
}

// START
// USER PICKS
var userSelect = window.prompt('Please enter selection:  "ROCK", "PAPER", "SCISSORS":  ')

console.log('TEST - Data Entered (RAW):  ' + userSelect)
console.log('TEST - Data Entered (TYPE):  ' + typeof userSelect)
console.log('TEST - Data Entered (UPPER):  ' + userSelect.toUpperCase())

if (userSelect.toUpperCase() === 'ROCK') {
    userSelectCode = 1
    console.log(`USER SELECTION VALUE (CODED VALUE):  ${userSelect} (${userSelectCode}))`)
} else if (userSelect.toUpperCase() === 'PAPER') {
    userSelectCode = 2
    console.log(`USER SELECTION VALUE (CODED VALUE):  ${userSelect} (${userSelectCode}))`)
} else if (userSelect.toUpperCase() === 'SCISSORS') {
    userSelectCode = 3
    console.log(`USER SELECTION VALUE (CODED VALUE):  ${userSelect} (${userSelectCode}))`)
} else {
    console.log('No data entered for validation')
}

finalResults(evaluation(userSelectCode))
