window.addEventListener("load", () => {
  let input = document.getElementById("input_box");
  let buttons = document.querySelectorAll("button");

  let exp = "";
  let arr = Array.from(buttons);

  arr.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        exp = eval(exp);
        input.value = exp;
      } else if (e.target.innerHTML == "AC") {
        exp = "0";
        input.value = exp;
      } else{
        console.log("checkpoint1");
        // exp += e.target.innerHTML;
        exp = e.target.innerHTML + exp; 
        input.value = exp;
      }
    });
  });
});
