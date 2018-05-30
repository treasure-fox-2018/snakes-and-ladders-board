/**
 * @function generateBoard
 * fungsi akan membuat array multidimensi dengan
 * @param {integer} num nilai yang akan menjadi basis ukuran array multidimensi yang akan dibuat
 * @returns {array} mengembalikan array multidimensi terurut dari num pangkat 2 hingga 1, seperti snake
 */

function generateBoard(num) {
    let outerArray = [];
    let start = num * num;


    for (let i = 0; i < num; i++) {
        let insideArray = [];
        let newStart;
        let stop;

        if (i % 2 === 0) {
          newStart = start;
          stop = start - num + 1;
          for (let j = newStart; j >= stop; j--) {
               insideArray.push(j);
          }
        } else {
            newStart = start - num + 1;
            stop = start;
            for (let j = newStart; j <= stop; j++) {
                 insideArray.push(j);
            }
        }

        start -= num;
        outerArray.push(insideArray);
    }

    return outerArray;

}

console.log(generateBoard(10));
