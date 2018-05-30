

function squareNumber(num) {
  if (num < 3) {
    return 'Minimal input adalah 3';
  } else {
    var arr = []; // creates a new array .. much preferred method too.
    for (var i = 0; i < num; i++) {
      arr[i] = [];
    }
    // console.log(arr);

    var numLimit = num * num;

    var arrValues = [];

    for (var p = 1; p <= num * num; p++) {
      arrValues.push(p);
    }

    // console.log(arrValues);

    var indexArrValues = 0;
    var booleanIndexTransformed = false;

    for (var j = arr.length - 1; j >= 0; j--) {
      var arrAccess = j;
      // console.log(arrAccess);
      for (var k = 0; arr[arrAccess].length < num; k++) {
        // console.log(indexArrValues);
        if (arr.length % 2 !== 0) {
          if (arrAccess % 2 === 0) {
            if (booleanIndexTransformed) {
              booleanIndexTransformed = false;
              indexArrValues += (num + 1)
            }
            arr[arrAccess].push(arrValues[indexArrValues]);
            indexArrValues ++;
          } else if (arrAccess % 2 !== 0) {
            if (booleanIndexTransformed !== true) {
              booleanIndexTransformed = true;
              indexArrValues += (num - 1);
            }
            arr[arrAccess].push(arrValues[indexArrValues]);
            indexArrValues --;
          }
        } else
        if (arr.length % 2 === 0) {
          // let booleanIndexTransformed = false;
          if (arrAccess % 2 !== 0) {
            if (booleanIndexTransformed) {
              booleanIndexTransformed = false;
              indexArrValues += (num + 1)
            }
            arr[arrAccess].push(arrValues[indexArrValues]);
            indexArrValues ++;
          } else if (arrAccess % 2 === 0) {
            if (booleanIndexTransformed !== true) {
              booleanIndexTransformed = true;
              indexArrValues += (num - 1);
            }
            arr[arrAccess].push(arrValues[indexArrValues]);
            indexArrValues --;
          }
        }
      }
    }
    return (arr);
  }
}
