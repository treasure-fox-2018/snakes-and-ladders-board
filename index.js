function generateBoard(num){
	let board = []
	
	let isiBoard = []
	for(let b = num*num; b > 0; b--){
		isiBoard.push(b)
		if(isiBoard.length === num){
			board.push(isiBoard)
			isiBoard = []
		}
	}

	for(var c = 0; c < board.length; c++){
		for(let d = 0; d < board[c].length; d++){
			for(let a = 0; a < board[c].length; a++){
				if(num % 2 !==0){
					if(c % 2=== 0){
						if(board[c][d] < board[c][a]){
							var temp = board[c][d]
							board[c][d] = board[c][a]
							board[c][a] = temp
						}
					}
				} else {
					if(c % 2 !== 0){
						if(board[c][d] < board[c][a]){
							var temp = board[c][d]
							board[c][d] = board[c][a]
							board[c][a] = temp
						}
					}

				}
			}

		}
		
	}	
	

	return board
}


//console.log(generateBoard(10))
console.log(generateBoard(15))
console.log()
console.log(generateBoard(8))