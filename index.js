function generatedBoard(size) {
  var firstArr = [];
  var secArr = [];
  var input = size*size;
  for (var i = input; i >= 0; i--) {
    secArr.push(i);
    if (secArr.length === size) {
      firstArr.push(secArr);
      secArr = []
    }
  }

  if (size % 2 === 0) {
    for (var i = 0; i < firstArr.length; i++) {
      if (i % 2 === 1) {
        for (var j = 0; j < firstArr.length; j++) {
          for (var k = j + 1; k < firstArr.length; k++) {
            if (firstArr[i][k] < firstArr[i][j]) {
              var min = firstArr[i][j];
              firstArr[i][j] = firstArr[i][k];
              firstArr[i][k] = min
            }
          }
        }
      }
    }
  }else{
    for (var i = 0; i < firstArr.length; i++) {
      if (i % 2 === 0) {
        for (var j = 0; j < firstArr.length; j++) {
          for (var k = j + 1; k < firstArr.length; k++) {
            if (firstArr[i][k] < firstArr[i][j]) {
              var min = firstArr[i][j];
              firstArr[i][j] = firstArr[i][k];
              firstArr[i][k] = min
            }
          }
        }
      }
    }
  }
  return firstArr;
}
console.log(generatedBoard(8));
console.log(generatedBoard(5));
