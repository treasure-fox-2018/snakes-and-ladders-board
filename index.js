function generateBoard(num) {
    var result = [];
    var numbers = num * num;
  
    for (var i = 0; i < num; i++) {
      var groupRow = [];
      var fromLeft = 0;
      var fromRight = 0;
      
      if (i % 2 === 0) {
        fromLeft = numbers;
        fromRight = numbers - num + 1;
        for (var j = fromLeft; j >= fromRight; j--) {
          groupRow.push(j);
        }
      } else {
        fromLeft = numbers - num + 1;
        fromRight = numbers;
        for (var k = fromLeft; k <= fromRight; k++) {
          groupRow.push(k);
        }
      }
      numbers -= num;
      result.push(groupRow);
    }
    return result;
  }

console.log(generateBoard(8));