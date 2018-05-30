function generateBoard(num) {
    let arrBoard = [];
    let counter = num * num;

    if(num % 2 == 0) {
        //GENAP
        for(let i = 0; i < num; i++) {
            arrBoard.push([]);
            if(i % 2 == 0) {
                for(let j = 0; j < num; j++) {
                    arrBoard[i].push(counter);
                    counter--;
                }
                counter -= num-1;
            } else if(i % 2 != 0){
                for(let j = 0; j < num; j++) {
                    arrBoard[i].push(counter);
                    counter++;
                }
                counter -= num+1;
            }
      }

    } else if(num % 2 != 0){
        //GANJIL
        counter -= num-1;
        for(let i = 0; i < num; i++) {
            arrBoard.push([]);
            if(i % 2 == 0) {
                for(let j = 0; j < num; j++) {
                    arrBoard[i].push(counter);
                    counter++;
                }
                counter -= num+1;
            } else if(i % 2 != 0){
                for(let j = 0; j < num; j++) {
                    arrBoard[i].push(counter);
                    counter--;
                }
                counter -= num-1;
            }
        }
    }

    return arrBoard;
}

console.log(generateBoard(15));
console.log(generateBoard(8));