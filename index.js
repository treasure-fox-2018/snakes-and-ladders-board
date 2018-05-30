function generateBoard(num=10) {
  var board = []
  var count = 0
  for (var i = 0; i < num; i++) {
    var rowBoard = []
    for (var j = 0; j < num; j++) {
      if (i%2===0) {
        count++
        rowBoard.push(count)
      }
      else {
        count++
        rowBoard.unshift(count)
      }
    }
    board.unshift(rowBoard)
  }
  return board;
}


console.log(generateBoard(15));
console.log(generateBoard(8));
