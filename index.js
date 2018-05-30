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
  let arrX = []
  let newArrX = []
  for (let a = 0; a < num; a++) {
    arrX.push([])
    for (let b = 0; b < num; b++) {
      arrX[a].push(x)
      x++
    }
  }
  for (let c = arrX.length-1; c >= 0; c--) {
    newArrX.push(arrX[c])
  }
  for (let d = 0; d < newArrX.length; d++) {
    if (num % 2 === 0) {
      if (d % 2 === 0) {
        newArrX[d] = reverseArr(newArrX[d])
      }
    } else {
      if (d % 2 !== 0) {
        newArrX[d] = reverseArr(newArrX[d])
      }
    }
  }
  return newArrX
}

console.log(generateBoard(8))
console.log(generateBoard(10))