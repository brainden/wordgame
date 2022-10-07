const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
    {
        quiz:['value', 'estimate', 'evaluate'],
        option: ['jury','assess'],
        correct: 2,
    },
    {
        quiz:['close', 'near', 'next'],
        option: ['trace','adjacent'],
        correct: 2,
    },
    {
        quiz:['foreign', 'national', 'ethnic'],
        option: ['domestic','exotic'],
        correct: 2,
    },
    {
        quiz:['assume', 'insight', 'weather'],
        option: ['forecast','sustainable'],
        correct: 1,
    },
    {
        quiz:['fast', 'quick', 'prompt'],
        option: ['jury','assess'],
        correct: 2,
    },
    {
        quiz:['savior', 'courage', 'whitt'],
        option: ['hero','villain'],
        correct: 1,
    }
]

let score = 0
let clicked = []
scoreDisplay.textContent = score

function displayQuestions() {
    questions.forEach(question => {
      const questionBox =   document.createElement('div')
      questionBox.classList.add('question-box')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = "✏️"
        questionBox.append(logoDisplay)

        question.quiz.forEach(tip => {
          const tipText = document.createElement('p')
          tipText.textContent = tip
          questionBox.append(tipText)
        })

        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        question.option.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option


            questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex +1, question.correct))

            questionButtons.append(questionButton)
        })
            const answerDisplay = document.createElement('div')
            answerDisplay.classList.add('answer-display') 

            questionBox.append(answerDisplay)

      questionDisplay.append(questionBox)
    })
}

displayQuestions()

function checkAnswer(questionBox, questionButton, option, optionIndex, correctAnswer) {
    console.log('option', option)
    console.log('optionIndex', optionIndex)
    if(optionIndex === correctAnswer) {
        score++
        scoreDisplay.textContent = score
        addResult(questionBox, "correct!")
    } else {
        score--
        scoreDisplay.textContent = score
        addResult(questionBox, "wrong!")
    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
} 

function addResult(questionBox, answer) {
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.textContent = answer
}