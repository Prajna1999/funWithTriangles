// Selectors
const quizForm=document.querySelector(".quiz-form");
const submitBtn=document.querySelector("#submit-answer-btn");
const outputEl=document.querySelector(".output")

// Array to store the correct answers.

const correctAns=["90°", "right"];

submitBtn.addEventListener("click", calculateScore);

function calculateScore(){
    let score=0;
    // to iterate through the correct answers.
    let index=0; 
    // To get the data from the form instantiate an new object.

    const formResults=new FormData(quizForm);
    // for...of
    for (let value of formResults.values() ){
        if(value===correctAns[index]){
            score++;
        }
        index=index+1;
    }
    // console.log(score);
    outputEl.innerText=`Your Score in the quiz is ${score}`;
}
