// Conditional

/**
 * Study Case 1
 * Cek apakah bilangan ganjil atau genap/
 *
 * Contoh:
 * var num = 5;
 * Result:
 * 5 adalah Bilangan ganjil
 *
 * var num = 2;
 * Result:
 * 2 adalah Bilangan genap
 */

// Modulus % = sisa bagi
// 7 / 3 = 2 sisa 1
// 7 % 3 = 1

// var num = 2;

// if(num % 2 === 0){
//     console.log(num + " adalah Bilangan Genap")
// } else {
//     console.log(num + " adalah Bilangan Ganjil")
// }

/**
 * Study Case 2
 * Cek nilai dari sekolah:
 * Jika nilai di antara 85 - 100 maka Grade A
 * Jika nilai di antara 70 - 85 maka Grade B
 * Jika nilai di antara 55 - 70 maka Grade C
 * Jika nilai di antara 30 - 55 maka Grade D
 * Jika nilai di antara  0 - 30 maka Grade E
 */

// var score = 105;
// if (score >= 85 && score <= 100) {
//   console.log("Grade A");
// } else if (score >= 70 && score < 85) {
//   console.log("Grade B");
// } else if (score >= 55 && score < 70) {
//   console.log("Grade C");
// } else if (score >= 30 && score < 55) {
//   console.log("Grade D");
// } else if (score >= 0 && score < 30) {
//   console.log("Grade E");
// } else {
//     console.log("Enter the correct score, thanks.")
// }

/**
 * Study Case 3

E-commerce memberikan cashback besar-besaran menggunakan coupon code. Seorang pembeli akandapat cashback dari total pembelian barang yang dia beli. Berikut rincian coupon:

a. FreeOngkir
    Jika pembelian lebih dari atau sama dengan 50000. Maka akan ada potongan 10%.
    Jika pembelian antara 30000 dan 50000. Maka akan ada potongan 5%.
    Jika kurang dari 30000. Maka akan ada potongan 2.5%

b. Free15%
    Jika pembelian lebih dari atau sama dengan 30000. Maka akan ada potongan 15%.
    Jika kurang dari 300000. Maka akan ada potongan 0%

Contoh proses:
Total pembelian 100000 dan memilih coupon FreeOngkir, maka result: "Total pembelian anda Rp. 90000
 */

// var couponCode= "FreeOngkir";
// var price = 100000;
// var total = 0;

// switch(couponCode){
//     case 'FreeOngkir':
//         if(price >= 50000){
//             total = price * 0.9
//         } else if (price >= 30000 && price < 50000){
//             total = price * 0.95
//         } else {
//             total = price * 0.975
//         }
//         break;
//     case 'Free15%':
//         if(price >= 30000){
//             total = price * 0.85
//         } else {
//             total = price
//         }
//     break;
// }

// console.log("Total pembelian " + price + " dan memilih coupon " + couponCode + ", maka result: 'Total pembelian anda Rp.'"+ total+ "'")