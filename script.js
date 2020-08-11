//Assign variables
var cardBody = document.querySelector(".card-body");
var btn1 = document.querySelector("#button1");
var btn2 = document.querySelector("#button2");
var btn3 = document.querySelector("#button3");
var btn4 = document.querySelector("#button4");
var buttons = document.querySelector(".qButton");
var cbFlag = true;
var qTitle = document.querySelector(".qTitle");
var qText = document.querySelector(".qText");
var qOrder = 0;
var time = document.querySelector("#time");
var seconds = 30;



//Create answer buttons after clicking continue
btn1.addEventListener("click", function()
{
    if(cbFlag==true)
    {
        for(var i=0;i<3;i++)
        {
        var newBtn = document.createElement("button");
        newBtn.setAttribute("class","btn-primary btn-lg qButton");
        newBtn.setAttribute("id","button"+(i+2));
        newBtn.textContent = "New Button";
        cardBody.append(newBtn);
        }
        cbFlag = false;

        btn2 = document.querySelector("#button2");
        btn3 = document.querySelector("#button3");
        btn4 = document.querySelector("#button4");

        question1();
        qOrder++;
        startTimer();
    }
    else if (qOrder==1)
    {
        question2();
        qOrder++;
    }
    else if (qOrder==2)
    {
        question3();
        qOrder++
    }
    else if (qOrder==3)
    {
        question4();
        qOrder++;
    }
    else if (qOrder>3)
    {
        window.location.href = "highscore.html";
    }

});

buttons.addEventListener("click", function()
{
    
})

//Create questions
function question1()
{
    qTitle.textContent = "Question 1"
    qText.textContent = "This is the placeholder text for question 1."
    btn1.textContent = "Q1A1";
    btn2.textContent = "Q1A2";
    btn3.textContent = "Q1A3";
    btn4.textContent = "Q1A4";
}

function question2()
{
    qTitle.textContent = "Question 2"
    qText.textContent = "This is the placeholder text for question 2."
    btn1.textContent = "Q2A1";
    btn2.textContent = "Q2A2";
    btn3.textContent = "Q2A3";
    btn4.textContent = "Q2A4";
}

function question3()
{
    qTitle.textContent = "Question 3"
    qText.textContent = "This is the placeholder text for question 3."
    btn1.textContent = "Q3A1";
    btn2.textContent = "Q3A2";
    btn3.textContent = "Q3A3";
    btn4.textContent = "Q3A4";
}

function question4()
{
    qTitle.textContent = "Question 4"
    qText.textContent = "This is the placeholder text for question 4."
    btn1.textContent = "Q4A1";
    btn2.textContent = "Q4A2";
    btn3.textContent = "Q4A3";
    btn4.textContent = "Q4A4";
}

//Create timer
function startTimer()
{
    setInterval(function()
    {
        if(seconds>0)
        {
            time.textContent = seconds;
            seconds--;

        }
        else
        {
            time.textContent = "Time's Up!";
            window.location.href = "highscore.html";
        }
    },1000);
}
