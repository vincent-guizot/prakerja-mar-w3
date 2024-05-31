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
convertToBiner(10);
