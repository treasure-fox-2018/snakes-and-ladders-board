function sneakLadders(input) {
  let startNumber = Math.pow(input, 2)
  let endNumber = startNumber - input + 1
  let gameBoard = []

  if (input % 2 === 0) {

    for (let i = 0; i < input; i++) {
      gameBoard.push([])

      if (i % 2 === 0) {
        for (let a = startNumber; a >= endNumber; a--) {
          gameBoard[i].push(a)
        }
      } else {
        for (let a = endNumber; a <= startNumber; a++) {
          gameBoard[i].push(a)
        }
      }

      startNumber -= input
      endNumber -= input
    }

  } else {

    for (let j = 0; j < input; j++) {
      gameBoard.push([])

      if (j % 2 === 1) {
        for (let a = startNumber; a >= endNumber; a--) {
          gameBoard[j].push(a)
        }
      } else {
        for (let a = endNumber; a <= startNumber; a++) {
          gameBoard[j].push(a)
        }
      }

      startNumber -= input
      endNumber -= input
    }

  }

  return gameBoard
}
console.log(sneakLadders(10))
console.log(sneakLadders(15))
console.log(sneakLadders(4))