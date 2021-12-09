const fs = require('fs');
try {
  const moves = fs.readFileSync('input2.txt', 'utf8').split('\n');
  moves.pop();

  let hPos = 0;
  let depth = 0;

  for (let move of moves) {
    move = move.split(' ');

    switch (move[0]) {
      case 'forward':
        hPos += parseInt(move[1], 10);
        break;
      case 'down':
        depth += parseInt(move[1], 10);
        break;
      case 'up':
        depth -= parseInt(move[1], 10);
        break;
    }
  }
  console.log(hPos * depth);

  hPos = 0;
  depth = 0;
  let aim = 0;

  for (let move of moves) {
    move = move.split(' ');
    let val = parseInt(move[1], 10);

    switch (move[0]) {
      case 'forward':
        hPos += val;
        depth += val * aim;
        break;
      case 'down':
        aim += val;
        break;
      case 'up':
        aim -= val;
        break;
    }
  }
  console.log(hPos * depth);
} catch (err) {
  console.error(err);
}