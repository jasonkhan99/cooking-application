function gallonToLiter(gallonQuantity) {
  return gallonQuantity * 3.785411784
}

const gallonQuantity =  prompt("Enter number of gallons");
const result = gallonToLiter(gallonQuantity);
alert(result);