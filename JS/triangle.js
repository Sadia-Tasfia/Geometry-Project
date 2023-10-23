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
      totalAmount.innerText = equation + "cm²";
    }else {
      totalAmount.innerText = "Error❌";
    }
    // const currentTotalAmount = equation + previousTotalAmount;

    // totalAmount.innerText = currentTotalAmount;
    // currentTotalAmount.style.display ="block"

    // Show the result and name in different card
    const tagName1 = document.getElementById("tagName1");
    tagName1.innerText = "1.Triangle";

    const result1 = document.getElementById("result1");
    if(equation > 0) {
      result1.innerText = equation + "cm²";
    } else{
      result1.innerText = "Error❌";
    }

    // convert the result into meter
    document
      .getElementById("convertBtn1")
      .addEventListener("click", function () {
        const result1 = document.getElementById("result1");
        const meter = equation / 100;
        if (equation > 0) {
          result1.innerText = meter + "m²";
        } else {
          result1.innerText = "Error❌";
        }
      });

    // clear the input field
    inputField1.value = "";
    inputField2.value = "";
  });
