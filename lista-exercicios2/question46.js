function summarizeSales(salesArray) {
  let salesSummary = {};
  salesArray.forEach((sale) => {
    let { vendedor, valor } = sale;
    if (salesSummary[vendedor]) {
      salesSummary[vendedor] += valor;
    } else {
      salesSummary[vendedor] = valor;
    }
  });
  return salesSummary;
}

let sales = [
  { vendedor: "Alice", valor: 150 },
  { vendedor: "Bob", valor: 200 },
  { vendedor: "Alice", valor: 300 },
  { vendedor: "Charlie", valor: 250 },
  { vendedor: "Bob", valor: 100 },
];

let salesSummary = summarizeSales(sales);

console.log("Sales Summary:", salesSummary);
