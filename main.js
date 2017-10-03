const operators = ["*", "/", "+", "-"];
let log = [];
let inner = [];
let outputMain = document.getElementById('outputMain');
let outputSub = document.getElementById('outputSub');

window.onload = function (){
  document.querySelector("#bttns").addEventListener('click', function(ev){ 
    if (ev.target !== ev.currentTarget){
      value = ev.target.value;
      if (value === "AC"){
        clearScreen();
      } else {
        if (value === "="){
          findAns();
        } else {
          logInput(value);
          displayMain();
          displaySub();
        } 
      }
    }
  });
}

function logInput(value){
  if (!operators.includes(value)){
    if (!(value === "0" && inner.length === 0)){
      inner.push(value)
    }
  } else{
    if (inner.length > 0){
      log.push(inner.join(''))
      log.push(value)
      inner = []
    }
  }
}

function displayMain(){
  if (inner.length === 0 && log.length === 0){
    outputMain.value = "0";
  } else if (inner.length > 0){
    outputMain.value = inner.join('');
  } else {
    outputMain.value = log[log.length-1];
  }
}

function displaySub(){
    if (inner.length === 0 && log.length === 0){
    outputSub.value = "0";
  } else {
    outputSub.value = log.join('')+inner.join('');
  }

}

function findAns(){
  if (inner.length > 0){
    log.push(inner.join(''))
  }
  let ans = eval(log.join(''))
  outputMain.value = ans;
  outputSub.value = outputSub.value+"="+ans;
}

function clearScreen(){
  outputMain.value = 0;
  outputSub.value = 0;
  log = [];
  inner = [];
}