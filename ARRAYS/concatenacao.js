const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1 + a2; // String 1, 2, 34, 5, 6

const a4 = a1.concat(a2);// Array [ 1, 2, 3, 4, 5, 6 ] 
const a5 = [...a1, ...a2] // Array [ 1, 2, 3, 4, 5, 6 ] 
console.log(a4);
console.log(a5);