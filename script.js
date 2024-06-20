window.addEventListener("load", () => {
  let input = document.getElementById("input_box");
  let buttons = document.querySelectorAll("button");

  let exp = "";
  let arr = Array.from(buttons);

  function addInExp(ch) {
    if (exp == "0") {
      exp = ch;
    } else {
      exp += ch;
    }
    input.value = exp;
  }

  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 97 | 49) {
      addInExp("1");
    } 
    else if(event.keyCode == 48 | 96){
      addInExp("0");
     
    }else if (event.keyCode == 98 | 50){
      addInExp("2");
    } else if(event.keyCode == 99 | 51){
      addInExp("3");
    } else if(event.keyCode == 100 | 52){
      addInExp("4");
    } else if(event.keyCode == 101 | 53){
      addInExp("5");
    } else if(event.keyCode == 102 | 54){
      addInExp("6");
    } else if(event.keyCode == 103 | 55){
      addInExp("7");
    } else if(event.keyCode == 104 | 56){
      addInExp("8");
    } else if(event.keyCode == 105 | 57){
      addInExp("9");
    } else if(event.keyCode == 107 | ){
      addInExp("+");
     
    } else if(event.keyCode == 109){
      addInExp("-");
     
    }else if(event.keyCode == 106){
      addInExp("*");
     
    } else if(event.keyCode == 110){
      addInExp(".");
     
    } else if(event.keyCode == 111 | 191){
      addInExp("/");
     
    }
  });

  arr.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        exp = eval(exp);
        if (!Number.isInteger(exp)) {
          exp = exp.toFixed(2);
        }
        input.value = exp;
        console.log("check")
      } else if (e.target.innerHTML == "AC") {
        exp = "0";
        input.value = exp;
      } else {
        if (exp == "0") {
          exp = e.target.innerHTML;
        } else {
          exp += e.target.innerHTML;
        }

        input.value = exp;
      }
    });
  });
});
