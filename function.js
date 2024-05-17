// Function

/**
 * Study Case 1
 * Buat lah sebuah function untuk cek jumlah faktor dari sebuah angka.
 *
 * Contoh:
 * cekJumlahFaktor(12)
 *
 * Result:
 * 6
 */
function cekJumlahFaktor(num) {
  var faktor = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      faktor++;
    }
  }
  return faktor;
}
console.log(cekJumlahFaktor(12))

// console.log(tests);
/**
 * Study Case 2
 * Buatlah sebuah function untuk cek apakah bilangan Prima atau tidak.
 *
 * Contoh:
 * cekBilanganPrima(19)
 *
 * Result:
 *  Bilangan Prima
 */

function cekBilanganPrima(num) {
  var jumlahFaktor = cekJumlahFaktor(num);
  if (jumlahFaktor === 2) {
    return "Bilangan Prima";
  } else {
    return "Bukan Bilangan Prima";
  }
}
// console.log(cekBilanganPrima(19))

/**
 * Study Case 3
 * Buatlah sebuah function untuk memecah sebuah kalimat menjadi per kata
 *
 * Contoh:
 * pecahKalimat("buka puasa bersama teman kuliah")
 *
 * Result:
 * ["buka","puasa","bersama","teman",""kuliah]
 */

function pecahKalimat(str) {
  var arrResult = [];
  var temp = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      // console.log(str[i])
      temp += str[i];
    } else {
      arrResult.push(temp);
      temp = "";
    }
    if (i === str.length - 1) {
      arrResult.push(temp);
      temp = "";
    }
  }
  console.log(arrResult);
}

// pecahKalimat("buka puasa bersama teman kuliah")

/**
 * Study Case 4
 * Buatlah sebuah function untuk menghitung rata2
 *
 * contoh:
 * countAverag([1,2,3,4,5])
 *
 * Result:
 * Average = 3.00
 */

function countAverage(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return (total / numbers.length).toFixed(2);
}
// console.log(countAverage([1,2,3,4,5]))

/**
 * Study Case 5
 * Buatlah sebuah function untuk mengecek apakah karakter 'x' sama dengan 'o'
 *
 * Contoh:
 * countXO('xoxoxoxxoo')
 *
 * Result:
 * true
 *
 */

function countXO(str) {
  var countO = 0;
  var countX = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      countX++;
    } else if (str[i] === "o") {
      countO++;
    }
  }

  if (countX === countO) {
    return true;
  } else {
    return false;
  }
}

// console.log(countXO("xoxoxoxoxoxo"));
