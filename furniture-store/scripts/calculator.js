const calculate = () => {
  let baseValue = 649000;
  let finalValue = 0;
  const fabricValue = Number(document.getElementById("fabric").value);
  const woodValue = Number(document.getElementById("wood").value);
  const amount = Number(document.getElementById("amount").value);

  finalValue = (baseValue + fabricValue + woodValue) * amount;

  document.getElementById("price").innerHTML =
    finalValue.toLocaleString() + " UZS";
};
