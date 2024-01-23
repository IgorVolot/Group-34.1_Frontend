let res = 0;
res = sumDigits(1234);
console.log(`sum digits = ${res}`); // 10

res = luckyNumber(12387); // 1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'Lucky' : 'Unlucky'); // Lucky

function sumDigits(a) {
    while (a !== 0) {
        let x = a % 10;
        a = a / 10 - x / 10;
        res += x;
    }
    return res;
}

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


