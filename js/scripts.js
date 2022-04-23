$(document).ready(function() {
  $("form#Beeps").submit(function(event) {
    event.preventDefault();
    const userInput = $("#userInput").val("");
    let beepBoopArr = beepBoop(userInput);
    const array = toString(beepBoopArr);

    if(parseInt(userInput) < 100) {
      $(".array").text(array);
    } else{
      $(".array").text("whoa, whoa whoa... thats too many for this neighbor")
    }
    

  });


// Business Logic
    function beepBoop(userInput) {
      const beepBoopArr = [];
      for(let i = 0; i <= userInput; i++){
        if((i + " ").indexOf(1) < 0) {
          beepBoopArr.push(i);
          } else {
            beepBoopArr.push("Beep!");
            };
        if((i + " ").indexOf(2) < 0) {
          //Dont do anything
        } else {
          beepBoopArr.splice(i, 1, "Boop!");
          }; 
        if((i + " ").indexOf(3) < 0) {
            //Dont do anything
          } else {
            beepBoopArr.splice(i, 1, "Wont you be my neighbor?");
            };
        }; console.log(beepBoopArr);
        return beepBoopArr;
        }  
