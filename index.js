function generateBoard(num){
  var board = [];
  let total = num*num;
  let current = total - num;

  if (num % 2 ===0) {
    for (var i = 0; i < num; i++) {
      board.push([]);
      if (i % 2 === 0) {
        for (var j = total; j > current; j--) {
          board[i].push(j);
        }
        total -= num;
        current -= num;
      }else {
        for (var k = current + 1; k <= total; k++) {
          board[i].push(k);
        }
        total -= num;
        current -= num;
      }
    }
  }else if (num % 2 !== 0) {
    for (var i = 0; i < num; i++) {
      board.push([]);
      if (i % 2 !== 0) {
        for (var j = total; j > current; j--) {
          board[i].push(j);
        }
        total -= num;
        current -= num;
      }else {
        for (var k = current + 1; k <= total; k++) {
          board[i].push(k);
        }
        total -= num;
        current -= num;
      }
    }
  }
  return board;
}


console.log(generateBoard(15));
console.log(generateBoard(8));
console.log(generateBoard(10));
