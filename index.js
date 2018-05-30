function snakeBoard(row){

    let input = row * row
    let board =[]
    while(input > 0){
        for(let i=0;i<row;i++){
            let tampung = []
            for(let j=0;j<row;j++){
                tampung.push(input)
                input--
            }
            board.push(tampung)
            if(i % 2 !== 0){
                for(let k=1;k<board[i].length;k++){
                    for(let l=0;l<board[i].length;l++){
                        if(board[i][k] < board[i][l]){
                            let rever = board[i][k]
                            board[i][k] = board[i][l]
                            board[i][l] = rever
                        }
                    }
                }
            }
        }
        return board
    }
}
console.log(snakeBoard(10))
console.log(snakeBoard(8))
console.log(snakeBoard(15))