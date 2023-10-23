const btns = document
  .getElementById("submitBtn")
  .addEventListener("click", function () {
    // get the input field amount
    const inputField1 = document.getElementById("inputField1");
    const previousInputField1 = inputField1.value;
    const newInputField1 = parseFloat(previousInputField1);

    const inputField2 = document.getElementById("inputField2");
    const previousInputField2 = inputField2.value;
    const newInputField2 = parseFloat(previousInputField2);

    // hide the text
    const text = document.getElementById("text");
    text.style.display = "none";

    // get the input ,add the numbers
    const totalAmount = document.getElementById("totalAmount");
    const equation = 0.5 * newInputField1 * newInputField2;
    if(equation>0){
      // set the value
      totalAmount.innerText = equation;
    }else {
      totalAmount.innerText = "error❌";
    }
    // const currentTotalAmount = equation + previousTotalAmount;

    // totalAmount.innerText = currentTotalAmount;
    // currentTotalAmount.style.display ="block"

    // clear the input field
    inputField1.value = "";
    inputField2.value = "";
  });
