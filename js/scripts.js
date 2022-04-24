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


$(document).ready(function() {
  $("form#Beeps").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#input").val();
    const beepBoopArr = beepBoop(userInput);
    $(".returner").css("display", "block");

    if(parseInt(userInput) < 100) {
      $("#result").html(beepBoopArr);
    } else {
      $("#result").html("whoa, whoa whoa... thats too many for this neighbor")
    }
    $(".returner").show()
  });
})