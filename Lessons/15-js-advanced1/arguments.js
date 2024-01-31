const sum = function (a, b, ...rest) {
    // console.log(arguments.length);
    let res = a + b;
    for (let i = 0; i < rest.length; i++) {
        res += rest[i];
    }
    return res;
}

let res = sum(2, 3, 5, 7);
console.log(`result = ${res}`);