const arr = [1, 2, 3, 'four', 'five'];
console.log(typeof arr);
console.log('=========== push ==========='); // add element on last position
let res = arr.push(42, 81, 99);
console.log(arr);
console.log(res);

console.log('=========== pop ==========='); // delete last element
res = arr.pop();
console.log(arr);
console.log(res);

console.log('=========== shift ==========='); // delete first (index 0) element
res = arr.shift();
console.log(arr);
console.log(res);

console.log('=========== unshift ==========='); // on index 0 input n element
res = arr.unshift(0, 1);
console.log(arr);
console.log(res);

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
console.log('=========== concat ===========')
const arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(arr1);
console.log(arr2);

console.log('=========== slice ===========') // delete elements from Index to index
res = arr.slice(2, 6);
console.log(arr);
console.log(res);

console.log('=========== splice ===========') // delete from Index, N of elements
arr.splice(1, 4);
console.log(arr);

console.log('=========== splice ===========')
arr.splice(1, 2, -10, -20, -30);
console.log(arr);

console.log('=========== splice ===========')
arr.splice(0, 1);               // arr.shift()
console.log(arr);

console.log('=========== splice ===========')
arr.splice(0, 0, -10, -20); // arr.unshift(-10, -20)
console.log(arr);

console.log('=========== splice ===========')
arr.splice(arr.length -1, 1);   // arr.pop()
console.log(arr);

console.log('=========== splice ===========')
arr.splice(arr.length, 0, 100500); // arr.push(100500)
console.log(arr);
