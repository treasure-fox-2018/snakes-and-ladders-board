function generateBoard(num) {
  let output = [];
  let isEven = num % 2 === 0;
  let number = num * num;

  for (let i = 0; i < num; i++) {
    let row = [];
    for (let j = 0; j < num; j++) {
      if (i % 2 === 0) {
        isEven ? row.push(number) : row.unshift(number)
      }
      else {
        isEven ? row.unshift(number) : row.push(number)
      }
      number--;
    }
    output.push(row);
  }
  return output;
}

console.log(generateBoard(8));
console.log(generateBoard(10));
console.log(generateBoard(15));
