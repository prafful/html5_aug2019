var currentCounter = 0
var todotextref = document.getElementById("todo")

function addTask(){
    console.log("inside add task function!")
    if(typeof(Storage) == "undefined"){
        var container = document.getElementById("todocontainer")
        container.innerText = "Local storage is not supported!"
    }else{
       currentCounter = localStorage.counter
       localStorage.setItem("todo_" + currentCounter, todotextref.value )
       localStorage.counter ++
       todotextref.value = ""
       todotextref.focus()
       loadAllTodo()

    }
}


function intialize(){
    if(localStorage.counter === undefined){
        localStorage.counter = 0
    }else{
        currentCounter = localStorage.counter
    }
    loadAllTodo()
}

function loadAllTodo(){
    var container = document.getElementById("todocontainer")
    container.innerHTML = ""
    //create new ol element in memory (other than DOM)
    var newol = document.createElement("ol")
    //append newol to DOM inside div
    container.appendChild(newol)

    var maximumcounter = localStorage.getItem("counter")
    console.log(maximumcounter)
    for(var i =0; i< maximumcounter; i++){
        //create new li items in memory
        var newli = document.createElement("li")
        //set inner text of new li to todo_i
        //<li>any task at counter i </li>
        newli.innerHTML = localStorage.getItem("todo_" + i)
        //append new li to new ol
        newol.appendChild(newli)
    }


}