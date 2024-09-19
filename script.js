window.addEventListener("load", () => {
  let input = document.getElementById("input_box");
  let buttons = document.querySelectorAll("button");

  let exp = "";
  let arr = Array.from(buttons);

  function addInExp(ch) {
    if (exp === "0") {
      exp = ch;
    } else {
      exp += ch;
    }
    input.value = exp;
  }

  function calculateExp() {
    try {
      // Check if the last character is an operator, remove it if necessary before evaluating
      if (/[+\-*/.]$/.test(exp)) {
        exp = exp.slice(0, -1);
      }
      exp = eval(exp);
      if (!Number.isInteger(exp)) {
        exp = exp.toFixed(2); // Fix to 2 decimal places if it's not an integer
      }
      input.value = exp;
    } catch (error) {
      input.value = "Error";
    }
  }

  document.addEventListener("keydown", function (event) {
    // Logical OR (||) instead of Bitwise OR (|) and corrected keyCodes
    if (event.keyCode == 97 || event.keyCode == 49) {
      addInExp("1");
    } 
    else if (event.keyCode == 96 || event.keyCode == 48) {
      addInExp("0");
    } 
    else if (event.keyCode == 98 || event.keyCode == 50) {
      addInExp("2");
    } 
    else if (event.keyCode == 99 || event.keyCode == 51) {
      addInExp("3");
    } 
    else if (event.keyCode == 100 || event.keyCode == 52) {
      addInExp("4");
    } 
    else if (event.keyCode == 101 || event.keyCode == 53) {
      addInExp("5");
    } 
    else if (event.keyCode == 102 || event.keyCode == 54) {
      addInExp("6");
    } 
    else if (event.keyCode == 103 || event.keyCode == 55) {
      addInExp("7");
    } 
    else if (event.keyCode == 104 || event.keyCode == 56) {
      addInExp("8");
    } 
    else if (event.keyCode == 105 || event.keyCode == 57) {
      addInExp("9");
    } 
    else if (event.keyCode == 107) {
      addInExp("+");
    } 
    else if (event.keyCode == 109) {
      addInExp("-");
    } 
    else if (event.keyCode == 106) {
      addInExp("*");
    } 
    else if (event.keyCode == 110) {
      addInExp(".");
    } 
    else if (event.keyCode == 111 || event.keyCode == 191) {
      addInExp("/");
    }

    // Handle Enter key for calculating
    if (event.keyCode == 13) { // Enter key
      calculateExp();
    }

    // Handle Backspace key for deleting last character
    if (event.keyCode == 8) { // Backspace key
      exp = exp.slice(0, -1) || "0"; // Ensure it defaults to "0" if the expression is empty
      input.value = exp;
    }
  });

  arr.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        calculateExp();
      } else if (e.target.innerHTML == "AC") {
        exp = "0";
        input.value = exp;
      } else {
        if (exp === "0") {
          exp = e.target.innerHTML;
        } else {
          exp += e.target.innerHTML;
        }

        input.value = exp;
      }
    });
  });
});
