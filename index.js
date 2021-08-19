const displayEntireBoard = function(){

    let boardContainerNode = document.getElementById("bingo-board")

    for (let number = 1; number <= 76; number++) {

        let newNumberNode = document.createElement("div") 
        newNumberNode.innerText = number 
        newNumberNode.id = number 
        newNumberNode.classList.add("number") 

        newNumberNode.onclick = selectNumber

        boardContainerNode.appendChild(newNumberNode)
    }
}

const selectNumber = function(eventData){
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
    return document.querySelector(".selected")
}

const random = function(){
    alert("Clicked")
}

window.onload = function() {
    getSelectedNumber()
    displayEntireBoard()
}