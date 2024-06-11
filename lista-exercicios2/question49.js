function categorizeTransactions(transactions) {
  let categorizedTransactions = {};

  transactions.forEach((transaction) => {
    const { categoria, valor } = transaction;

    if (!categorizedTransactions[categoria]) {
      categorizedTransactions[categoria] = {
        transactions: [],
        subtotal: 0,
      };
    }

    categorizedTransactions[categoria].transactions.push(transaction);

    categorizedTransactions[categoria].subtotal += valor;
  });

  return categorizedTransactions;
}

let transactions = [
  { id: 1, valor: 100, data: "2024-01-01", categoria: "Food" },
  { id: 2, valor: 200, data: "2024-01-02", categoria: "Transport" },
  { id: 3, valor: 50, data: "2024-01-03", categoria: "Food" },
  { id: 4, valor: 300, data: "2024-01-04", categoria: "Entertainment" },
  { id: 5, valor: 150, data: "2024-01-05", categoria: "Transport" },
  { id: 6, valor: 250, data: "2024-01-06", categoria: "Entertainment" },
];

let categorizedTransactions = categorizeTransactions(transactions);

console.log(
  "Categorized Transactions:",
  JSON.stringify(categorizedTransactions, null, 2)
);
