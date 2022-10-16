function duplicate(arr) {
  // freq counter
  const freqMap = new Map();
  for (let item of arr) {
    if (freqMap.has(item)) {
      freqMap.set(item, freqMap.get(item) + 1);
    } else {
      freqMap.set(item, 1);
    }
  }
  for (let [item, value] of freqMap) {
    if (value > 1) {
      return item;
    }
  }
}
const d = duplicate([1, 3, 4, 2, 2]);
console.log(d);
