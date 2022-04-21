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
  
  



