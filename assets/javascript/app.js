//Totally Trivial Trivia!
var number = 10;
var intervalId;

$("#content").hide();
$("#result").hide();

$("#start").on("click",function(){
    $("#content").show();
    $("#start").hide();
    $("#time").html("<h2>" + number + "seconds" + "</h2>")
    run();
})
$("#done").on("click", function(){
    endGame();

})

function run(){
    intervalId = setInterval(decrement,1000);
}
function decrement(){
    number--;
    $("#time").html("<h2>" + number + "seconds" + "</h2>")
    if (number === 0){
    stop();
    endGame();
}
}

function stop() {

    clearInterval(intervalId);
  }

//check the answer right or wrong:
function endGame(){
    $("#result").show();
    $("#content").hide();

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var answers = ["Iron", "Terrier", "P tag","Head"];

    for(var i = 0; i < answers.length; i++){
        //right answer:
        answers[i];
        //users answer:
        var userAnswer = $("input[name = '"+ (i+1) +"']:checked");
        if(userAnswer.length === 0){
            unanswered++;
        }
        else if(userAnswer.val() === answers[i]){
            correct++;
        }
        else{
            incorrect++;
        }


    }

    $("#correct").text("Correct Answer: " + correct);
    $("#incorrect").text("Incorrect Answer: " + incorrect);
    $("#unanswered").text("Unanswer: " + unanswered);
}







