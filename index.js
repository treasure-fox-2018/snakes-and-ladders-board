function arrMult(num){
  var kelipatan = 1
  var arrReverse = []
  var arrMain = []
  for(let i = 0; i<num; i++){
    var arrRow = []
    arrMain.push(arrRow)
    for(let j = 0; j<num; j++){
      if(arrRow.length !== num){
        arrRow.push(kelipatan)
        kelipatan++
      }
    }
  }

  for(let a = arrMain.length-1; a>=0; a--){
    if(a%2 !== 0){
      let revArr=[]
      for(let b = arrMain[a].length-1; b>=0; b--){
        revArr.push(arrMain[a][b])
      }
      arrReverse.push(revArr)
    }else{
      arrReverse.push(arrMain[a])
    }
  }

  return arrReverse
}

function reverseArr(arr){

}

console.log(arrMult(9))
