// Selectors
const lengthInput=document.querySelectorAll(".length-input");
const calculateBtn=document.querySelector("#calculate-btn");
const outputEl=document.querySelector(".output-hypo");



// Adding event listeners and call backs.
calculateBtn.addEventListener("click", calculateHypotenuse);

function  calculateSumOfSquares(a,b){
    const sumOfSquares=a*a+b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
//    const hypotenuse=Math.sqrt()**2+Number()**2);
    const hypotenuse=Math.sqrt(calculateSumOfSquares(Number(lengthInput[0].value),Number(lengthInput[1].value )));
     outputEl.innerText=`The length of hypotenuse is ${hypotenuse}`;

}

