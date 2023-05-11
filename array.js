// Array

// var numbers = [5, 2, 3, 1, 7];

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

var items = ["laptop", "hp", "tablet"];
// console.log(items)
for (var i = 0; i < items.length; i++) {
  //   console.log(i + 1 + ". " + items[i]);
}

var students = [
  [1, "vincent", 3.5],
  [2, "ncent", 3.0],
  [3, "admin", 2.1],
];

// for (var i = 0; i < students.length; i++) {
//   if (students[i][2] >= 3.0) {
//     console.log(
//       students[i][0] + ". " + students[i][1] + ", IPk: ",
//       students[i][2]
//       +", Lulus"
//     );
//   } else {
//     console.log(
//       students[i][0] + ". " + students[i][1] + ", IPk: ",
//       students[i][2]
//       +", Tidak Lulus"
//     );
//   }
// }

// Study Case
// Hitung jumlah dari semua value / isi array dan cari rata2 nya

// var scores = [5,2,3,1,7,8,10,12,17]
// var total = 0;
// var average = 0;

// for(var i = 0; i < scores.length; i++) {
//     total += scores[i]
// }

// average = total / scores.length
// console.log(average.toFixed(2))

// Penggunaan .map

var numbers = [1, 2, 3, 4, 5];
// Result : [1,8,27,64,125]

// pake for biasa
var power3 = [];
for (var i = 0; i < numbers.length; i++) {
  power3.push(numbers[i] ** 3);
}
// console.log(power3);

// pake .map
var powerThree = numbers.map((number) => number ** 3);
// console.log(powerThree);

// pake foreach

// numbers.forEach((number) => console.log(number));

// do {} while => di execute terlebih dahulu baru di cek,

// while => di cek terlebih dahulu baru di execute

var items = [
  {
    id: 1,
    name: "laptop"
  }
]

var student = {
  name: "Vincent",
  hobbies: [
    "eating", "sleeping"
  ]
}



// Study Case

/**
 * Pecah semua karakter dalam string menjadi array
 * 
 * Contoh:
 * var str = "makan",
 * 
 * Result:
 * ['m','a','k','a','n']
 * 
 */

// Built In Function str.split()

var str = "makan";
var result = str.split();

// Cara manual / traditional

var result1 = []
for(var i = 0; i < str.length; i++){
  result1.push(str[i])
}