function generateBoard(num) {
  //buat array kosong
  var output = [];
  for (let i = 0 ; i < num ; i++) {
    output.push([]);
  }
  //isi array ular
  var counter = 1;
  var nilaiKiri = 1;
  for (let i = num-1 ; i>= 0 ; i-- ) { //lakukan perulangan row bawah ke atas
    if (counter % 2 !== 0) {  // cek counter ganjil apa genap , counter 1 dari row bawah
      for ( let j = nilaiKiri ; j <nilaiKiri+num ; j++) { //lakukan looping untuk write value dari kolom kiri ke kanan
        output[i].push(j);
      }
      nilaiKiri+=(2*num)-1; //set nilai kiri atau kolom ke 0
    } else { // jika counter baris dari bawah genap
      for ( let j = nilaiKiri ; j > nilaiKiri-num ; j--) { //lakukan looping untuk write value dari kolom kiri ke kanan
        output[i].push(j);
      }
      nilaiKiri+=1; //set nilai kiri atau kolom ke 0
    }
    counter++;
  }
  return output;
}

console.log(generateBoard(15));

console.log(generateBoard(8));
