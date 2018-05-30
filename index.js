

function squareNumber(num) {

    let angka = num * num
    let board = []

    for (var i = 0; i < num; i++) {

        board.push([])

        for (var j = 0; j < num; j++) {

            board[i].push(angka--)

        }

    }

    for (var i = board.length - 1; i >= 0; i -= 2) {

        sortBoard(board[i])

    }

    return board
}


function sortBoard(board) {

    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            if (board[i] < board[j]) {
                let temp = board[i];
                board[i] = board[j];
                board[j] = temp;
            }
        }
    }
    return board

}
console.log(squareNumber(9));
// console.log(squareNumber());


