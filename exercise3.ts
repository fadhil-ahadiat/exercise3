// exercise 3

/* 1. write a code to swap the case of each character from string

solution:
use function and return the new text;
use for loop;
use if-else (if lowercase -> uppercase, if uppercase -> lowercase);
use built-in uppercase and lowercase method;
*/

let _text: string = "The QuiCk BrOwN Fox";

function _swap(_text) {
    let _newText: string = "";
    for (let i: number = 0; i < _text.length; i++) {
        if (_text[i] === _text[i].toLowerCase()) {
            _newText += _text[i].toUpperCase();

        } else {
            _newText += _text[i].toLowerCase();
        }
    }
    return _newText;
}

console.log(_swap(_text));

/* 2. write a code to find the largest of two given integers

solution:
use if-else;

*/

let _numA: number = 42;
let _numB: number = 27;
let _numBiggest: any;

if (_numA > _numB) {
    _numBiggest = _numA;
} else {
    console.log(_numB);
}
console.log(_numBiggest);

/* 3. write a conditional statement to sort three numbers

solution:
if-else;
if num1 >= num2 && num1 >= num3, print num1;
if num2 >= num1 && num2 >= num3, print num2;
else, print num3;
*/

let _num1: number = 213;
let _num2: number = 208;
let _num3: number = 293123771;
let _biggestNumber: any;

if (_num1 >= _num1 && _num1 >= _num3) {
    _biggestNumber = _num1;
} else if (_num2 >= _num1 && _num2 >= _num3) {
    _biggestNumber = _num2;
} else {
    _biggestNumber = _num3;
}

console.log(`${_biggestNumber} is the biggest integers number.`);

/* 4. write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for other data type

solution:
if-else;
if typeof data === string, print 1;
if typeof data === number, print 2;
else, print 3;
*/

const _theData: any = "Hello World!";
let _theNewData: number;

if (typeof _theData === "string") {
    _theNewData = 1;
} else if (typeof _theData === "number") {
    _theNewData = 2;
} else {
    _theNewData = 3;
}

console.log(_theNewData);

/* write a code to change every letter a into * from a string of input

solution:
use built-in method .replace;
use regex /a/gi;
*/

let _string: string = "An apple a day keeps the doctor away";

console.log(_string.replace(/a/gi, "*"));