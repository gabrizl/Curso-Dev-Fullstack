function combineInventories(invetoryStoreA, inventoryStoreB) {
  let combinedInventory = {};

  for (let item in invetoryStoreA) {
    if (invetoryStoreA.hasOwnProperty(item)) {
      combinedInventory[item] = invetoryStoreA[item];
    }
  }

  for (let item in inventoryStoreB) {
    if (inventoryStoreB.hasOwnProperty(item)) {
      if (combinedInventory[item]) {
        combinedInventory[item] += inventoryStoreB[item];
      } else {
        combinedInventory[item] = inventoryStoreB[item];
      }
    }
  }

  return combinedInventory;
}

let invetoryStoreA = {
  apple: 10,
  banana: 5,
  orange: 7,
};

let inventoryStoreB = {
  banana: 3,
  apple: 4,
  grape: 8,
};

let combinedInventory = combineInventories(invetoryStoreA, inventoryStoreB);

console.log("Combined Inventory:", combinedInventory);
