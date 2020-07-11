const solve = document.querySelector('.solvebt');
solve.addEventListener('click', calculate);
function calculate() {
  const ip_1 = document.querySelector('.ip_1');
  const ip_2 = document.querySelector('.ip_2');
  const answer_3 = document.querySelector('.answer_3');
  const operation = document.querySelector('#operation');
  let number1 = parseFloat(ip_1.value);
  let number2 = parseFloat(ip_2.value);
  let answer;


  
  switch (operation.value) {

    case "subtract":
      answer = number1 - number2;
      answer_3.innerHTML = answer;
      break;

    case "add":
      answer = number1 + number2;
      answer_3.innerHTML = answer;
      break;

    case "divide":
      answer = number1 / number2;
      answer_3.innerHTML = answer;
      break;

    case "multiply":
      answer = number1 * number2;
      answer_3.innerHTML = answer;
      break;


  }
}
