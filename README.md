## Tests
Describe: beepBoop();
Test: should turn user input into an array, from 0 to users inputted number
code: beepBoop(5);
function beepBoop(userInput) {
  let beepBoopArr = [];
  for(let i=0; i<=userInput; i++){
    beepBoopArr.push(i);
  }
  console.log(beepBoopArr);
}
Expected output: [0, 1, 2, 3, 4, 5]

describe: beepBoop();
Test: should replace numbers, in array, containing "1" to beep
Code:
function beepBoop(userInput) {
  let beepBoopArr = [];
  for(let i=0; i<=userInput; i++){
    beepBoopArr.push(i);
  } console.log(beepBoopArr);
  let stringArr = beepBoopArr.toString();{
    console.log(stringArr);
    if(stringArr.includes("1")){
      newStringArr = stringArr.replace(/1/i, "beep")
    }console.log(newStringArr);
  }
  }

Expected Output: [0, beep, 2, 3, 4, 5]

Describe; beepBoop();
Test: should replace number in array, when any digit contains "1" to beep
code: 
function beepBoop(userInput) {
  const beepBoopArr = [];
  for(let i = 0; i <= userInput; i++){
    if((i + " ").indexOf(1) < 0) {
      beepBoopArr.push(i);
    } else{
      beepBoopArr.push("beep!");
    }
  }
  console.log(beepBoopArr);
  
expected output:[0, beep, 2, 3, 4, 5, 6, 7, 8, 9, beep]