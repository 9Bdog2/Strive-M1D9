const displayEntireBoard = function(){

    let boardContainerNode = document.getElementById("bingo-board")

    for (let number = 1; number <= 76; number++) {
        //Creating 76 Bingo Numbers
        let newNumberNode = document.createElement("div") 
        newNumberNode.innerText = number 
        newNumberNode.id = number 
        newNumberNode.classList.add("number") 
        // Set "selectNumber" function as a listener for the "click" event
        newNumberNode.onclick = selectNumber
        //Attaching to the DOM
        boardContainerNode.appendChild(newNumberNode)
    }
}

/* const selectNumber = function(eventData){
    // DESELECT THE CURRENTLY SELECTED Number
    let currentSelectedNumber = getSelectedNumber
    if(currentSelectedNumber !== null){
        currentSelectedNumber.classList.remove("selected")
    }
    // SELECT THE Number THAT HAS JUST BEEN CLICKED
    let clickedNumberNode = eventData.target
    clickedNumberNode.classList.add("selected")
    currentSelectedNumber = clickedNumberNode

}

const getSelectedNumber = function(){
    // this will find the first element in the page that has the "selected" class assigned, if any
    return document.querySelector(".selected")
} */

const randomNumber = function(){
    //get random number
    let randomNumber = Math.floor(Math.random() * 76)
    //assign random number to
    let number = document.getElementById(randomNumber)
    number.classList.add("selected")
}

window.onload = function() {
    displayEntireBoard()
    selectNumber()
    getSelectedNumber()
}



