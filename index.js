function snakeLadders(num){
    let mainArr = []
    let jmlbilangan = num*num
    for(let i = 0; i < num; i++){
        mainArr.push([])
    }
    

    // membuat array kosong sebanyak num
    for(let i = 0; i < mainArr.length; i++){
        for(let j = 0; j < num; j++){
            if(i % 2 === 0){
                mainArr[i].push(jmlbilangan)
                jmlbilangan--
            }else {
              mainArr[i].push(jmlbilangan)
              jmlbilangan--
            }
        }
    }
    
    // memasukkan nilai ke dalam array
    if(num % 2 === 0){
        for(var i = 0; i < mainArr.length; i++){
            if(i % 2 !== 0){
                for(var j = 0; j < mainArr[i].length; j++){
                    for(var k = j+1; k < mainArr[i].length; k++){
                        if(mainArr[i][j] > mainArr[i][k]){
                            var temp = mainArr[i][j]
                            mainArr[i][j] = mainArr[i][k]
                            mainArr[i][k] = temp
                        }
                    }
                }
            }
        }   
    }else{
        for(var i = 0; i < mainArr.length; i++){
            if(i % 2 === 0){
                for(var j = 0; j < mainArr[i].length; j++){
                    for(var k = j+1; k < mainArr[i].length; k++){
                        if(mainArr[i][j] > mainArr[i][k]){
                            var temp = mainArr[i][j]
                            mainArr[i][j] = mainArr[i][k]
                            mainArr[i][k] = temp
                        }
                    }
                }
            }
        }  
    }
   return mainArr
    
    
    
}

console.log(snakeLadders(8));
console.log(snakeLadders(3));
