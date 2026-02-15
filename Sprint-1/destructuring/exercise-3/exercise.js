let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

console.log("QTY  ITEM               TOTAL");

let totalOrderCost = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const itemTotal = (quantity * unitPricePence) / 100;
  totalOrderCost += itemTotal;

  console.log(
    `${quantity}    ${itemName.padEnd(18)} ${itemTotal.toFixed(2)}`
  );
});

console.log("\nTotal: " + totalOrderCost.toFixed(2));

