body = document.body;
var main = document.getElementById("dmain");
timerEl = document.querySelector("#timer");
startQ = document.querySelector(".start");
time = document.querySelector(".time")
var viewHighs = document.getElementById("viewHigh")
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
highCount = document.getElementById("listScore")
initialHere = document.getElementById("initialHere");
clearScore = document.getElementById("clear");
var index = 0;
var score = 0;


//this is for the start button
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
        if (secLeft <= 0){
            time.textContent = "Time's Up!";
            
            storeScoreList()
        } 
        
        else if(secLeft === 1){
            time.textContent = "Time Remaining: " + secLeft + " second"
        }
    }, 1000)
    
    startQuestions()
})
//these are the array for questions and answers
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

//this is where the question begins
function startQuestions(){
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
            
    storescoreList()                                                                                         
    })
    ) 
                    
    } 

var scoreList = []
//this function adds list for every saved score
function renderscoreList() {
    highCount.innerHTML = "";
    for (var i = 0; i < scoreList.length; i++) {
      var todo = scoreList[i];  
      var li = document.createElement("li");
      li.textContent = todo;
      li.setAttribute("id","highScore", i);
      highCount.appendChild(li);
    }
  }
  
  //this function sets the array in local storage
  function init(){   
    var getstoredList =  JSON.parse(localStorage.getItem("scoreList"));
    if (getstoredList !== null) {
        scoreList = getstoredList;
      }
      renderscoreList();
  }

  //this is for the third part of the page displaying the initial submission
  function storescoreList() {
    clearInterval(secInterval)
    main.classList.add("hide")
    thirdPage.classList.remove("hide");
    pageFour.classList.add("hide"); 
    localStorage.setItem("scoreList", JSON.stringify(scoreList));    
  }

  //this function sets the initial and score to the local storage
  scoreInitial.addEventListener("click", function(event) {    
    var initialText = initialHere.value.trim();
    if (initialText === "") {
      return;
    }
    var userInitial = initialText    
    localStorage.setItem("initial", userInitial)
    localStorage.setItem("highScore", score)
    localStorage.setItem("newHigh", userInitial+ '        ' + score)
    var storedNewhigh = localStorage.getItem("newHigh");
    console.log(storedNewhigh)
    scoreList.push(storedNewhigh);
    initialHere.value = "";

    storescoreList();
    renderscoreList();

    main.classList.add("hide")
    thirdPage.classList.add("hide");
    pageFour.classList.remove("hide");  

  });

    init()

//this is for the retry button
tryAgain.addEventListener("click", function(){
    window.location.reload();
})

//this is for the clear highscore button
clearScore.addEventListener("click", function(){
    localStorage.clear()
    highCount.textContent = ""
})


//this is for the viewhighscore from the first page
viewHighs.addEventListener("click", function(){
    main.classList.add("hide")
    thirdPage.classList.add("hide");
    pageFour.classList.remove("hide");  
})
