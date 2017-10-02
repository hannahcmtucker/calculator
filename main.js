const operators = ["*", "/", "+", "-"];
let log = [];
let inner = [];
let marker = false;

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
          displaySub(value);
        } 

      }
    }
  });
}

function logInput(value){
  if (!operators.includes(value)){
    inner.push(value)
  } else{
    if (inner.length > 0){
      log.push(inner.join(''))
      log.push(value)
      inner = []
    }
  }
}

function displayMain(){
  if (inner.length > 0){
    document.getElementById('outputMain').value = inner.join('');
  } else {
    document.getElementById('outputMain').value = log[log.length-1];
  }
}

function displaySub(value){
  let val = document.getElementById('outputSub').value;
  if (!marker){
    val = "";
    marker = true;
  }
  document.getElementById('outputSub').value = val + value;
}

function findAns(){
  if (inner.length > 0){
    log.push(inner.join(''))
  }
  let ans = eval(log.join(''))
  document.getElementById('outputMain').value = ans;
  displaySub("="+ans);
}

function clearScreen(){
  document.getElementById('outputMain').value = 0;
  document.getElementById('outputSub').value = 0;
  log = [];
  inner = [];
  marker = false;
}