// Javascript Aqui

var result = document.getElementById("result");
var opera;
var operb;
var operation;

var sum = document.getElementById("sum");
var res = document.getElementById("res");
var mul = document.getElementById("mul");
var divi = document.getElementById("divi");

var equal = document.getElementById("equal");
var dot = document.getElementById("dot");
var reset = document.getElementById("reset");

var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

dot.onclick = function () {
  result.textContent = result.textContent + ".";
};
zero.onclick = function () {
  result.textContent = result.textContent + "0";
};
one.onclick = function () {
  result.textContent = result.textContent + "1";
};
two.onclick = function () {
  result.textContent = result.textContent + "2";
};
three.onclick = function () {
  result.textContent = result.textContent + "3";
};
four.onclick = function () {
  result.textContent = result.textContent + "4";
};
five.onclick = function () {
  result.textContent = result.textContent + "5";
};
six.onclick = function () {
  result.textContent = result.textContent + "6";
};
seven.onclick = function () {
  result.textContent = result.textContent + "7";
};
eight.onclick = function () {
  result.textContent = result.textContent + "8";
};
nine.onclick = function () {
  result.textContent = result.textContent + "9";
};

reset.onclick = function () {
  resetear();
};

sum.onclick = function () {
  opera = result.textContent;
  operation = "+";
  clear();
};

res.onclick = function () {
  opera = result.textContent;
  operation = "-";
  clear();
};

mul.onclick = function () {
  opera = result.textContent;
  operation = "*";
  clear();
};

divi.onclick = function () {
  opera = result.textContent;
  operation = "/";
  clear();
};

equal.onclick = function () {
  operb = result.textContent;
  solve();
};

function clear() {
  result.textContent = "";
}

function resetear() {
  result.textContent = "";
  opera = 0;
  operb = 0;
  operation = "";
}

function solve() {
  var res = 0;
  switch (operation) {
    case "+":
      res = parseFloat(opera) + parseFloat(operb);
      break;
    case "-":
      res = parseFloat(opera) - parseFloat(operb);
      break;
    case "*":
      res = parseFloat(opera) * parseFloat(operb);
      break;
    case "/":
      res = parseFloat(opera) / parseFloat(operb);
      break;
  }
  resetear();
  result.textContent = res;
}
