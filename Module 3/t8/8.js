

const button = document.querySelector('button');
button.addEventListener('click', function(){
  let choice = document.getElementById("operation").value;
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (choice === "add"){
    document.getElementById("result").innerHTML = (num1 + num2);
  } else if (choice === "sub") {
    document.getElementById("result").innerHTML = (num1 - num2);
  } else if (choice === "multi") {
    document.getElementById("result").innerHTML = (num1 * num2);
  } else if (choice === "div") {
    document.getElementById("result").innerHTML = (num1 / num2);
  }
})