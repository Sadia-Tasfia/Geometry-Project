const btn = document
  .getElementById("submitBtn2")
  .addEventListener("click", function () {
    // get the input field amount
    const inputField3 = document.getElementById("inputField3");
    const previousInputField3 = inputField3.value;
    const newInputField3 = parseFloat(previousInputField3);

    const inputField4 = document.getElementById("inputField4");
    const previousInputField4 = inputField4.value;
    const newInputField4 = parseFloat(previousInputField4);

    // hide the text
    const text2 = document.getElementById("text2");
    text2.style.display = "none";

    // get the input,add the numbers
    const totalAmount2 = document.getElementById("totalAmount2");
    const equation = newInputField3 * newInputField4;
    if (equation > 0) {
      // set the value
      totalAmount2.innerText = equation;
    } else {
      totalAmount2.innerText = "error❌";
    }

    // clear the input field
    inputField3.value = "";
    inputField4.value = "";
  });
