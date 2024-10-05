import { quizData } from "./data.js";

// index of question
let index = 0;
let correctAnswers = [];
let userAnswers = [];
let points=0;
let questions = quizData.length;

// making correct answers array

quizData.map((e, i) => {
  correctAnswers.push(e.correct);
});

// end of making logic

const form = document.getElementById("quizForm");

const questionHeading = document.getElementById("question");
const question1 = document.getElementsByClassName("one");
const question2 = document.getElementsByClassName("two");
const question3 = document.getElementsByClassName("three");
const question4 = document.getElementsByClassName("four");
const button = document.getElementById("submit");

function setQuestion(data) {
  if (quizData[index]) {
    // Update the question heading
    questionHeading.textContent = data.question;

    // Update the options (ensure these variables correctly reference your DOM elements)
    question1[0].textContent = data.a;
    question1[0].setAttribute("value", data.a);

    question2[0].textContent = data.b;
    question2[0].setAttribute("value", data.b);

    question3[0].textContent = data.c;
    question3[0].setAttribute("value", data.c);

    // Assuming you want 4 options, update question4 to data.d
    question4[0].textContent = data.d;
    question4[0].setAttribute("value", data.d);

    if (index <= quizData.length - 2) {
      // Update the button text
      button.innerHTML = "Next";
    } else {
      // Update the button text
      button.innerHTML = "Submit";
    }
  } else {
    // alert("End of questions");
    ResultScreen();
    Results(correctAnswers, userAnswers);
    console.log(correctAnswers, userAnswers);
  }
}

setQuestion(quizData[index]);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  // Get the value of the radio button group "question"
  const selectedOption = formData.get("question");

  if (selectedOption) {
    // Output the value of the selected radio button
    console.log("Selected option:", selectedOption);
    // alert("Selected option: " + selectedOption); // Alert the user
    userAnswers.push(selectedOption);
    correctAnswer(selectedOption);
    form.reset();
    const noOfQuestions = quizData.length;
    if (index < noOfQuestions) {
      // increment index
      index++;
      console.log(index);
      setQuestion(quizData[index]);
    } else if (index === noOfQuestions - 1) {
      button.innerHTML = "Submit Test";
    } else {
      alert("You have completed the quiz");
    }
  } else {
    alert("Please select an option.");
  }
});

function correctAnswer(selectedOption) {
  const correct = quizData[index].correct;
  if (selectedOption === correct) {
    console.log("You have selected the correct option");
    points++
  } else {
    console.log("Ooo wrong ans.");
  }

  // if(correct === userAnswer1){
  //     alert("Your answer is correct")
  // }else{
  //     alert("Your have entered an incorrect answer")
  // }
}

function Results(c, u) {
  for (let ind in c) {
    if (c[ind] == u[ind]) {
      points++;
    }
  }

  console.log(points);
}

function ResultScreen() {
  console.log("entered result screen");
  const body = document.getElementsByTagName("body");
  body[0].innerText = `Your score ${points}/${questions}`;
  const button = document.createElement('button')
  button.innerText = 'Restart Quiz'
  button.addEventListener('click', ()=>{
         location.reload()
  })
  body[0].appendChild(button)
}
