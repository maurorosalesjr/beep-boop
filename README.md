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
}

expected output:[0, beep, 2, 3, 4, 5, 6, 7, 8, 9, beep]

Describe: beepBoop();
Test: should replace number in Array if that number contains a "2" to "Boop!", while also doing the previous test
code:
function beepBoop(userInput) {
  const beepBoopArr = [];
  const newBeepBoopArr =[];
  for(let i = 0; i <= userInput; i++){
    if((i + " ").indexOf(1) < 0) {
      beepBoopArr.push(i);
      } else {
        beepBoopArr.push("Beep!");
        } 
    if((i + " ").indexOf(2) < 0) {
      newBeepBoopArr.push(i);
    } else {
      beepBoopArr.splice(i, 1, "Boop!");
      }
        } console.log(beepBoopArr);
        console.log(newBeepBoopArr);
        }   
expected output: [0, beep, boop, 3, 4, 5, 6, 7, 8, 9, beep, beep, boop]

Describe: beepBoop();
Test: should replace numbers in a user generated array. anything with a 3 changed to "wont you be my neighbor?", remaining 2s to boop and then all of the remaining numbers with a 1 to "beep!"
code:
    function beepBoop(userInput) {
      const beepBoopArr = [];
      const newBeepBoopArr =[];
      for(let i = 0; i <= userInput; i++){
        if((i + " ").indexOf(1) < 0) {
          beepBoopArr.push(i);
          } else {
            beepBoopArr.push("Beep!");
            } 
        if((i + " ").indexOf(2) < 0) {
          newBeepBoopArr.push(i);
        } else {
          beepBoopArr.splice(i, 1, "Boop!");
          }
        if((i + " ").indexOf(3) < 0) {
            newBeepBoopArr.push(i);
          } else {
            beepBoopArr.splice(i, 1, "Wont you be my neighbor?");
            }
        } console.log(beepBoopArr);
        console.log(newBeepBoopArr);
        }   

Expected output: [0, beep, boop, wont you be my neighbor, 4, 5, 6, 7, 8, 9, beep, beep, boop, wont you be my neighbor]

Describe beepBoop()
Test: refactor code to allow the same function processes but removing the need for newBeepBoopArr since it was useless
code:
    function beepBoop(userInput) {
      const beepBoopArr = [];
      for(let i = 0; i <= userInput; i++){
        if((i + " ").indexOf(1) < 0) {
          beepBoopArr.push(i);
          } else {
            beepBoopArr.push("Beep!");
            } 
        if((i + " ").indexOf(2) < 0) {
          //Dont do anything
        } else {
          beepBoopArr.splice(i, 1, "Boop!");
          }
        if((i + " ").indexOf(3) < 0) {
            //Dont do anything
          } else {
            beepBoopArr.splice(i, 1, "Wont you be my neighbor?");
            }
        } console.log(beepBoopArr);
        }  
Expected output: [0, beep, boop, wont you be my neighbor, 4, 5, 6, 7, 8, 9, beep, beep, boop, wont you be my neighbor]


Describe: html;
Test: create a submit field and button to get userInput for business logic.
code:


Expected Output: user inputes a number and an array comes out after hitting submit