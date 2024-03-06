body = document.body;
var main = document.getElementById("dmain");
timerEl = document.querySelector("#timer");
startQ = document.querySelector(".start");
time = document.querySelector(".time")
var headerEl = document.querySelector("header");
var firstArticle = document.querySelector("article");
var secondPage = document.getElementById("Questions");
var thirdPage = document.getElementById("scoreInitial");
var scoreInitial = document.getElementById("submitInitial");
var pageFour = document.getElementById("lastPage");
startQ = document.querySelector(".start");
tryAgain = document.getElementById("retryBtn");
questionText = document.getElementById("questiontext");
optionA =  document.querySelector(".letterA");
optionB = document.querySelector(".letterB");
optionC = document.querySelector(".letterC");
optionD = document.querySelector(".letterD");
wrongCorrect = document.querySelector(".wrongcorrect")
scoreCount = document.getElementById("score");
highCount = document.getElementById("highScore")
var index = 0;
var score = 0;
var highScore = 0;




startQ.addEventListener("click", function()
{   
    
    firstArticle.classList.add("hide");
    secondPage.classList.remove("hide");
    secLeft = 120;
    timerEl.textContent = secLeft;
    secInterval = setInterval(function(){
        if (secLeft > 0){
            secLeft --;
            timerEl.textContent = secLeft 
        }
        if (secLeft === 0){
            time.textContent = "Time's Up!";
            partThree()
        } 
        
        else if(secLeft === 1){
            time.textContent = "Time Remaining: " + secLeft + " second"
        }
    }, 1000)
    startQuestions()
})

var questions = ["What Are the Looping Structures in JavaScript?",
                "The FUNCTION and VAR are known as:",
                "What are the different types of Pop up boxes available in JavaScript??",
                "What was the original name of JavaScript when it discovered?",
                "Which of the following is not a JavaScript Data Types?"]

var letterA = ["For loops",
            "Declaration statements",
            "Alert",
            "LiveScript",
            "Boolean"]

var letterB = ["While loops",
                "Keywords",
                "Prompt",
                "Mocha",
                "Undefined"]

var letterC = ["Do-while loops",
                "Data types",
                "Confirm",
                "EScript",
                "Float"]

var letterD = ["All of the above",
                "Prototypes",
                "All of the above",
                "JScript",
                "Number"]
var answer = ["All of the above", "Declaration statements", "All of the above", "Mocha", "Float"];

optionList = [optionA, optionB, optionC, optionD]
console.log(optionList)
//new xper starts
// function selectingAnswer(){
//     optionList.addEventListener("click",function(event1){
//     userAnswer =  event1.target.textContent
//     console.log(userAnswer)

//     if (userAnswer == answer[index]){
//         wrongCorrect.textContent = "That's right!"
//     }
//     if (userAnswer !== answer[index]){
//         wrongCorrect.textContent = "Wrong Answer"
//     }
// }
//     )
// }

// function startQuestions(){
//     selectingAnswer()
//     questionText.textContent = questions[index]
//     optionA.textContent = letterA[index]
//     optionB.textContent = letterB[index]
//     optionC.textContent = letterC[index]
//     optionD.textContent = letterD[index]
 
//     question2()
// }

// function question2(){
//     index = 1;
//     selectingAnswer()
//     questionText.textContent = questions[index]
//     optionA.textContent = letterA[index]
//     optionB.textContent = letterB[index]
//     optionC.textContent = letterC[index]
//     optionD.textContent = letterD[index]
 
//     //question2()
// }
//new xper ends
function startQuestions(score, highScore){
    score = 0;
    scoreCount.textContent = score;
    questionText.textContent = questions[index]
    optionA.textContent = letterA[index]
    optionB.textContent = letterB[index]
    optionC.textContent = letterC[index]
    optionD.textContent = letterD[index]


    optionList.forEach((element) => 
    element.addEventListener("click",function(event){
        
        userAnswer =  event.target.textContent
        if (userAnswer == answer[index]){
            wrongCorrect.textContent = "That's right!"
            score = score + 1;
            console.log(score)
            highScore = highScore + 1;
            scoreCount.textContent = score;
                
        }
        if (userAnswer !== answer[index]){
            wrongCorrect.textContent = "Wrong Answer"
            secLeft = secLeft - 10;
        }
   startQuestions2()    
})
)
}



function startQuestions2(){
    index = 1
    questionText.textContent = questions[index]
    optionA.textContent = letterA[index]
    optionB.textContent = letterB[index]
    optionC.textContent = letterC[index]
    optionD.textContent = letterD[index]
    optionList.forEach((element) => 
    element.addEventListener("click",function(event){
    
     startQuestions3()
    })
    )
    }
    
function startQuestions3(){
    index = 2
    questionText.textContent = questions[index]
    optionA.textContent = letterA[index]
    optionB.textContent = letterB[index]
    optionC.textContent = letterC[index]
    optionD.textContent = letterD[index]
    optionList.forEach((element) => 
    element.addEventListener("click",function(event){                            
    startQuestions4()
            
    })
    )
    }
        
    function startQuestions4(){
        index = 3
        questionText.textContent = questions[index]
        optionA.textContent = letterA[index]
        optionB.textContent = letterB[index]
        optionC.textContent = letterC[index]
        optionD.textContent = letterD[index]
        optionList.forEach((element) => 
        element.addEventListener("click",function(event){
                                
        startQuestions5()
                
    })
    )
    } 

    function startQuestions5(){
        index = 4
        questionText.textContent = questions[index]
        optionA.textContent = letterA[index]
        optionB.textContent = letterB[index]
        optionC.textContent = letterC[index]
        optionD.textContent = letterD[index]
        optionList.forEach((element) => 
        element.addEventListener("click",function(event){
            
            
            partThree()                                                                  
                
    })
    ) 
                    
    } 


function partThree(){
    main.classList.add("hide")
     thirdPage.classList.remove("hide");
     pageFour.classList.add("hide"); 

     scoreInitial.addEventListener("click", function(){

        //TODO
        //set to local storage
        
        localStorage.setItem("highScore", highScore);
        console.log(highScore)

        //take to fourth page

        fourthPart()
     })
}

function showHigh(){
localStorage.getItem("highScore");
highCount.textContent = highScore;
}


function fourthPart(){   
    main.classList.add("hide")
    thirdPage.classList.add("hide");
    pageFour.classList.remove("hide");
    

}


 
//TODO
//Take user back to the first page


tryAgain.addEventListener("click", function(){
    window.location.reload();
})



// TODO: Set local storage