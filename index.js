function generateBoard (size) {
  var angka = size*size;
  var mainBoard = [];
  for (var i = 0; i <= size - 1; i++) {
    var rowBoard = [];
    for (var j = 0; j <= size - 1; j++) {
      rowBoard.push(angka);
      angka--;
    }
    mainBoard.push(rowBoard);
  }
  for (var i = 0; i <= mainBoard.length - 1; i++) {
    for (var j = 0; j <= mainBoard[i].length - 2; j++) {
      for (var k = j+1; k <= mainBoard[i].length - 1; k++) {
        if (size % 2 === 0) {
          if (i % 2 !== 0) {
            if (mainBoard[i][j] > mainBoard[i][k]) {
              var sementara = mainBoard[i][j];
              mainBoard[i][j] = mainBoard[i][k];
              mainBoard[i][k] = sementara;
            }
          }  
        }
        else {
          if (i % 2 === 0) {
            if (mainBoard[i][j] > mainBoard[i][k]) {
              var sementara = mainBoard[i][j];
              mainBoard[i][j] = mainBoard[i][k];
              mainBoard[i][k] = sementara;
            }
          }
        }   
      }
    }
  }
  
  return mainBoard;
}

console.log(generateBoard(10))
console.log(generateBoard(15))
