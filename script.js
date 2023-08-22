// Array of quiz questions
const questions = [
    {
      question: "What does 'JS' stand for?",
      options: ["JavaSource", "JavaScript", "JavaStyle", "JellyScript"],
      correctAnswer: 1,
    },
    {
      question: "Which built-in method returns the length of a String?",
      options: ["length()", "size()", "index()", "count()"],
      correctAnswer: 0,
    },
    // Add more questions here
    //This section defines an array of quiz questions. Each question is an object with properties:
  ];

  const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

//Here, we're selecting three elements 
//from the HTML using their id attributes. These will be used to manipulate and display the quiz content:
let currentQuestionIndex = 0;

//We initialize a variable to keep track of the index of the current question.

function loadQuestion(questionIndex) {
    const question = questions[questionIndex];
    questionElement.textContent = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.textContent = option;
      optionElement.classList.add("option");
      optionElement.addEventListener("click", () => selectOption(index));
      optionsElement.appendChild(optionElement);
    });
  }

  function selectOption(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctAnswer) {
      // Handle correct answer
      console.log("Correct!");
    } else {
      // Handle wrong answer
      console.log("Wrong!");
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      // Quiz completed
      questionElement.textContent = "Quiz completed!";
      optionsElement.innerHTML = "";
      submitButton.disabled = true;
    }
  }
  loadQuestion(currentQuestionIndex);
  