function generateBoard (num){
  var motherBoard = []
  var row = []
  for (var i = num * num; i >= 1; i--){
    if (motherBoard.length % 2 !== 0){
      row.push(i)
      if (row.length === num){
        var reverse = ownSort(row)
        motherBoard.push(reverse)
        row = []
      }
    }
    else if (motherBoard.length % 2 === 0){
      row.push(i)
      if (row.length === num){
        motherBoard.push(row)
        row = []
      }
    }
  }
  if (row.length === 0){
      return motherBoard
    }
  motherBoard.push(row)

  return motherBoard
}

console.log(generateBoard(10))

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < i; j++){
      let number = arr[i]
      if(arr[i] < arr[j]){
        arr[i] = arr [j]
        arr[j] = number
      }
    }
    debugger;
  }
  return arr
}
