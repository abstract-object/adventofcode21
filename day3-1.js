const fs = require('fs');
try {
  const bits = fs.readFileSync('input3.txt', 'utf8').split('\n');
  // clear empty line
  bits.pop();

  // track final values, running count of bits in each position
  const overHalf = Math.floor(bits.length / 2) + 1;
  const final = [];
  const finalComplement = [];
  const bitCounts = [];

  for (let i = 0; i < bits[0].length; i++) {
    final.push(null);
    finalComplement.push(null);
    bitCounts.push([0, 0]);
  }
  
  for (let i = 0; i < bits.length; i++) {
    for (let j = 0; j < bits[i].length; j++) {
      if (final[j] === null) {
        bitCounts[j][Number(bits[i][j])]++;

        // preserve string format and manually calculate bitwise NOT
        if (bitCounts[j][0] >= overHalf) {
          final[j] = '0';
          finalComplement[j] = '1';
        } else if (bitCounts[j][1] >= overHalf) {
          final[j] = '1';
          finalComplement[j] = '0';
        }
      }
    }
  }

  const gamma = final.join('');
  const epsilon = finalComplement.join('');

  const result = parseInt(gamma, 2) * parseInt(epsilon, 2);

  console.log(result);
} catch (err) {
  console.error(err);
}