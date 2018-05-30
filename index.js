function generateBoard(input) {
  let arrBox = [];
  let count = input*input
  for (var i = 0; i < input; i++) {
    arrBox.push([])
    if(input % 2 !== 0){
      for (var j = input-1; j >= 0; j--) {
        arrBox[i].push(count)
        count--
        // arrBox[i].push("1")
      }
        if(i % 2 === 0){
        arrBox[i] = reverseArr(arrBox[i])
        }
    }else {
      for (var j = 0; j < input; j++) {
          arrBox[i].push(count)
          count--
          // arrBox[i].push("1")
      }
      if(i % 2 !== 0){
        arrBox[i] = reverseArr(arrBox[i])
      }
    }
  }
  return arrBox
}

function reverseArr(input) {
  let tmpArr = []
  for(var i = input.length-1; i>=0; i--){
    tmpArr.push(input[i])
  }
  return tmpArr
}
console.log(generateBoard(15))
console.log(generateBoard(8))
