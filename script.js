function displayNumber(num) {
  // let num = "&divide;"
  result.value += num;
}

function clearBox() {
  result.value = "";
}

function evaluateExp() {
  result.value = eval(result.value);
}

function removelastitem() {
  currentitem = result.value;
  result.value = currentitem.slice(0, -1);
}
