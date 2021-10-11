const findValue = (items, target) => {
  let arr = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (items[i] + items[j] === target) {
        if (arr.length < 2) {
            if (i !== j) {
                arr.push(items[i]);
                arr.push(items[j]);
            }
        }
      }
    }
  }
  console.log(`${arr[0]} , ${arr[1]}`);
};
findValue([24, 4, 6, 8, 9, 23], 18);