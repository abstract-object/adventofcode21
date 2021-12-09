const fs = require('fs');

const findNext = (oxygen, remaining, position) => {
  let zeroCount = 0;
  let oneCount = 0;

  for (let i = 0; i < remaining.length; i++) {
    if (remaining[i].charAt(position) === '0') {
      zeroCount++;
    } else {
      oneCount++;
    }
  }

  const greatestCommonBit = oneCount >= zeroCount ? '1' : '0';
  const leastCommonBit = zeroCount <= oneCount ? '0' : '1';

  const match = oxygen ? greatestCommonBit : leastCommonBit;

  return remaining.filter(num => num.charAt(position) === match);
}

try {
  const bits = fs.readFileSync('input3.txt', 'utf8').split('\n');
  // clear empty line
  bits.pop();

  // init arrays for each of the two values that must be filtered
  let oxygenValue = [];
  let CO2Value = [];

  // go through each array bit by bit
  for (let i = 0; i < bits[0].length; i++) {
    if (oxygenValue.length !== 1) {
      oxygenValue = findNext(true, oxygenValue.length ? oxygenValue : bits, i);
    } 
    if (CO2Value.length !== 1) {
      CO2Value = findNext(false, CO2Value.length ? CO2Value : bits, i);
    }
  }

  console.log(parseInt(oxygenValue[0], 2) * parseInt(CO2Value[0], 2));
} catch (err) {
  console.error(err);
}it