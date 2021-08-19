const displayEntireBoard = function(){

    let boardContainerNode = document.getElementById("bingo-board")

    for (let number = 1; number <= 76; number++) {

        let newNumberNode = document.createElement("div") 
        newNumberNode.innerText = number 
        newNumberNode.id = number 
        newNumberNode.classList.add("number") 

        boardContainerNode.appendChild(newNumberNode)
    }
}

window.onload = function() {
    displayEntireBoard()
}