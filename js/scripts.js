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
      
    
        