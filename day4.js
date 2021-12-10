const fs = require('fs');
try {
  // get numbers to draw and boards, each element is now a string representation
  let data = fs.readFileSync('input4.txt', 'utf8').split('\n\n');

  // make an array of numbers out of string of numbers to draw
  const toDraw = data.shift().split(',').map(Number);

  // make an array of arrays of each board; each number is an array containing the number and whether it is marked
  const boards = data.map(board => board.split('\n').map(line => line.split(' ').filter(val => val.length).map(num => [Number(num), false])));
  
  
} catch (err) {
  console.error(err);
}