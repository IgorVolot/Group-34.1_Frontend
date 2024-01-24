// int[] arr = new int[5];
// int[] arr = {2,3,4,5,6};

const arr = [1,2,3, 'four', 'five', true];

console.log(typeof arr);
console.log(arr[3]);
console.log(typeof arr[3]);
console.log(arr.length);
arr[3] = 4;
console.log(arr[3]);
console.log(arr);
printArray(arr);

// let a = arr.length;
// a = 2;

// arr[10] = 100500;
arr[arr.length] = 100500;
arr[arr.length] = '42';
console.log(arr);
console.log(arr.length);
printArray(arr);
arr.length = 3;
console.log(arr);

const arr1 = [];

function printArray(arr) {
    console.log('=================');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('=====================')
}
