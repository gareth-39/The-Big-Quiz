const data = [
    
    {
    id: "1",
    question: "Who shot J.R?",   
    option1: "Kristen Stewart",
    option2: "Brad Pitt",
    option3: "Donald Trump",
    option4: "Will Smith",
    correctAnswer: "Kristen Stewart",
   
    },
    
    {
    id: "2",
    question: "What is 5 squared?",
     option1: "65",
    option2: "34",
    option3: "25",
    option4: "76",
    correctAnswer: "25"
    },
    
    
    {
    id: "3",
    question: "Whers is the north pole?",
    option1: "The Pacific Ocdean",
    option2: "The Black Sea",
    option3: "The Red Sea",
    option4: "The Arctic Ocean",
    correctAnswer: "The Arctic Ocean"
    },
    
   
    {
    id: "4",
    question: "Tomato ia a fruit?",
   
    option1: "True",
    option2: "False",
    correctAnswer: "true",
    },
    
    {
    id: "5",
    question: "How many presidents has there been in the U.S.A?",

    option1: "1",
    option2: "45",
    option3: "8",
    option4: "22",
    correctAnswer: "45",
    },
    
    {
    id: "6",
    question: "What is the internet commonally known as?",

    option1: "World wide web",
    option2: "Web world wide",
    option3: "Wide web world",
    option4: "World web wide",
    correctAnswer: "World web wide",
    },
    
    {
    id: "7",
    question: "What is the largest planet in our solar system;?",
   
    option1: "Saturn",
    option2: "Mars",
    option3: "Jupiter",
    option4: "Earth",
    correctAnswer:  "Jupiter",
    },
   
    {
    id: "8",
    question: "Who makes big macs?",
    
    option1: "K.F.C",
    option2: "Burger King",
    option3: "5 Guys",
    option4: "McDonald",
    correctAnswer: "McDonald",
    },
    
    {
    id: "9",
    question: "What boxer is known as The Greatest?",
   
    option1: "Mike Tyson",
    option2: "Muhammad Ali",
    option3: "Tyson Fury",
    option4: "Ricky Haton",
    correctAnswer:  "Muhammad Ali",
    },
    
    {
    id: "10",
    question: "What is the largest country in the world?",
   
    option1: "Russia",
    option2: "Norway",
    option3: "America",
    option4: "Ireland",
    correctAnswer:  "Russia",
    }
]


let game = document.getElementById("game")
let nextBtn = document.getElementById("next-btn")

function displayQuiz () {
    const random = Math.floor(Math.random() * data.length);
    const quiz = data[random]
    console.log(data[random], "<===data")

    game.innerHTML = `
          <div id="single-game">
          <h1>Question: ${quiz.question}</h1>
          <p>Option 1: ${quiz.option1}</p>
          <p>Option 2: ${quiz.option2}</p>
          <p>Option 3: ${quiz.option3}</p>
          <p>Option 4: ${quiz.option4}</p>
          </div>
    `
}

console.log(game.innerHTML)


nextBtn?.addEventListener("click", displayQuiz)

displayQuiz();



