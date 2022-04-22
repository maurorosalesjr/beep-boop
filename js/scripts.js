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