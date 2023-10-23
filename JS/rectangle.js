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
      totalAmount2.innerText = equation + "cm²";
    } else {
      totalAmount2.innerText = "error❌";
    }
    
    // Show the value & name in different card
    const tagName2 = document.getElementById("tagName2");
    tagName2.innerText = "2.Rectangle"

    const result2 = document.getElementById("result2");
    if (equation > 0) {
      result2.innerText = equation + "cm²";
    } else {
      result2.innerText = "Error❌";
    }

    // convert the result into meter
    document.getElementById("convertBtn2").addEventListener('click', function(){
      const result2 = document.getElementById("result2");
      const meter = equation / 100;
      if (equation > 0) {
        result2.innerText = meter + "m²";
      } else {
        result2.innerText = "Error❌";
      }
    });
    
    // clear the input field
    inputField3.value = "";
    inputField4.value = "";
  });
