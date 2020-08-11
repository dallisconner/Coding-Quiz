//Assign variables
var cardBody = document.querySelector(".card-body");
var btn1 = document.querySelector("#button1");
var btn2 = document.querySelector("#button2");
var btn3 = document.querySelector("#button3");
var btn4 = document.querySelector("#button4");
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
        newBtn.setAttribute("class","btn-primary btn-lg");
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
});

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
            return;
        }
    },1000);
}

//Store high scores
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

function init() {
  // Write code here to check if there are todos in localStorage
  // If so, parse the value from localStorage and assign it to the todos variable

  if(localStorage.getItem("todos") != null)
  {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Add code here to stringify the todos array and save it to the "todos" key in localStorage
  localStorage.setItem("todos",JSON.stringify(todos));
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});