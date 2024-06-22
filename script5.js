const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

function applyDiscountAndAddId(fruits) {
    return fruits.map((fruit, index) => ({
      id: index + 1,
      name: fruit.name,
      price: fruit.price * 0.8, 
    }));
}
console.log(applyDiscountAndAddId(fruits));