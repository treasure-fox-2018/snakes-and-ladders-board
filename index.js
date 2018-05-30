
function reverse(arr) {
    // buat nge balikin urutan a[0] jadi a[arr.length-1]
    let newArr = []
    for (let k = arr.length - 1; k >= 0; k--) {
        newArr.push(arr[k])
    }
    return newArr
}
function generateBoard (num) {
    let arrayReverse = []
    // let arrayLuar = []
    var counter = 1
    let arrayDalam = []

    // buat bikin array dalam nya sebanyak num nya
    for (let i = 0; i < num; i++) {
        arrayDalam.push([])
        // buat isi angka sebanyak num x num    
        for (let j = 0; j < num; j++) {
            arrayDalam[i].push(counter)
            counter++
        }    
    }

    // ngebalikin urutan array nya
    arrayReverse = reverse(arrayDalam)

    // kalo input num nya genap
    if (num % 2 === 0) {
        for (let l = 0; l < arrayReverse.length; l++) {
            if (l % 2 === 0) {
                arrayReverse[l] = reverse(arrayReverse[l])
            }
        } 
    } else if (num % 2 !== 0) { // jika input num nya ganjil
        for (let l = 0; l < arrayReverse.length; l++) {
            if (l % 2 !== 0) {
                arrayReverse[l] = reverse(arrayReverse[l])
            }
        } 
    }
    return arrayReverse
}    

console.log(generateBoard(6))
console.log(generateBoard(5))
console.log(generateBoard(8))
