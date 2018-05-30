function generateBoard(grid) {

    var board=[]
    
    var num=[]

    for(var x=0; x<grid; x++) {
        board.push([])
    }

    for(var a=grid*grid; a>0; a--) {
        num.push(a)
    }
    
    
    var temp=0
    if(grid%2===0) {
        for(var z=0; z<board.length; z++) {
            if(z%2===0) {
                for(var y=temp; y<num.length; y++) {
                    if(board[z].length>=grid) {
                        temp+=grid
                        break
                    } else {
                        board[z].push(num[y])
                    } 
                }   
            } else {
                for(var y=temp+grid-1; y>=temp-1; y--) {
                    if(board[z].length>=grid) {
                        temp+=grid
                        break
                    } else {
                        board[z].push(num[y])
                    } 
                }
            }
        }
    } else {
        for(var z=0; z<board.length; z++) {
            if(z%2===0) {
                for(var y=temp+grid-1; y>=temp-1; y--) {
                    if(board[z].length>=grid) {
                        temp+=grid
                        break
                    } else {
                        board[z].push(num[y])
                    } 
                }
            } else {
                for(var y=temp; y<num.length; y++) {
                    if(board[z].length>=grid) {
                        temp+=grid
                        break
                    } else {
                        board[z].push(num[y])
                    } 
                }
            }
        }
    }
   
    
    return board
}

console.log(generateBoard(10))
console.log(generateBoard(15))
console.log(generateBoard(8))


