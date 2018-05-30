function generateBoard(input){
    var result = []
    var num = input * input
    var arr = []
    for(let i=num; i>0; i--){
        arr.push(i)
        if(arr.length === input){
            result.push(arr)
            arr = []
        }
    }

    for(let j=0; j<result.length; j++){
        if(input%2 === 0){
            if(j%2 !== 0){
                result[j].sort(function(a, b){
                    return a-b})
            }
        }
        else {
            if(j%2 === 0){
                result[j].sort(function(a, b){
                    return a-b})
            }
        }
    }

    return result
}

console.log(generateBoard(10))
console.log(generateBoard(15))
