const arr = [11, 9, 2, 4, 1, 13, 5, 2, 9, 1, 2, 0, -1];
printArray(arr);
bubbleSort(arr);
printArray(arr);

let index = binarySearch(arr, 5);
console.log(`index = ${index}`);
console.log(arr);

index = binarySearch(arr, 7);
console.log(`index = ${index}`);

sort(arr, ascendingComparator);
// sort(arr, (a,b) => b - a);
printArray(arr);

sort(arr, descendingComparator);
printArray(arr);

function printArray(arr) {
    console.log('=====================');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('=====================')
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function binarySearch(arr, value) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        // let remain = (((l + r) / 2) * 10) % 10 / 10;
        // let mid = ((l + r) / 2) % 10 - remain + 1;  Так не работает, кошда l + r >= 21

        // Почему Вы раньше не сказали, что в JS тоже есть Math.floor(), Math.round()

        let mid = Math.round((l + r) / 2);

        if (arr[mid] === value) {
            return mid;
        }
        if (value > arr[mid]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -l - 1;
}

function ascendingComparator(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

function descendingComparator(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}

function sort(arr, comparator) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


