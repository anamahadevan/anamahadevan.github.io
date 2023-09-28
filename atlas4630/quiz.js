function quiz() {

  const score = 0

  const questions = [
    'How many moons does Earth have?',
    'How many moons does Saturn have?',
    'How many moons does Venus have?',
  ]

  const answers = [1, 82, 0]

  let num = Math.floor(Math.random() * 3)

  for (let i = 0; i <= (questions.length - 1); i++) {
    console.log('index', i, 'num', num)
    const question = questions[num]
    const answer = prompt(question)
    console.log(answer, answers[num])
    if (answer === answers[num]) {
      score+=
      alert('Correct!')
    } 
    else {
      alert('Wrong!')
    }
    if (num === questions.length) {
      num = 0
    }
    else {
      num++;
    }
  }

  const scoreArea = document.getElementById("score-area")
  scoreArea.innerHTML = `You got ${score} out of ${questions.length} questions correct!`
}

// alert('Are you ready for a quiz?')
quiz()