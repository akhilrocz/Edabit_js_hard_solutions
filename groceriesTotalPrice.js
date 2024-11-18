function getTotalPrice(groceries) {
  return groceries.reduce((totalPrice, grocery) => {
    return totalPrice + grocery.quantity * grocery.price;
  }, 0);
}

console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]));
console.log(
  getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Cereals", quantity: 1, price: 2.5 },
  ])
);
