//For this challenge, the fastest way to solve it is with an O(N) algorithm.
var fs = require('fs');
var path = require('path');
var inputPath = path.join(__dirname, 'input.txt');
var puzzleInput = fs.readFileSync(inputPath, 'utf8');

let floorNumber = 0;
let santaHasNotEnteredBasementYet = true;
let basementEntryPosition = null;
for (let i = 0; i < puzzleInput.length; i++) {
	puzzleInput[i] === '(' ? floorNumber++ : floorNumber--;
	if (floorNumber < 0 && santaHasNotEnteredBasementYet) {
		santaHasNotEnteredBasementYet = false;
		basementEntryPosition = i + 1;
	}
}
console.log({ floorNumber, basementEntryPosition });
