function repeatingelement(arr) {
  const freqCounter = new Map();
  for (let item of arr) {
    if (freqCounter.has(item)) {
      freqCounter.set(item, freqCounter.get(item) + 1);
    } else {
      freqCounter.set(item, 1);
    }
  }
  let rep;
  let miss;
  for (let i = 1; i <= arr.length; i++) {
    if (freqCounter.get(i) > 1) {
      rep = i;
    }
    if (!freqCounter.has(i)) {
      miss = i;
    }
  }
  return [rep, miss];
}
const res = repeatingelement([3, 1, 2, 5, 3]);
console.log(res);
