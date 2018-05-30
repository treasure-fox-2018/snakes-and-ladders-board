function generateBoard(num){

    let hasil = [];
		let count = 1;

		for (let i = 0 ; i < num; i++) {
			hasil.push([]);
		}

	  for (let j = num - 1; j >= 0; j--) {
		   for (let k = 0; k < num; k++) {
			 hasil[j].push(count);
			 count++;
		}
    if(j % 2 === 0){
      hasil[j] = balikAngka(hasil[j])
    }
	}
	return hasil;

}

function balikAngka(num){
  let hasil = []

  for (var i = num.length - 1 ; i >= 0 ; i--) {
    hasil.push(num[i])
  }
  return hasil
}
console.log(generateBoard(8));
console.log(generateBoard(15));
