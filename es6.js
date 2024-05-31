// ES6

// console.log(number)
// var number = 10;

let angka = 10;
angka = 5;
// console.log(angka)

const pi = 3.14;
// pi = 5;
// console.log(pi)

// Template Literal

let kata1 = "buka";
let kata2 = "puasa";
let kata3 = "segar";

// Result: buka puasa segar

// ES5
// console.log(kata1 + " " + kata2 + " " + kata3);

// ES
// console.log(`${kata1} ${kata2} ${kata3}`)

// Arrow Function

// Function Declaration
function hello() {
  console.log("Hello");
}
// hello()

// Function Expression
const helloExpression = function () {
  console.log("Hello Expression");
};
// helloExpression()

// Function Arrow

const helloArrw = () => {
  console.log("Hello Arrow");
};
// helloArrow()

// High Order Function

let scores = [7, 2, 3, 5, 1];

scores.forEach((score) => {
  // console.log(score)
});

let powerScores = scores.map((score) => score ** 2);

let filterScores = powerScores.filter((score) => score > 10);

// console.log(powerScores)
// console.log(filterScores)

// Destructuring

// Array

let students = ["vincent", 3.21, true];

// ES5
// let name = students[0]
// let gpa = students[1]
// let isGraduated = students[2]

// ES6
let [name, gpa, isGraduated] = students;

// Object

let item = {
  type: "Laptop",
  price: 100000,
};

let { type, price } = item;

// Study Case: Buat sebuah inventory management (CRUD)

/**
 * Buatlah function2  - function berikut:
 * 
 * 1. function showCarts
 * 2. function addItem
 * 3. function deleteCart
 * 4. function updateCart
 * 5. function getCartById
 */


let carts = [
  {
    id: 1,
    name: "Dell i5-12700",
    type: "laptop",
    price: 10000000,
    stock: 5,
    status: true,
  },
  {
    id: 2,
    name: "HP i5-12700",
    type: "laptop",
    price: 7000000,
    stock: 5,
    status: true,
  },
  {
    id: 3,
    name: "Razor Gaming Mouse",
    type: "mouse",
    price: 175000,
    stock: 3,
    status: false,
  },
];

const showCarts = () => {
  console.log("Carts list: ");
  carts.forEach((cart) => {
    const { id, name, type, price, status, stock } = cart;
    if (status === true) {
      console.log(`${id}. [X] ${name} - Rp. ${price}.`);
      console.log(`${type} - Stocks: ${stock} pcs`);
    } else {
      console.log(`${id}. [ ] ${name} - Rp. ${price}.`);
      console.log(`${type} - Stocks: ${stock} pcs`);
    }
  });
};

const addItem = (name, type, price, stock) => {
  const id = carts[carts.length - 1].id + 1;
  const status = true;

  carts.push({
    id,
    name,
    type,
    price,
    status,
    stock,
  });
};

const getCartById = (id) => {
    let temp = {}
    carts.forEach(cart => {
        if (cart.id === id){
            temp = cart
        }
    })
    console.log(temp)
}

const deleteCart = id => {
    carts = carts.filter(cart => cart.id !== id)
}

const updateCart = (id,name,type,price,status, stock) => {
    carts = carts.map(cart => {
        if(carts.id === id){
            cart.name= name;
            cart.type= type;
            cart.price= price;
            cart.status = status;
            cart.stock=stock;
        }
        return cart
    })
}
// addItem("Keyboard gaming", "keyboard", 50000, 2);
// showCarts();

getCartById(1);