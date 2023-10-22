// document.getElementsByClassName("btn-calculate").addEventListener('click', function(){
//   const inputField = document.getElementsByClassName("inputField");
//   const inputFieldString = inputField.value;
//   const newInputField = parseFloat(inputFieldString);
//   console.log(newInputField);
// });

const btns = document
  .getElementById("submitBtn")
  .addEventListener("click", function () {

    // get the input field amount
    const inputField1 = document.getElementById("inputField1").value;
    const inputField2 = document.getElementById("inputField2").value;
    const newInputField1 = parseFloat(inputField1);
    const newInputField2 = parseFloat(inputField2);

    // hide the text
    const text = document.getElementById("text");
    text.style.display = "none";
    
    // get the input
    const totalAmount = document.getElementById("totalAmount");
    console.log(totalAmount)
    const previousTotalAmountString = totalAmount.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);
    // previousTotalAmount.style.visibility = "visible";

    // add the numbers
    const equation = 0.5 * newInputField1 * newInputField2;
    const currentTotalAmount = equation + previousTotalAmount;

    // set the value
    totalAmount.innerText = currentTotalAmount;
    // currentTotalAmount.style.display ="block"
    
    // clear the input field
    inputField1.value = "";
    inputField2.value = "";

    // console.log(inputField1, inputField2);
  });
