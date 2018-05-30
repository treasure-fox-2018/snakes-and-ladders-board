function generateBoard(angka) {
  var arganjil = [];
  var outerArr = [];
  var genap = 0;
  for (let i = angka; i > 0; i--) {
    arganjil = [];

    genap = angka * i;
    var ganjil = angka * (i - 1) + 1;

    for (let j = 1; j <= angka; j++) {
      if (i % 2 !== 0) {
        arganjil.push(ganjil);
        ganjil++;
      } else {
        arganjil.push(genap);
        genap--;
      }
    }
    outerArr.push(arganjil);
  }
  return outerArr;
}
console.log(generateBoard(8));
