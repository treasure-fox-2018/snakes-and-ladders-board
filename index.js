function generateBoard(row, col){
    let arr = []
    let number = row*col
    for(let rw = 0; rw < row; rw++){
        let arrTemp = [];
        for(let cl = 0; cl < col; cl++){
            arrTemp.push(number)
            number--;
        }
     
        if(rw%2 === 0){
            arr.push(arrTemp)
        }else{
            let arrReverse = []
            for(let a = arrTemp.length-1 ; a >= 0; a--){
                arrReverse.push(arrTemp[a])
            }
            arr.push(arrReverse)
        }
     
    }
    return arr;
}

console.log(generateBoard(10,10))

