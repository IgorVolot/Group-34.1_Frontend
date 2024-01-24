let res = sumDigits(1234);
console.log(`sum digits = ${res}`); // 10

res = luckyNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'Lucky' : 'Unlucky'); // Lucky

function sumDigits(a) {
    let sum = 0;
    while (a !== 0) {
        let x = a % 10;
        a = a / 10 - x / 10;
        sum += x;
    }
    return sum;
}

// function sumDigits(a) {
//     let sum = 0;
//     while (a){
//         sum += a % 10;
//         a = (a - a % 10) / 10;
//     }
//     return sum;
// }

function luckyNumber(a) {
    let x1 = 0;
    let x2 = 0;
    while (a !== 0) {
        let digit = a % 10;
        x1 += digit;
        a = a / 10 - digit / 10;
        digit = a % 10;
        a = a / 10 - digit / 10;
        x2 += digit;
    }
    return x1 === x2;
}

// function luckyNumber(a) {
//     let sum = 0;
//     while (a) {
//         sum = a % 10 - sum;
//         a = (a - a % 10) / 10;
//     }
//     return !sum;
// }


