const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
    
let questions = [{
    question: "Who shot J.R ?",   
    option1: 'Kristen Stewart',
    option2: 'Brad Pitt',
    option3: 'Donald Trump',
    option4: 'Will Smith',
    answer:  1,
   
    },
    
    {
    
    question: "What is 5 squared ?",
    option1: '65',
    option2: '34',
    option3: '25',
    option4: '76',
    answer:    3,
    },
    
    
    {
    
    question: "Whers is the north pole ?",
    option1: 'The Pacific Ocdean',
    option2: 'The Black Sea',
    option3: 'The Red Sea',
    option4: 'The Arctic Ocean',
    answer:   4,
    },
    
   
    {
   
    question: "What is a group of jellyfish called ?",
   
    option1: 'A Herd',
    option2: 'A Swarm',
    option3: 'A Smack',
    option4: 'A School',
    answer:   4,
    },
    
    {
    
    question: "How many presidents has there been in the U.S.A ?",

    option1: '1',
    option2: '45',
    option3: '8',
    option4: '22',
    answer:   2,
    },
    
    {
   
    question: "What is the internet commonally known as ?",

    option1: 'World wide web',
    option2: 'Web world wide',
    option3: 'Wide web world',
    option4: 'World web wide',
    answer:   4,
    },
    
    {
    
    question: "What is the largest planet in our solar system ?",
   
    option1: 'Saturn',
    option2: 'Mars',
    option3: 'Jupiter',
    option4: 'Earth',
    answer:   3,
    },
   
    {
    
    question: "Who makes the big mac ?",
    
    option1: 'K.F.C',
    option2: 'Burger King',
    option3: '5 Guys',
    option4: 'McDonalds',
    answer:  4,
    },
    
    {
   
    question: "What boxer is known as The Greatest?",
   
    option1: 'Mike Tyson',
    option2: 'Muhammad Ali',
    option3: 'Tyson Fury',
    option4: 'Ricky Haton',
    answer:  2,
    },
    
    {
    
    question: "What is the largest country in the world ?",
   
    option1: 'Russia',
    option2: 'Norway',
    option3: 'America',
    option4: 'Ireland',
    answer:   1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

 let startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset.number
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1 )

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return 

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset.number

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        const correctAnswer = choices[currentQuestion.answer - 1]
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }   else if (classToApply === 'incorrect') {
            correctAnswer.parentElement.classList.add('correct')
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            correctAnswer.parentElement.classList.remove('correct')
            getNewQuestion()
        }, 1000)
    })
})

 let incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()

