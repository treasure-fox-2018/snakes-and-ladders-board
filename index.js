function generateBoard (num) {
  var count = num * num
  var mainBoard = []
  for (var a = 0; a < num; a++) {
    var numArr = []
    for (var b = 0; b < num; b++) {
      if (count > 0) {
        numArr.push(count)
        count -= 1
      }
    }
    mainBoard.push(numArr)
  }
  return mainBoard
}

console.log(generateBoard(10))

function reverseBoard (arr) {
  for (var a = arr.length -1; a >= 0; a--) {
    if (a % 2 !== 0) {
      arr[a] = sortBoard(arr[a])
    } else {
      arr[a] = sortBoard(arr[a])
    }
  }
  return arr
}

function sortBoard (arr) {
  var result = [];
  for (let i = arr.length-1; i >= 0; i--) {
    result.push(arr[i])
  }
  return result
}

var mainArr = generateBoard(10)

console.log(reverseBoard(mainArr))

