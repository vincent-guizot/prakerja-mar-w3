/// Object

var student = {
  name: "VIncent",
  gpa: 3.21,
  isGraduated: true,
};

// console.log(student.name)
// console.log(student.gpa)
// console.log(student["isGraduated"])

var caca = {
  name: "Caca",
  weight: 45,
  height: 155,
  hobbies: ["nonton", "makan"],

  sebutkanHobby: function () {
    console.log("Hobby caca: ");
    for (var i = 0; i < this.hobbies.length; i++) {
      console.log(i + 1 + ". " + this.hobbies[i]);
    }
  },
  tambahkanHobby: function (hobbyName) {
    this.hobbies.push(hobbyName);
  },
};

// caca.tambahkanHobby("coding")
// caca.sebutkanHobby();

// Study Case
// Tentukan jumlah huruf vokal dalam suatu kalimat

// Contoh: var str = "buka puasa bersama teman kuliah"
/*
{
    a: 7,
    i: 1,
    u: 3,
    e: 2,
    o: 0
}
*/

function countVowels(str) {
  var result = {
    a: 0,
    i: 0,
    u: 0,
    e: 0,
    o: 0,
  };

  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result.a++;
    } else if (str[i] === "i") {
      result.i++;
    } else if (str[i] === "e") {
      result.e++;
    } else if (str[i] === "u") {
      result.u++;
    } else if (str[i] === "o") {
      result.o++;
    }
  }

  console.log(result);
}

// countVowels("buka puasa bersama teman kuliah")

// Study Case

// Tentukan voting atau nama orang nilai bilangan yang sering keluar

/**
 * var votes = ['vincent','vincent','admin']
 *
 * Result:
 * {
 *      vincent: 2,
 *      admin: 1
 * }
 *
 * Pemenang nya adalah vincent
 *
 * */

function countVotes(arr) {
  var result = {
    vincent: 0,
    admin: 0,
  };

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === "vincent") {
      result.vincent++;
    } else if (arr[i].toLowerCase() === "admin") {
      result.admin++;
    }
  }

  console.log(result);
}

// countVotes(["vincent","admin","vincent"])

// Array Of Objeects

var items = [
  {
    id: 1,
    name: "Laptop",
    price: 15000,
    isSold: true,
    tags: ["hardware"],
  },
  {
    id: 2,
    name: "Gadget",
    price: 10000,
    isSold: false,
    tags: ["hardware"],
  },
];

function addItem(name, price) {
  // menambahkan item
  var id = items[items.length - 1].id + 1;
  var isSold = false;
  var tags = [];

  items.push({
    id,
    name,
    price,
    isSold,
    tags,
  });
}

function showItems() {
  // menampilkan items
  console.log("Item List: ");
  for (var i = 0; i < items.length; i++) {
    console.log(items[i].id + ". " + items[i].name + ", Rp. " + items[i].price);
  }
}


function deleteItem(id){
    var temp=[]
    for(var i = 0; i < items.length; i++){
        if(items[i].id !== id){
            temp.push(items[i])
        }
    }
    items = [...temp]
}

function updateItem(id, name, price){
 var temp = []
 for(var i = 0; i< items.length; i++){
    if(items[i].id === id){
        items[i].name= name;
        items[i].price = price
    }
    temp.push(items[i])
 }
 items = [...temp]
}

function getItemById(id){
    var item = {}
    for(var i = 0; i < items.length; i++){
        if(items[i].id === id){
            item = items[i]
        }
    }

    console.log("Item Detail: ")
    console.log(item.id + ". " + item.name + ", Rp. " + item.price)
}

addItem("Keyboard", 500);
deleteItem(3)
updateItem(1, "Computer", 35000)
// showItems();

getItemById(1)
// console.log(items)

// Study Case

// Buat todo apps
