function reverseArr(arr) {
  let result = []
  for(let a = arr.length-1; a >= 0; a--) {
    result.push(arr[a])
  }
  return result
}

function generateBoard(num) {
  // your code here
  let x = 1
  let mainBoard = []
  for (let a = 0; a < num; a++) {
    let fillerBoard = []
    mainBoard.push(fillerBoard)
    for (let b = 0; b < num; b++) {
      mainBoard[a].push(x)
      x++
    }
  }
  mainBoard = reverseArr(mainBoard)
  for (let d = 0; d < mainBoard.length; d++) {
    if (num % 2 === 0) {
      if (d % 2 === 0) {
        mainBoard[d] = reverseArr(mainBoard[d])
      }
    } else {
      if (d % 2 !== 0) {
        mainBoard[d] = reverseArr(mainBoard[d])
      }
    }
  }
  return mainBoard
}

console.log(generateBoard(8))
console.log(generateBoard(10))