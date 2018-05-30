const generateBoard = (boardHeight => {
    let printBoard = [];
    let totalNumbers = boardHeight * boardHeight;
    let currentNumber = totalNumbers - boardHeight;
    let isEven = (boardHeight % 2 === 0);
    for(let z = 0; z < boardHeight; z ++){
        printBoard.push([]);
        if(isEven){
            for(let i = totalNumbers; i > currentNumber; i-- ){
                printBoard[z].push(i);
             }
             isEven = !isEven
        }
        else{
            for(let i = currentNumber + 1; i <= totalNumbers; i++ ){
                printBoard[z].push(i);
             }
             isEven = !isEven
        }
        currentNumber -= boardHeight;
        totalNumbers -= boardHeight;
    }
    console.log(printBoard)

})

generateBoard(15)