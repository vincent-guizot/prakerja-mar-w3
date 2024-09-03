// Study Case 1

/**
 * Tentukan nilai / score terbesar dan terkecil llau jumlah kan.
 *
 * let scores = [10, 2, 3, 17, 23, 7, 12]
 *
 * Result:
 * Terbesar : 23
 * Terkecil : 2
 * Total max + min = 25
 *
 */

const countMaxMin = (scores) => {
  let min = scores[0];
  let max = scores[0];

  scores.forEach((score) => {
    if (score < min) {
      min = score;
    }
    if (score > max) {
      max = score;
    }
  });

  console.log(`Terbesar : ${max}`);
  console.log(`Terkecil : ${min}`);
  console.log(`Total: ${max + min}`);
};

// countMaxMin([10, 2, 3, 17, 23, 7, 12])

// Study Case 2

/**
 * Tampilkan isi dari array sesuai dengan result nya.
 *
 * let watches = ["Tag Heuer", "Seiko", "Swiss Army"]
 *
 * Result:
 * Saya punya Tag Heuer, Seiko, dan Swiss Army.
 *
 * Note: Tidak boleh cara manual
 */

const mentionWatches = (watches) => {
  let str = "Saya punya ";
  for (let i = 0; i < watches.length; i++) {
    if (i !== watches.length - 1) {
      str += watches[i] + ", ";
    } else {
      str += "dan " + watches[i] + ".";
    }
  }

  console.log(str);
};

// mentionWatches([
//     "Tag Heuer", "Seiko", "Swiss Army"
// ])

// Study Case 3

/**
 * Tentukan bilangan Biner dari bilangan Decimal yang di berikan.
 *
 * let decimal = 5;
 *
 *
 * Result:
 * Biner = 101
 */

const convertToBiner = (num) => {
  let binary = "";
  let result = "";

  while (num > 0) {
    binary = binary + (num % 2);
    num = Math.floor(num / 2);
  }
  for (let i = binary.length - 1; i >= 0; i--) {
    result += binary[i];
  }
  console.log(result);
};
// convertToBiner(10);

// Study Case 4

/**
 * Tentukan apakah ke 3 bilangan merupakan Triple Pythagoras
 *
 * let triples = [3, 4, 5]
 *
 * Result:
 * true
 *
 * Penjelasan:
 * Triple pythagorasa adalah kondisi jika seperti berikut:
 * 3^2 + 4^2 = 5^2
 *
 * */

const triples = (numbers) => {
  if (numbers[0] ** 2 + numbers[1] ** 2 === numbers[2] ** 2) {
    console.log(true);
  } else {
    console.log(false);
  }
};

// triples([3,4,5])

// Study Case 5

/**
 * Tampilkan hasil string sesuai result nya
 *
 * let str = "belajar coding"
 *
 * Result:
 * BeLaJaR CoDiNg
 * */

const printString = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  console.log(result);
};

// printString("belajar coding")

/**
 * Study Case 6
 *
 * Tentukan bilangan decimal dari biner:
 *
 * let biner = "10001";
 *
 * Result:
 * Bilangan Biner dari 10001 : 17
 *
 */

const BinaryToDecimal = (binary) => {
  let decimal = 0;
  let x = 0;
  if (binary) {
    for (let i = binary.length - 1; i >= 0; i--) {
      // console.log(binary[i])
      decimal += Number(binary[i]) * 2 ** x;
      x++;
    }
    console.log(decimal);
  } else {
    console.log("Tidak ada Biner");
  }
};

// BinaryToDecimal("10001"); // 17
// BinaryToDecimal("101"); // 5
// BinaryToDecimal(); // Tidak ada Biner

/**
 * Study Case 7
 *
 * Tentukan jumlah dari bilangan ganjil dan genap pertama.
 *
 * let genap = 5;   => 2 4 6 8 10
 * let ganjil = 5;  => 1 3 5 7 9
 *
 * Result:
 * Total genap: 30
 * Total ganjil: 25
 *
 */

const countEvenOdd = (genap, ganjil) => {
  let totalGenap = 0;
  let totalGanjil = 0;

  let x = 0;
  let i = 1;
  while (x < genap) {
    if (i % 2 === 0) {
      totalGenap += i;
      x++;
    }
    i++;
  }
  let y = 0;
  let j = 1;
  while (y < ganjil) {
    if (j % 2 === 1) {
      totalGanjil += j;
      y++;
    }

    j++;
  }

  console.log("Total Genap: ", totalGenap);
  console.log("Total Ganjil: ", totalGanjil);
};

// countEvenOdd(5, 3);

/**
 * Study Case 8
 *
 * Tentukan tampilan seperti berikut ini:
 *
 * let num = 5;
 *
 * Reulst:
 * 1
 * 12
 * 123
 * 1234
 * 12345
 *  *
 *
 *
 */

const numberLadder = (n) => {
  let result = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result += j + 1;
    }
    console.log(result);
    result = "";
  }
};

// numberLadder(5);

/**
 * Study Case 9
 *
 * Tentukan tampilan seperti berikut ini:
 *
 * let x = 5;
 *
 * Result:
 * #####
 * #   #
 * #   #
 * #   #
 * #####
 *
 */

const printRectangle = (x) => {
  let temp = "";

  for (let i = 0; i < x; i++) {
    if (i === 0 || i === x - 1) {
      for (let j = 0; j < x; j++) {
        temp += "#";
      }
      console.log(temp);
      temp = "";
    } else {
      for (let j = 0; j < x; j++) {
        if (j === 0 || j === x - 1) {
          temp += "#";
        } else {
          temp += " ";
        }
      }
      console.log(temp);
      temp = "";
    }
  }
};

printRectangle(5);

/** 
 * Study Case 10
 * 
 * Tampilkan N bilangan prima pertama
 * 
 * let n = 5;
 * 
 * Result:
 * 2
 * 3
 * 5
 * 7
 * 11
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

const printPrimes = (n) => {
  let x = 0;
  let i = 2;
  while(x < n){
    if(cekJumlahFaktor(i) === 2){
      console.log(i)
      x++;
    }
    i++
  }
}

printPrimes(5)