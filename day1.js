const fs = require('fs');
try {
  const depths = fs.readFileSync('input1.txt', 'utf8').split('\n');
  let increases = 0;

  for (let i = 1; i < depths.length - 1; i++) {
    if (parseInt(depths[i], 10) > parseInt(depths[i - 1], 10)) {
      increases++;
    }
  }

  console.log(increases);

  let windowIncreases = 0;
  let previousSum = parseInt(depths[0], 10) + parseInt(depths[1], 10) + parseInt(depths[2], 10);

  for (let i = 1; i < depths.length - 3; i++) {
    let currentSum = parseInt(depths[i], 10) + parseInt(depths[i + 1], 10) + parseInt(depths[i + 2], 10);
    if (currentSum > previousSum) {
      windowIncreases++;
    }
    previousSum = currentSum;
  }

  console.log(windowIncreases);
} catch (err) {
  console.error(err);
}