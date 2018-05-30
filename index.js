function sneakLadders(snake) {
  let angka = snake * snake
  let board = []
  let reverse = []
  for (var i = 0; i < snake; i++) {
    board.push([])
    for (var j = 0; j < snake; j++) {
      board[i].push(angka--)
    }
  }

  //mereverse index kelipatan 2
  var hasilReverse = []
  for (var i = board.length - 1; i >= 0; i -= 2) {
    for (var j = board[i].length-1; j >= 0; j--) {
      reverse.push(board[i][j])
    }
    if (reverse.length === snake) {
      hasilReverse.push(reverse)
      reverse = []
    }
  }

  return hasilReverse

  for (var a = board.length-1; a >= 0; a -= 2) {
    // console.log(board[a])
  }

  // return board






}
// console.log(sneakLadders(10))
// console.log(sneakLadders(15))
console.log(sneakLadders(4))