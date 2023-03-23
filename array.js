// Array

var numbers = [5, 2, 3, 1, 7];

for (var i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
}

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


var scores = [5,2,3,1,7,8,10,12,17]
var total = 0;
var average = 0;

for(var i = 0; i < scores.length; i++) {
    total += scores[i]
}

average = total / scores.length
console.log(average.toFixed(2))

