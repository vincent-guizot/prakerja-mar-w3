// Looping

// var num = 10

// for(var i = 1; i <= num; i++){
// console.log(i)
// }

/**
 * Study Case 1
 *
 *  Print 10 angka genap dan ganjil pertama
 *
 * var num = 10;
 * Result:
 * 1 adalah ganjil
 * 2 adalah genap
 * 3 adalah ganjil
 * 4 adalah genap
 * dst
 * 10 adalah genap
 *
 */

// var num = 10;
// for (var i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " adalah Bilangan Genap");
//   } else {
//     console.log(i + " adalah Bilangan Ganjil");
//   }
// }

/**
 * Study Case 2
 *
 * Cek jumlah dari faktor suatu bilangan
 *
 * var number = 15;
 * Faktor 15 : 1 3 5 15
 * Result:
 * Faktor dari 15 adalah 4.
 */

// var number = 15;
// var factor = 0;

// for(var i = 1; i <= number; i++) {
//     if(number % i ===0){
//         // console.log(i)F
//         factor++;
//     }
// }
// console.log("Faktor dari " + number + " adalah "+ factor + ".")

/** *
 * Study Case 3
 *
 * Cek apakah suatu bilangan adalah bilangan Prima atau bukan.
 * BIlangan Prima adalah bilangan yang hanya memiliki 2 faktor
 *
 * var num = 17;
 * Resutl:
 * 17 adalah Bilangan Prima
 */

var number = 15;
var factor = 0;

for (var i = 1; i <= number; i++) {
  if (number % i === 0) {
    // console.log(i)F
    factor++;
  }
}

if (factor === 2) {
  console.log(number + " adalah Bilangan Prima");
} else {
  console.log(number + " adalah Bukan Bilangan Prima");
}

/**
 * Study Case 4
 *
 * Hitung hasil dari sebuah angka factorial.
 * Contoh:
 *
 * 5! = 5.4.3.2.1.
 * Hasilnya 120.
 *
 * var num = 5;
 * Hasil: 120
 */

var num = 5;
var faktorial = 1;

for (var i = num; i >= 1; i--) {
  faktorial = faktorial * i;
}
console.log(faktorial);

/**
 * Study Case 5
 *
 * Print segitiga.
 *
 * Var num = 5;
 *
 * hasil nya:
 * #
 * ##
 * ###
 * ####
 * #####
 *
 */

var n = 5;
var temp = ""

for (var i = 0; i < n; i++) {
  for (var j = 0; j <= i; j++) {
   temp += "#";
  }
  console.log(temp);
  temp = "";
}
