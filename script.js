// Selectors
const inputs=document.querySelectorAll(".angle-input");
const isTriangleBtn=document.querySelector("#triangle-btn");
const outputEl=document.querySelector("#output");

// event listeners
// when the click event happens the button must do something.
isTriangleBtn.addEventListener("click", isTriangle);




function  calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles=angle1+angle2+angle3;
   
    return sumOfAngles;
}

function isTriangle(){
    // sum of the angles.
    const sum=calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value),Number( inputs[2].value));
   
    if(sum===180){outputEl.innerText="Hurray, it's a triangle!!"}
    else{outputEl.innerText="Sorry, tough luck mate!!"};
}