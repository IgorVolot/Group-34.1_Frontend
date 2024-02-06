console.log('==============  String  ===============');
const str = 'qwertyiop';
for (const c of str) {
    console.log(c);
}

console.log('==============  Array  ===============');
const arr = [2, 3, 5, 7, 11, 13, 17, 19];

for (const n of arr) { // cycle without indexes
    console.log(n);
}

for (let i = 0; i < arr.length; i++) {  // cycle with indexes
    console.log(`${i} -> ${arr[i]}`);
}

arr.forEach((e, i) => console.log(`${i} --- ${e}`));