function generateBoard(num) {
    var count = num * num

    var arr = []
    for (let i = 0; i < num; i++) {
        var isi = []
        for (let j = 0; j < num; j++) {
            isi.push(count)
            count--
        }
        if (num % 2 == 0) {
            if (i % 2 == 1) {
                for (let m = 0; m < isi.length; m++) {
                    var min = isi[m]
                    var index = m
                    for (let n = m; n < isi.length; n++) {
                        if (min > isi[n]) {
                            min = isi[n]
                            index = n
                        }
                    }
                    var temp = isi[m]
                    isi[m] = isi[index]
                    isi[index] = temp
                }
            }
        } else {
            if (i % 2 == 0) {
                for (let m = 0; m < isi.length; m++) {
                    var min = isi[m]
                    var index = m
                    for (let n = m; n < isi.length; n++) {
                        if (min > isi[n]) {
                            min = isi[n]
                            index = n
                        }
                    }
                    var temp = isi[m]
                    isi[m] = isi[index]
                    isi[index] = temp
                }
            }
        }
        arr.push(isi)
    }


    return arr
}

console.log(generateBoard(8));
console.log(generateBoard(15));
